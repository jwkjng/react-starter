/**
* Routes that map paths with corresponding React components
*/
var React = require('react');
var ReactRouter = require('react-router-component');
var Locations = ReactRouter.Locations;
var Location = ReactRouter.Location;
var Link = ReactRouter.Link;
var Home = require('./jsx/index');
var PageTwo = require('./jsx/pageTwo');

module.exports = React.createClass({
  render: function () {
    return (
      <Locations path={this.props.path}>
        <Location path="/" handler={Home} />
        <Location path="/pagetwo" handler={PageTwo} />
        <Location path="/pagetwo/:id" handler={PageTwo} />
      </Locations>
    );
  }
});
