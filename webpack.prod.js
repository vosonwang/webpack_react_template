const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.base.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = merge(common, {
  output: {
    // 输出文件名称规则，这里会生成 'app.js'
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    // 清理dist文件夹
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      // 将css也带上hash值
      filename: '[name].[chunkhash].css',
      allChunks: true,
    }),
    // 无缓存配置
    // 固定vendorId
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // (随着 entry chunk 越来越多，这个配置保证没其它的模块会打包进 vendor chunk)
      minChunks: Infinity,
    }),
    // 在每次修改后的构建结果中，将 webpack 的样板(boilerplate)和 manifest 提取出来。
    // 通过指定 entry 配置中未用到的名称，此插件会自动将我们需要的内容提取到单独的包中
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    // 精简压缩代码
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // 用于生成index.html,并将入口文件app.js引入
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // 开启压缩html代码
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunks: ['manifest', 'vendor', 'index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'doc.html',
      template: 'public/doc.html',
      // 开启压缩html代码
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunks: ['manifest', 'vendor', 'doc'],
    }),
  ],
});

// 判断如果使用了npm run build --report，则插入分析插件，开启分析功能
if (process.env.npm_config_report) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin.BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
