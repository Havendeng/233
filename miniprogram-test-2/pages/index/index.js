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
    informTheContent: [
      {id: 1,content: "点进度条,狂点矿车"},
      {id: 2,content: "我根本不想知道你在说什么"},
      {
        id: 3,
        content: "只能用于数组ARRAY取值，对key,value只有这样取值才是正确的"
      },
      {
        id: 4,
        content: "小程序JS循环取值"
      },
      {
        id: 5,
        content: "pdf下载地址：Java面试宝典 第一章内容介绍	20 第"
      }
    ],

    orientation: "left",
    marqueeDistance: 320,
    scrollFontSize: 24,
    getPrizeTipsShow: true,
    // 在此定义一个全局的timer，用于金币下落一段时间后减速
    timer: null,
    // fallCoinTop是金币下落的初始高
    fallCoinTop: -95,
    // CoinFallSpeed是金币下落的步进
    coinFallSpeed: 2,
    // 金币下落的加速度
    coinFallAcceleratedSpeed: 1,
    scrollTextWidth: null,
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

  getUserInfo: function (e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  onLoad: function () {
    let barOutViewWidth = parseInt((app.globalData.ownsCoinNum / app.globalData.coinTotalNum) * 490);
    this.setData({
      containerHeight: app.globalData.containerHeight,
      barOutViewWidth: barOutViewWidth
    });
    // getUserInfo();
    // 此处setInterval是制作金币下落的动画
    setInterval(() => {
      if (45 > this.data.fallCoinTop && this.data.fallCoinTop >= -95) {
        this.setData({
          fallCoinTop: this.data.fallCoinTop + Math.ceil(this.data.coinFallSpeed * this.data.coinFallAcceleratedSpeed),
          coinFallAcceleratedSpeed: this.data.coinFallAcceleratedSpeed + 0.1,
        });

        // console.log(this.data.fallCoinTop);
      } else {
        this.setData({
          fallCoinTop: -95,
          coinFallAcceleratedSpeed: 0
        });
      }
    }, 30);
    // 以下是为了计算文字跑马灯所在是view 的长度
    let widthCount = 0;
    for (let i = 0; i < this.data.informTheContent.length; i++) {

      widthCount = (this.data.informTheContent[i].content.length * this.data.scrollFontSize) + widthCount + 50;
      console.log(widthCount);
    }
    this.setData({
      scrollTextWidth: widthCount,
    });
// 此处setInterval是制作文字跑马灯动画
    setInterval(() => {
      // console.log(this.data.marqueeDistance);
      if (-(this.data.marqueeDistance) < this.data.scrollTextWidth) {
        this.setData({
          marqueeDistance: this.data.marqueeDistance - 13,
        });
        
      } else {
        this.setData({
          marqueeDistance: 320,
        });
      }
    }, 100);
  },
  // addCoinFallSpeed是通过点击增加金币下落速度的方法
  addCoinFallSpeed: function () {
    let that = this;
    clearTimeout(that.data.timer);
    if (that.data.coinFallSpeed <= 20) {
      that.setData({
        coinFallSpeed: that.data.coinFallSpeed + 1
      });
    } else {
      that.setData({
        coinFallSpeed: 20
      });
    }
    that.setData({
      // timer: setTimeout；timer是个全局变量此处是为其赋值
      timer: setTimeout(() => {
        setTimeout(function test() {
          if (that.data.coinFallSpeed > 2) {
            setTimeout(test, 1000);
          } else {
            return false;
          }
          that.setData({
            coinFallSpeed: that.data.coinFallSpeed - 1
          });
        }, 1000);
      }, 10000)
    });
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
  onShow: function () {

  },


});