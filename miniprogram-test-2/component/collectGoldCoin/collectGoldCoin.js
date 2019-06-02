// component/collectGoldCoin/collectGoldCoin.js
/* jshint esversion: 6 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    coinNum: {
      type: Number,
      value: 0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    goldCoinFall: false,
    animateViewScale: false,
    moneyBagWiggle: false,
    coinNumShow: false,
    // 设置出现多少个金币：7
    coinList: [1,2,3,4,5,6,7],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    playCollectGoldCoinAnimat: function () {
      // setTimeout(closeGoldCoinAnimat(), 3000);
      let that = this;
      let animateViewScale = that.data.animateViewScale;
      let goldCoinFall = that.data.goldCoinFall;
      let moneyBagWiggle = that.data.moneyBagWiggle;
      let coinNumShow = that.data.coinNumShow;
      that.setData({
        animateViewScale: !animateViewScale,
        goldCoinFall: !goldCoinFall,
        moneyBagWiggle: !moneyBagWiggle,
        coinNumShow: !coinNumShow,
      });
      setTimeout(
        function () {
          that.setData({
            goldCoinFall: false,
            animateViewScale: false,
            moneyBagWiggle: false,
            coinNumShow: false,
          });
        }, 3000);

    },
    // playCollectGoldCoinAnimat: () => {
    //   console.log(233);
    //   this.setData({
    //     animateViewScale: !animateViewScale,
    //     goldCoinFall: !goldCoinFall,
    //     moneyBagWiggle: !moneyBagWiggle,
    //     coinNumShow: !coinNumShow,
    //   })

    // },
  }
});
