const path = require("path");

module.exports = function override(config, env) {
  const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);

  const appIncludes = [
    resolveApp("src"),
    resolveApp("./node_modules/react-native-reanimated"),
    resolveApp("./node_modules/react-native-gesture-handler"),
    resolveApp("./node_modules/react-native-redash"),
  ];

  config.module.rules[2].oneOf[1].include = appIncludes;

  return config;
};
