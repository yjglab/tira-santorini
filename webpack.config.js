// old code only
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    layout: ["./src/client/js/layout.js", "./src/client/scss/layout.scss"],
    intro: ["./src/client/js/intro.js", "./src/client/scss/screens/intro.scss"],
    main: ["./src/client/js/main.js", "./src/client/scss/screens/main.scss"],
    header: ["./src/client/js/header.js"],
  },
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      // filename: "css/styles.css",
    }),
  ],
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    // aggregateTimeout: 3000,
    // poll: 1000,
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // sass->css->style
      },
    ],
  },
};
