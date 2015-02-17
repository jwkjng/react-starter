var React = require('React');

var Body = React.createClass({
  componentDidMount: function () {

  },
  render: function () {
    return (
      <div className="container content">
        <h4>Page Two</h4>
        <p>{"Second page"}</p>

      </div>
    );
  }
});

module.exports = Body;
