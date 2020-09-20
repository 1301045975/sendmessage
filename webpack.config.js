const { resolve } = require("core-js/fn/promise");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            //=>转换的语法预设（ES6->ES5）
            presets: [
              "@babel/preset-env"
            ],
            //=>基于插件处理ES6/ES7中CLASS的特殊语法
            plugins: [
              ["@babel/plugin-proposal-decorators", {
                "legacy": true
              }],
              ["@babel/plugin-proposal-class-properties", {
                "loose": true
              }],
              "@babel/plugin-transform-runtime"
            ]
          }
        }], //=>, "eslint-loader"
        //=>设置编译时忽略的文件和指定编译目录
        exclude: /node_modules/,
        // eslint-disable-next-line no-undef
        include: [path.resolve(__dirname, 'src'), resolve("node_modules/vue-baidu-map/components")],
        
      }]
  }
}
