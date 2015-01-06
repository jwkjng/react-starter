require('node-jsx').install({ extension: '.jsx' });
var koa       = require('koa');
var router    = require('koa-router');
var serve     = require('koa-static');
var React     = require('react');
var render    = require('./lib/reactRenderer');
var Bootstrap = React.createFactory(require('./jsx'));
var path      = require('path');
var app       = koa();

app.use(serve(path.resolve(__dirname, '../dist')));
app.use(router(app));

app.get('/', function *(next) {
  var data = {};
  var bootstrap = Bootstrap(data);

  this.body = render({ element: bootstrap, template: 'index.html' });
  yield next;
});

module.exports = app;
