const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return {
        ...webpackConfig,
        entry: {
          main: [
            env === "development" &&
              require.resolve("react-dev-utils/webpackHotDevClient"),
            paths.appIndexJs,
          ].filter(Boolean),
          content: paths.appSrc + "/chrome-ext/content.js",
          background: paths.appSrc + "/chrome-ext/background.js",
          pageWorld: "@inboxsdk/core/pageWorld.js",
        },
        output: {
          ...webpackConfig.output,
          filename: "[name].js",
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        },
        plugins: [
          ...webpackConfig.plugins,
          new HtmlWebpackPlugin({
            inject: true,
            chunks: ["s"],
            template: paths.appHtml,
            filename: "options.html",
          }),
        ],
      };
    },
  },
};
