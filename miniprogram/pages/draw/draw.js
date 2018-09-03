const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    userInfo: {},
    src: "../../images/profile.jpg",
    createRoomNodes: [{
      name: 'a',
      attrs: {
        class: 'draw-home-create-text',
        style: ''
      },
      children: [{
        type: 'text',
        text: '开始创建 >'
      }]
    }],
    startGameNodes: [{
      name: 'a',
      attrs: {
        class: 'draw-home-create-text',
        style: ''
      },
      children: [{
        type: 'text',
        text: '立即开始 >'
      }]
    }],
    createRoomSrc: '../../images/1.png',
    startGameSrc: '../../images/2.png'
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  bindgetuserinfo: function(e) {
    console.log("bindgetuserinfo: ", e.detail);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  createRoom: function() {
    console.log("createRoom");
  },
  startGame: function() {
    console.log('startGame');
  }
})