module.exports = function (api) {
  api.cache(false);

  const presets = [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ];
  const plugins = [];

  return {
    targets: {
      esmodules: false,
    },
    presets,
    plugins,
  };
};
