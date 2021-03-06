
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    news: ''
  },
  getSwiperList() {
    /**获取轮播图图片数据 */
    let that = this
    var jsonData = require('../../data/swiper_image.js')
    that.setData({
      swiperList: jsonData.swiperList,
    })
  
  },
  onLoad: function (options) {
    let that = this;
    that.getSwiperList()
    var postId=options.id;
    that.setData({
      news: that.data.swiperList[postId],
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
})
