const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  },
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/_color.scss";`,
      },
    },
  },
  filenameHashing: false,
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Asus-Chat-Widget",
    },
  },
});
