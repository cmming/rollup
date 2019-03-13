# Rollup 使用

> 学会使用 Rollup 封装插件

## 项目初始化

    npm init 
    
## 安装项目依赖

    npm install --save-dev rollup-plugin-json

    ## 安装开发 es6 开发依赖
    ### 来告诉 Rollup 如何查找外部模块
    npm install --save-dev rollup-plugin-node-resolve
    ## 将es6 编译为es5
    npm install --save-dev rollup-plugin-babel

    ##模块是在 .babelrc 文件中体现，目的是让babel转义出来的帮助性代码只在该文件的头部出现一次，而不会再每个引入的模块中加入，如果不想把这些帮助性的代码打包进你的文件，需要在rollup的配置文件中加入 externalHelpers: true，这样就会引用一个全局的babelHelpers 对象

    npm i -D babel-preset-latest babel-plugin-external-helpers


    npm install --save-dev rollup rollup-plugin-node-resolve rollup-plugin-babel babel-plugin-external-helpers babel-preset-latest

    npm install --save-dev rollup-plugin-node-resolve babel-core rollup-plugin-babel babel-plugin-external-helpers babel-preset-latest
    


## 创建配置文件

    rollup.config.js


##  热加载

    rollup --config rollup.config.dev.js
    rollup --config rollup.config.prod.js
    rollup --config rollup.config.js

