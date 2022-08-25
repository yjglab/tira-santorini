// old code only
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    layout: ["./src/client/js/layout.js", "./src/client/scss/layout.scss"],
    intro: ["./src/client/js/intro.js", "./src/client/scss/screens/intro.scss"],
    main: ["./src/client/js/main.js", "./src/client/scss/screens/main.scss"],
    nav: ["./src/client/js/components/nav.js"],

    story: [
      "./src/client/js/pages/story.js",
      "./src/client/scss/screens/story.scss",
    ],
    register: [
      "./src/client/js/pages/register.js",
      "./src/client/scss/screens/register.scss",
    ],
    login: [
      "./src/client/js/pages/login.js",
      "./src/client/scss/screens/login.scss",
    ],
    profile: [
      "./src/client/js/pages/profile.js",
      "./src/client/scss/screens/profile.scss",
    ],
    shop: [
      "./src/client/js/pages/shop.js",
      "./src/client/scss/screens/shop.scss",
    ],
    test: [
      "./src/client/js/pages/test.js",
      "./src/client/scss/screens/test.scss",
    ],
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
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]",
        },
      },
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "sass-loader",
        ], // sass->css->style
      },
      {
        test: /\.mp4$/,
        use: "file-loader?name=videos/[name].[ext]",
      },
    ],
  },
};
