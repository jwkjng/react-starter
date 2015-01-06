var React = require('React');

var Footer = React.createClass({
  render: function () {
    return (
      <div id="footer">
        <div className="green-strip"></div>
        <div className="footer">
          <div className="container">
          Amazing Code Hero <span className="blue-light">How I taught my kid to learn programming.</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
