// pages/classroom/classroom.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option1: [
      { text: '文科楼', value: 0 },
      { text: '理科楼', value: 1 },
      { text: '信息楼', value: 3 },
      { text: '伟南楼', value: 4 }
    ],
    option2: [
      { text: '开始时间', value: 'a1' },
      { text: '8：00', value: 'a' },
      { text: '9：00', value: 'b' },
      { text: '10：00', value: 'c' },
      { text: '11：00', value: 'd' },
      { text: '12：00', value: 'e' },
      { text: '13：00', value: 'f' },
      { text: '14：00', value: 'g' },
      { text: '15：00', value: 'f' },
      { text: '16：00', value: 'i' },
      { text: '17：00', value: 'j' },
      { text: '18：00', value: 'k' },
      { text: '19：00', value: 'l' },
      { text: '20：00', value: 'm' },
      { text: '21：00', value: 'n' },
      { text: '22：00', value: 'o' }

    ],
    option3: [
      { text: '结束时间', value: 'a1' },
      { text: '8：00', value: 'a' },
      { text: '9：00', value: 'b' },
      { text: '10：00', value: 'c' },
      { text: '11：00', value: 'd' },
      { text: '12：00', value: 'e' },
      { text: '13：00', value: 'f' },
      { text: '14：00', value: 'g' },
      { text: '15：00', value: 'f' },
      { text: '16：00', value: 'i' },
      { text: '17：00', value: 'j' },
      { text: '18：00', value: 'k' },
      { text: '19：00', value: 'l' },
      { text: '20：00', value: 'm' },
      { text: '21：00', value: 'n' },
      { text: '22：00', value: 'o' }
    ],
    value1: 0,
    value2: 'a1',
    value3: 'a1',
    value: '',
    classroom: ['文科楼\n101', '文科楼\n102', '文科楼\n103', '文科楼\n104', '文科楼\n105', '文科楼\n106', '文科楼\n107', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201', '文科楼\n108', '文科楼\n201']
  },

  //搜索方法
  onChange(e) {
    this.setData({
      value: e.detail
    });
  },
  onSearch() {
    wx.showToast({
      title: '搜索',
    })

  },
  onClick() {
    Toast('搜索' + this.data.value);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})