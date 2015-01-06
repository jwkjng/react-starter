var React = require('React');

var Header = React.createClass({
  render: function () {
    return (
    <div id="header">
      <div className="logo"><i className="mdi-action-grade"></i> AMAZING CODE HERO</div>
      <div className="green-strip"></div>
    </div>
    );
  }
});

module.exports = Header;
