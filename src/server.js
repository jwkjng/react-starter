var koa       = require('koa');
var router    = require('koa-router');
var serve     = require('koa-static');
var logger    = require('koa-logger');
var koaBody   = require('koa-better-body');
var React     = require('react');
var path      = require('path');
var jsx       = require('node-jsx');
var url       = require('url');
var render    = require('./lib/reactRenderer');
var app       = koa();

jsx.install({ extension: '.jsx' });

app.use(function *(next) {
  var routes = require('./routes');
  var path = url.parse(this.url).pathname;

  if (path === '/favicon.ico') {
    return;
  }

  this.reactRouter = { path: path, routes: routes };
  yield next;
});

app.use(logger());
app.use(koaBody({multipart:true}));
app.use(serve(path.resolve(__dirname, '../dist')));
app.use(router(app));


app.get('/', function *() {
  var reactRouter = this.reactRouter;
  var comp = reactRouter.routes({path: reactRouter.path, data: {}});
  this.body = render({ element: comp, template: 'index.html' });
});

app.get('/pagetwo', function *() { console.log('working...');
  var reactRouter = this.reactRouter;
  var data = { user: { name: 'tester' }};
  var comp = reactRouter.routes({path: reactRouter.path, data: data});
  this.body = render({ element: comp, template: 'index.html' });
});

module.exports = app;
