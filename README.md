## 概述
这是一个webpack+react+antd的模板

我发现less似乎更通过，虽然大漠等为sass背书

另外jsx后缀的文件没市场，所以也用了js后缀，并且关闭了eslint中的"react/jsx-filename-extension": 0

//todo 增加test

## UI
semantic-ui-react

## 特点
1.多页应用
2.使用了postcss-loader，而不是过时的autoprefixer-loader（iview就是还用的它）
3.国际化 react-intl

## 测试
Jest
Enzyme
参考：http://blog.csdn.net/qq673318522/article/details/70857678

## 代码检查
elint
airbnb

## bundle分析
webpack-bundle-analyzer

## 内嵌服务器
webpack-dev-server

## 更新日志
2018-2-18 移除了antd UI库，以semantic-ui-react作为UI库
