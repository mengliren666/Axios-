// let baseURL = ""
// switch (process.env.NODE_ENV) {
//     //可以在根目录的 package.json 配置 NODE_ENV
//     case 'production':
//         baseURL = "生产环境地址"
//         break;
//     case 'test':
//         baseURL = "测试环境地址"
//     default:
//         baseURL = "开发环境地址";
// }
const serverConfig = {
  baseURL: 'http://127.0.0.1:3007/', // 请求基础地址,可根据环境自定义
  useTokenAuthorization: true // 是否开启 token 认证
//   useTokenAuthorization: false // 是否开启 token 认证
}
export default serverConfig
