const path = require('path');

module.exports = {
  entry: './scripts/main.js',
  mode : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/bundle.js'
  }
};