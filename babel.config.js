module.exports = function (api) {
  const isProduction = api.env("production");
  const plugins = [];

  if (isProduction) {
    plugins.push("transform-react-remove-prop-types");
  }

  return {
    // ...
    plugins,
    // ...
  };
};
