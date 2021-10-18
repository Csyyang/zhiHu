// index.js
// 获取应用实例
import { getData2, getNext } from '../../utils/util.js'

Page({
  data: {
    feed: [],
    test: false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    this.getData()
  },
  // 监听上拉
  onReachBottom() {
    this.lower()
  },
  goQuestion() {
    wx.navigateTo({
      url: '../question/question' 
    })
  },
  goAnswer() {
    wx.navigateTo({
      url: '../answer/answer',
    })
  },
  // 监听下拉
  onPullDownRefresh() { 
    this.upper()
  },
  upper() {
    wx.showNavigationBarLoading() //在当前页面显示导航条加载动画参数
    
    this.refresh()

    setTimeout(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      
    }, 2000)

  },
  lower() {
    wx.showNavigationBarLoading()

    setTimeout(() => {
      wx.hideNavigationBarLoading()
      this.nextLoad()
    }, 1000)


  },
  // 获取数据
  getData() {
    const feed = getData2()
    this.setData({
      feed: feed,
    })
  },
  // 下拉数据加载
  nextLoad() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 4000
    })

    const resData = getNext().data

    this.setData({
      feed: this.data.feed.concat(resData),
    })

    setTimeout(() => {
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    }, 2000)
  },
  // 刷新
  refresh() {
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    })

    const feed = getData2()

    this.setData({
      feed
    })

    setTimeout(() => {
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
  }
})
