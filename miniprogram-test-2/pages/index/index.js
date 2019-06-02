//index.js
//获取应用实例
// this.data与this.setData的关系就是this.setData里面存储的是this.data的副本， 
// 而界面是从this.setData里面托管的this.data的副本取数据的。 
// 所以我们更改this.data并不会直接更新界面， 
// 因为这个时候的this.setData里面的副本还是没有更新前的。
/* jshint esversion: 6 */
const app = getApp();

Page({
  data: {
    collectGoldCoin: null,
    barOutViewWidth: null,
    containerHeight: null,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onShareAppMessage() {
    return {
      title: '这是我邓衡锋写的第一个小程序',
      desc: '分享页面的内容',
      path: '/pages/index/index' // 路径，.传递参数到指定页面。
    };

  },
  onLoad: function () {
    let barOutViewWidth = parseInt((app.globalData.ownsCoinNum / app.globalData.coinTotalNum) * 490);
    this.setData({
      containerHeight: app.globalData.containerHeight,
      barOutViewWidth: barOutViewWidth
    });
  },
  addCoin: function () {
    console.log(this);
    let that = this;
    let barOutViewWidth = that.data.barOutViewWidth;
    that.setData({
      barOutViewWidth: barOutViewWidth + 20
    });
  },
  comingSoon: function () {
    wx.showToast({
      title: '还在开发当',
      icon: 'loading',
      duration: 1000
    });
  },

  playCollectGoldCoinAnimat: function () {
    // 为了在当前页面调取组件内的方法，需要先在页面内的组件节点绑定Id，获取到后再调用
    this.selectComponent("#collectGoldCoin").playCollectGoldCoinAnimat();
  },
  onReady: function () {

  },

  getUserInfo: function (e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});