// pages/modify/modify.js
Page({
  data: {
    username: '',
    gender: '',
    xueyuan:'',
    zhuangye:'',
    xuehao:''
  },
  onLoad: function (options) {
    this.setData({
      // 收到数据后使用decodeURIComponent()解码
      username: decodeURIComponent(options.username),
      gender: decodeURIComponent(options.gender),
      xueyuan: decodeURIComponent(options.xueyuan),
      zhuangye: decodeURIComponent(options.zhuangye),
      xuehao: decodeURIComponent(options.xuehao)
    })
  },
  formSubmit: function (e) {
    // 表单返回的所有数据
    var formData = e.detail.value
    // 获取上一个页面的对象
    var pages = getCurrentPages()
    var prevPage = pages[pages.length - 2]
    // 调用上一个页面的 setData() 方法，把数据存到上一个页面中去
    prevPage.setData({
      username: formData.username,
      gender: formData.gender,
      xueyuan: formData.xueyuan,
      zhuangye: formData.zhuangye,
      xuehao: formData.xuehao
    })
    // 返回到上一个页面
    wx.navigateBack()
  }
})