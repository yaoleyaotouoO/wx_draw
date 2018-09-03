import Api from './common/api.js';
const CONFIG = require('./common/config.js');

const api = new Api();

//app.js
App({
  onLaunch: function() {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              this.globalData.userInfo = res.userInfo;

              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          })
        }
      }
    });
  },
  globalData: {
    userInfo: null,
    api,
    CONFIG
  }
})