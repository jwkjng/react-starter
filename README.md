# React Starter - Web Project Template
React Starter is a simple web project boilerplate based on [React](http://facebook.github.io/react), [Koa](http://koajs.com/), [Gulp](http://gulpjs.com/), [webpack](http://webpack.github.io/), and [Sass](http://sass-lang.com/).

## Getting started

To run a dev build:

```
gulp --harmony dev
```

The template requires a node version that supports the harmony flag, which is a prerequisite for using koa.js anyways.

Benefits:
- The default React page is server-rendered to improve first page loading performance and SEO.
- Uses Mustache to use templates to host React components.
- Livereload only builds the necessary steps (jsx, sass, static assets).
- Supports isomorphic React development with the capability to render components both on the client and on the server.
