var React = require('react');
var Header = require('./homeHeader');
var Footer = require('./homeFooter');
var Main = require('./homeMain');

var app = React.createClass({
  componentDidMount: function () {
    console.log('#events attached from the client side.');
  },
  render: function () {
    return (
      <div id="home" className="page">
        <div className="wrapper">
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
});


module.exports = app;
