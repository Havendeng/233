// pages/weibo/weiboList/weiboList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weibos:[],
  },
  writeWeibo:function(event){
    console.log(event);
    wx.navigateTo({
      url:"/pages/weibo/weibo/writeWeibo"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


});
