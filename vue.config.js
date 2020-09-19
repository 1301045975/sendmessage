// module.exports = {
//     css: {
//       loaderOptions: {
//         postcss: {
//           plugins: [
//             require("autoprefixer")({
//               // 配置使用 autoprefixer
//               overrideBrowserslist: ["last 15 versions"] 
//             }),
//             require("postcss-pxtorem")({
//               rootValue: 100, // 换算的基数
//               propList: ["*"],
//             //exclude: /node_modules/  //配置无需转换
//             })
//           ]
//         }
//       }
//     }
//   };
module.exports = {
  configureWebpack: config => {
    config.entry.app = ["babel-polyfill", "./src/main.js"]
  }
}