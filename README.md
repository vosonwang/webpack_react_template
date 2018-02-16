## 概述
这是一个webpack+react+antd的模板

我发现less似乎更通过，虽然大漠等为sass背书

另外jsx后缀的文件没市场，所以也用了js后缀，并且关闭了eslint中的"react/jsx-filename-extension": 0

//todo 增加test


## 特点

1.多页应用
2.使用了postcss-loader，而不是过时的autoprefixer-loader（iview就是还用的它）

## 测试
mocha
jest

## 代码检查
elint
airbnb

## bundle分析
webpack-bundle-analyzer

## 内嵌服务器
webpack-dev-server
