Page({
    data: {
        tabList: ['通知','赞与感谢','关注'],
        isActive: 0
    },
    changeAC(e) {
        this.setData({
            isActive: e.detail.active
        })
    }
})