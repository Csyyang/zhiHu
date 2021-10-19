
import { getData2 } from '../../utils/util.js'

Page({
    data: {
        tabList: ['推荐', '圆桌', '热门', '收藏'],
        isActive: 0,
        images: ['../../images/24213.jpg', '../../images/24280.jpg', '../../images/1444983318907-_DSC1826.jpg'],
        feed: []
    },
    changeAC(e) {
        this.setData({
            isActive: e.detail.active
        })
    },
    onLoad() {
        this.getData()
    },
    getData() {
        const feed = getData2()
        this.setData({
            feed: feed,
        })
    },
})