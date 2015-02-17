var React = require('react');
var Mustache = require('mustache');
var fs = require('fs');
var path = require('path');

module.exports = function (options) {
  var element = options.element;
  var templateName = options.template;
  var templateFilePath = path.resolve(__dirname, '../templates', templateName);
  var template = fs.readFileSync(templateFilePath, 'utf8');

  Mustache.parse(template);

  var page = React.renderToString(element);
  var rendered = Mustache.render(template, {page: page});

  return rendered;
};
