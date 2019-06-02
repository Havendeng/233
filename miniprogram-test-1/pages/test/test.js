// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  writeWeibo:function(event){
    console.log(event);
    wx.navigateTo({
      url:"/pages/more/more"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


});
