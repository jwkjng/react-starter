var gulp          = require('gulp');
var gutil         = require('gulp-util');
var react         = require('gulp-react');
var reload        = require('gulp-livereload');
var sass          = require('gulp-ruby-sass');
var lr            = require('koa-livereload');
var clean         = require('rimraf');
var runSequence   = require('run-sequence');
var webpack       = require('webpack');
var path          = require('path');
var webpackConfig = require('./webpack.config.js');
var server        = require('./src/server');
var lrqueue       = [];
var config        = {
  env: {
    port: 7000,
    livereloadPort: 30000
  },
  src: {
    static: [ 'src/**/*',
              '!src/{jsx,jsx/**/*}',
              '!src/{templates,templates/**/*}',
              '!src/vendor/{materialize,materialize/**/*}',
              '!src/{scss,scss/**/*}',
              '!src/server.js'],
    jsx: 'src/jsx/**/*',
    vendor: 'src/vendor/**/*',
    templates: 'src/templates/**/*',
    materialize: 'src/vendor/materialize',
    materializeFont: 'src/vendor/materialize/{font,font/**/*}',
    styles: 'src/scss'
  },
  dest: {
    dir: 'dist',
    vendor: 'dist/vendor',
    styles: 'dist/styles',
    materialize: 'dist/vendor/materialize'
  }
};

gulp.task('clean', function (cb) {
  clean.sync(config.dest.dir);
  cb();
  // gulp.src(config.dest.dir + '/**/*')
  //   .pipe(clean());
  // cb();
});

gulp.task('copy', function () {
  return gulp.src(config.src.static)
    .pipe(gulp.dest(config.dest.dir));
});

gulp.task('webpack', function (cb) {
  webpack(webpackConfig, function () {
    cb();
  });
});

gulp.task('sass', function () {
  return gulp.src(config.src.styles + '/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(config.dest.styles));
});

gulp.task('materialize', ['materialize-font'], function () {
  return gulp.src(
    [
    '!' + config.src.materialize + '/{sass,sass/**/*}',
    '!' + config.src.materializeFont,
    config.src.materialize + '/**/*'
    ])
    .pipe(gulp.dest(config.dest.materialize));
  });

gulp.task('materialize-font', function () {
  return gulp.src(config.src.materializeFont)
    .pipe(gulp.dest(config.dest.dir));
});

gulp.task('rebuild', ['clean', 'build']);

gulp.task('build', ['webpack', 'sass', 'materialize', 'copy']);

gulp.task('server', function () {
  server.use(lr({ port: config.env.livereloadPort }));
  server.listen(config.env.port, function () {
    gutil.log(gutil.colors.yellow('Starting server at http://localhost:' + config.env.port));
  });
});

gulp.task('watch', function () {
  reload.listen(config.env.livereloadPort);

  gulp.watch('./src/**/*.*').on('change', function (e) {
    lrqueue.push(e.path);
  });

  gulp.watch(config.src.styles + '/**/*.scss', function () {
    runSequence(['sass', 'materialize'], 'reload');
  });

  gulp.watch(config.src.jsx, function () {
    runSequence('webpack', 'reload');
  });

  gulp.watch(config.src.templates, ['reload']);
  gulp.watch(config.src.static, function () {
    runSequence('copy', 'reload');
  });
});

gulp.task('reload', function (cb) {
  if (lrqueue.length > 0) {
    var path = lrqueue.pop();
    reload.changed(path);
    lrqueue.length = 0;
    gutil.log(gutil.colors.yellow(path.replace(__dirname, ''), 'has been changed. Rebuilding...'));
  }
  cb();
});

/**
 * Starter Tasks
 */
gulp.task('dev', ['rebuild', 'watch', 'server']);

gulp.task('prod', ['rebuild', 'server']);
