/**
 * Initialization steps
 */
var React = require('react');
var routes = require('./routes');
// var app = React.createFactory(require('./jsx'));

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.render(routes(), document.getElementById('main'));
  }
}

module.exports = routes;
