const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },

      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[hash].[ext]",
      //         outputPath: "img/",
      //       },
      //     },
      //   ],
      // },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", // asset/resource вместо file-loader
        generator: {
          filename: "img/[name].[hash][ext]", // для генерации имени файла
        },
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
