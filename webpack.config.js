const path = require("path");

module.exports = {
  resolve: {
    fallback: {
      querystring: require.resolve("querystring-es3"),
      buffer: require.resolve("buffer"),
    },
  },
  plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
