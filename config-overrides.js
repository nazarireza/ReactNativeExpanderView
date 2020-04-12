const path = require("path");

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);

  const appIncludes = [
    resolveApp("src"),
    resolveApp("./node_modules/react-native-reanimated"),
  ];

  config.module.rules[2].oneOf[1].include = appIncludes;
  //   config.module.rules[2].oneOf[1].options.plugins = [
  //     require.resolve("babel-plugin-react-native-web"),
  //   ].concat(config.module.rules[2].oneOf[1].options.plugins);

  //   config.module.rules = config.module.rules.filter(Boolean);

  return config;
};
