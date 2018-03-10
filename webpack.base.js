const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        admin: ['react-hot-loader/patch', './src/admin/index.js'],
        index: ['react-hot-loader/patch', './src/index/index.js'],
        notFound: ['react-hot-loader/patch', './src/404/index.js'],
        vendor: ['lodash', 'react-dom', 'react-hot-loader', 'moment']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // 压缩css
                                minimize: true,
                                sourceMap: true,
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // 压缩css
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }]
                })
            },
            // 当图片文件大于10KB时，复制文件到指定目录，小于10KB转为base64编码
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: './images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}