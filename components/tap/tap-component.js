Component({
    properties: {
        tabList: {
            value: [],
            type: Array
        },
        isActive: {
            value: 0,
            type: Number
        }
    },
    methods: {
        changeAC(e) {
            this.triggerEvent('active',{
                active: e.currentTarget.dataset.index
            },{})
        }
    }
})