Page({
    data: {
        avatatUrl: '',
        nickName: '',
        list: [{
            type: '我的关注',
            icon: '../../images/eye.png'
        },
        {
            type: '我的收藏',
            icon: '../../images/star.png'
        },
        {
            type: '我的草稿',
            icon: '../../images/draft.png'
        },
        {
            type: '最近浏览',
            icon: '../../images/recent.png'
        },
        {
            type: '我的书架',
            icon: '../../images/book.png'
        },
        {
            type: '我的Live',
            icon: '../../images/live.png'
        },
        {
            type: '我的知乎',
            icon: '../../images/zhi.png'
        }]
    },
    onLoad() {
        const _this = this
        wx.getUserInfo({
            success: function (res) {
                const userInfo = res.userInfo
                const avatatUrl = userInfo.avatarUrl
                const nickName = userInfo.nickName

                _this.setData({
                    avatatUrl,
                    nickName
                })
            }
        })
    }
})