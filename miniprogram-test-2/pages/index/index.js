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
    InformTheContent:[
      // {id:1,content:"你好我是"},
      // {id:2,content:"我根本不"}
      {id:1,content:"你好我是第一条通知的内容"},
      {id:2,content:"我根本不想知道你在说什么"}
    ],
    orientation:"left",
    marqueeDistance:0,
    scrollFontSize:24,
    getPrizeTipsShow: true,
    CoinFallSpeed: 1000,
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
  addCoinFallSpeed: function (e) {
    // clearInterval(t1);
    console.log(t2 + "我是t2");
    clearTimeout(t2);
    let that = this;
    // 以下是为了让每次点击减少金币的下降时间，达到加速的目的
    if (that.data.CoinFallSpeed > 200) {
      that.setData({
        CoinFallSpeed: that.data.CoinFallSpeed - 100
      });
      console.log(that.data.CoinFallSpeed + ":1");
      // 当下降时间小于等于200时，让下降时间重置为200
    } else {
      console.log(that.data.CoinFallSpeed + ":2");
      that.setData({
        CoinFallSpeed: 200
      });
    };
    // var t1;
    // var t2 = setTimeout(() => {
    //   t1 = setInterval(() => {
    //     if (that.data.CoinFallSpeed < 1000) {
    //       console.log(that.data.CoinFallSpeed + ":3");
    //       that.setData({
    //         CoinFallSpeed: that.data.CoinFallSpeed + 50
    //       });
    //       // clearInterval(e.t1);
    //     } else {
    //       console.log(that.data.CoinFallSpeed + ":4");

    //       clearInterval(t1);
    //       return false
    //     }
    //   }, 1000);
    //   console.log(t1 + "我是t1")
    // }, 10000);
 
      var t2 = setTimeout(function() {
        var t3=setTimeout(function test() {
          if (that.data.CoinFallSpeed < 1000) {
            console.log(that.data.CoinFallSpeed + ":3");
            setTimeout(test, 1000);
            // clearInterval(e.t1);
          } else {
            return false
          }
          that.setData({
            CoinFallSpeed: that.data.CoinFallSpeed + 50
          });
        }, 1000);
      }, 10000);
 },

  addCoin: function () {
    let that = this;
    let barOutViewWidth = that.data.barOutViewWidth;
    that.setData({
      getPrizeTipsShow: false,
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