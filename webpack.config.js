// old code only
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BASE_JS_PATH = "./src/client/js/";
const BASE_SCSS_PATH = "./src/client/scss/";
module.exports = {
  entry: {
    layout: [BASE_JS_PATH + "layout.js", BASE_SCSS_PATH + "layout.scss"],
    intro: [BASE_JS_PATH + "intro.js", BASE_SCSS_PATH + "screens/intro.scss"],
    main: [BASE_JS_PATH + "main.js", BASE_SCSS_PATH + "screens/main.scss"],
    nav: [BASE_JS_PATH + "components/nav.js"],

    story: [
      BASE_JS_PATH + "pages/story.js",
      BASE_SCSS_PATH + "screens/story.scss",
    ],
    review: [
      BASE_JS_PATH + "pages/review.js",
      BASE_SCSS_PATH + "screens/review.scss",
    ],
    register: [
      BASE_JS_PATH + "pages/register.js",
      BASE_SCSS_PATH + "screens/register.scss",
    ],
    login: [
      BASE_JS_PATH + "pages/login.js",
      BASE_SCSS_PATH + "screens/login.scss",
    ],
    profile: [
      BASE_JS_PATH + "pages/profile.js",
      BASE_SCSS_PATH + "screens/profile.scss",
    ],
    shop: [
      BASE_JS_PATH + "pages/shop.js",
      BASE_SCSS_PATH + "screens/shop.scss",
    ],
    store: [
      BASE_JS_PATH + "pages/store.js",
      BASE_SCSS_PATH + "screens/store.scss",
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
