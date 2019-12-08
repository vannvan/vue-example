

/*
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 */
let routerMode = 'history';
let DEBUG = false;
let cancleHTTP = [];//取消请求头设置；
//注：下面的baseUrl地址为假地址，只是模拟的，无法调通。
// let env = process.env.NODE_ENV

// const API_CONFIG_LIST = require('../../../config/api.conf')

// console.log(API_CONFIG_LIST)

const API_CONFIG = {
  'development':'http:127.0.0.1:8088',
  'testing':'https://10.248.65.150/GetTravelMethod',
  'production':"https://10.248.65.200/GetTravelMethod",
  'preproduction':"https://10.248.65.300/GetTravelMethod"
}

let baseUrl = API_CONFIG[process.env.NODE_ENV]


export{
   baseUrl,
   routerMode,
   DEBUG,
   cancleHTTP
}
