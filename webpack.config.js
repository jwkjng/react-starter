var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: __dirname + '/src',
  entry: "./app",
  output: {
    path: path.resolve(__dirname, "dist/scripts"),
    filename: "app.js"
  },
  module: {
    loaders: [
      // required to write "require('./style.css')"
      { test: /\.css$/,    loader: "style-loader!css-loader" },

      // required for react jsx
      { test: /\.js$/,    loader: "jsx-loader" },
      { test: /\.jsx$/,   loader: "jsx-loader?insertPragma=React.DOM" }
    ]
  },
  resolve: {
    alias: {
      // Bind version of jquery
      jquery: "jquery-2.0.3"
    },
    extensions: ["", ".js", ".webpack.js", ".web.js", ".jsx"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ]
};
