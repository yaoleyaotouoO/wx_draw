const CONFIG = require('./config.js');

export default class Api {
  constructor() {}

  createRoom(roomName) {
    let data = {
      roomName
    }

    // arguments.callee.name 获取当前函数名
    return this.post('createRoom', data);
  }

  findRoom(roomName) {
    let data = {
      roomName
    }

    return this.get('findRoom', data);
  }

  get(url, data) {
    return this.requestData('get', url, data);
  }

  post(url, data) {
    return this.requestData('post', url, data);
  }

  requestData(method, url, data) {
    if (!method || !url) {
      return;
    }

    let requestUrl = `${CONFIG.LOCAL.HTTP_URL}/api/${url}`;

    return new Promise((resolve, reject) => {
      wx.request({
        url: requestUrl,
        data: data || {},
        method: method.toLocaleUpperCase(),
        success: function(res) {
          console.log("请求成功的数据： ", res);
          if (res.statusCode === 200) {
            resolve(res.data);
          }

        },
        fail: function(res) {
          reject(res.errMsg || '网络超时');
        }
      });
    })
  }

}