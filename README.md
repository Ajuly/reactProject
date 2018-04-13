## 安装

    yarn add webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 style-loader css-loader less-loader file-loader url-loader html-webpack-plugin babel-preset-react  --dev

    yarn add react react-dom redux react-redux react-router-dom redux-logger redux-logger redux-thunk redux-promise axios less

    yarn add react-transition-group
## webpack

    "scripts": {
        "dev": "webpack-dev-server", // 开发
        "build": "webpack" // 可以打出实体的文件
    }

## 写功能的流程

    1.服务端可以实现提供接口
    2.前端在api中增加接口
    3.action-types获取轮播图
    4.在action中调用接口 
    5.编写reducer
    6.在组件中调用action动作

## 需要安装的依赖包

    yarn add express body-parser express-session

    yarn add swipe-js-iso react-swipe