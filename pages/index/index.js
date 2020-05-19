//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: 'Hi 开发者！',
    userInfo: {},
    author: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    remind: '加载中',
    swiperList: [],
    actiList: [],
    actiStatus: 0,
    current: 0
  },
  getSwiperList() {
    /**获取轮播图图片数据 */
    let that = this
    var jsonData = require('../../data/swiper_image.js')
    that.setData({
      swiperList: jsonData.swiperList,
    })
  },
  /**获取轮播图当前图片索引 */
  cardSwiper: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  swiperClick: function (e) {
    let _this = this;
    let _index = this.data.current;
    wx.navigateTo({
      url: '../news/news?id=' + _index,
    })
  },
  /**获取活动信息 */
  getActiList() {
    let that = this
    wx.request({
      url: 'https://scuxingzhi.top:8080/activity/info',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        that.setData({
          actiList: res.data,
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      },
    })
  },
  /**
    * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        remind: ''
      });
    }, 1000);
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  goTonewAct:function(){
    wx.navigateTo({
      url: "../newAct/newAct",
    })
  },
  onLoad: function () {
    this.getActiList()
    this.getSwiperList()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: (res) => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        },
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  }
})
