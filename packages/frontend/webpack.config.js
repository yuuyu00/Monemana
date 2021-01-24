const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const distDir = "public";

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, distDir),
    chunkFilename: "[name].bundle.js",
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Monemana",
      template: path.resolve("src", "assets", "index.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|svg|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: process.env.NODE_ENV === "development",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};
