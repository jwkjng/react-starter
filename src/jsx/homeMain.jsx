var React = require('React');

var Body = React.createClass({
  componentDidMount: function () {

  },
  render: function () {
    return (
      <div className="container content">
        <h4>Meet <span className="h">H</span> our code hero!</h4>
        <p>{"H will help you to learn coding. Let's get started!"}</p>
        <form className="row content-box" action="/courses" method="post">
          <div className="input-field col s5">
            <label htmlFor="name">Enter Your Name</label>
            <input id="name" type="text" />
          </div>
          <button id="btn-start" className="btn waves-effect waves-light col s3" type="submit" name="action">Start!
            <i className="mdi-action-stars right"></i>
          </button>
        </form>
      </div>
    );
  }
});

module.exports = Body;
