module.exports = {
  entry: "./app",
  output: {
    filename: "build/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel"
    }]
  }
}
