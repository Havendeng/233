// component/navbar/navbar.js
/* jshint esversion: 6 */
const app = getApp();
Component({
  properties:{
    pageName:String,
    showBackButton:{
      type:Boolean,
      // 在此控制默认是否展示返回按钮
      value:true
    }
  },
  /**
   * 页面的初始数据
   */
   data: {
     navH:30
   },
  attached:function(){
    // 为什么这样不行？
    // let that = this;
    let navH = app.globalData.navHeigh
    this.setData({
      navH: navH
      });
      // 这样就可以？
    // this.setData({
    //   navH: app.globalData.navHeigh
    // });
  },

  methods:{
    navBack:function(){
      console.log("返回按钮被点击");
      wx.navigateBack({
        delta:1
      });
    }
  },
});
