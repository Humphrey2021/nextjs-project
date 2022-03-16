import { extend } from 'umi-request';
import  Router  from 'next/router';

const request = extend({
  prefix: '/api/v1',
  suffix: '.json',
  timeout: 1000,
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  params: {
    token: 'xxx' // 所有请求默认带上 token 参数
  },
  errorHandler: function (error) {
    console.log(error)
    /* 异常处理 */
  }
})

request.interceptors.response.use(async (response, options) => {
  let result,
    errortext = '';
  console.log(response.status, options);
  if (response) {
    if (response.status !== 200) {
    // 统一错误处理
      if (response.status === 400) {
        return;
      }
      if (response.status === 404) {
        Router.push('/404')
      }
      if (response.status === 401) {
        console.log('登录已过期，请重新登录');
        Router.push('/404')
      }
    }
    result = response;
  }
  return result;
})


export { request }
