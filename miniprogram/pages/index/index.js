//index.js
const app = getApp()

Page({
  data: {
  },
  info: function () {
    wx.navigateTo({
      url: '/pages/person/person',
    })

  },
  jilu: function () {
    wx.navigateTo({
      url: '/pages/jilu/jilu',
    })

  },

})
