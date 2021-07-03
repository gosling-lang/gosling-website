const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require('path');

module.exports = function(context, options) {
    return {
      name: 'monaco-webpack-plugin',
      configureWebpack(config, isServer) {
        return {
            plugins: [
              new MonacoWebpackPlugin()
            ]
        };
      },
    };
  };