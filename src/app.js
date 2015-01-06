/**
 * Initialization steps
 */
var React = require('react');
var app = React.createFactory(require('./jsx'));

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.render(app(), document.getElementById('main'));
  }
}

module.exports = app;
