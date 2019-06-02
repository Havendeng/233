//index.js
//获取应用实例
 /* jshint esversion: 6 */
const app = getApp();

Page({
  data: {
    username:"haven",
    person:{
      username:"deng",
      age:"18"
    },
    books:["three kingdom","west travel","hongloum"],
    weather:"sunday",
    massage:[
      {
        id:1,
        content:"nihao",
        name:"dhf"
      },
      {
        id:2,
        content:"nishi",
        name:"lss"
      },
    ]

  },
  update:function(event){
    var books = this.data.books;
    books.splice(0,0,"shuihuzhuan");
    this.setData({
      books:books,
    });
  },
  showSome:function(event){
    this.setData({
      username : "daxigua",
      "books[2]":"jinpinm",
    });
    var dataset = event.currentTarget.dataset;
    console.log(dataset);
  },
  onLoad: function () {

  }
});
