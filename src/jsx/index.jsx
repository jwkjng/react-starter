var React = require('react');
var ThankYou = require('./thankyouWorld');

var app = React.createClass({
  componentDidMount: function () {
    console.log('#events attached from the client side.');
  },
  render: function () {
    return (
      <div>
        <h1>Hello World!!</h1>
        <p>This is a web starter template using koa.js, gulp, webpack, and kube css</p>
        <ThankYou />
      </div>
    );
  }
});


module.exports = app;
