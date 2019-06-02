//app.js
/* jshint esversion: 6 */
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
    // 获取头部导航栏和内容区域的高度
    wx.getSystemInfo({
      success:res=>{
        this.globalData.navHeigh = res.statusBarHeight*2;
        this.globalData.containerHeight = 750 * (res.windowHeight) / (res.windowWidth);
        console.log("app.js内容区域高度" + this.globalData.containerHeight);
        console.log("app.js导航栏高度" + this.globalData.navHeigh);
      },fail(err){
        console.log("错误提示"+err);
      }
    });
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });
  },
  globalData: {
    userInfo: null,
    containerHeight:1,
    coinTotalNum:2000,
    ownsCoinNum: 500,
    // navHeigh:0,
    
    
  },
});
