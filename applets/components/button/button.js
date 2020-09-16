const gloablBehavior = require('../../behavior/global-behavior')
Component({
  behaviors:[gloablBehavior],
  properties:{
    //这里定义了innerText属性，属性值可以在组件使用时指定
    innerText:{
      type:String,
      value:'按钮'
    },
  },
  data:{
    //组件内部数据
    someData:{

    }
  },

  created() {
    console.log('created刚刚被创建')
  },
  attached() {
    console.log('组件实例进入页面树')
  },

  ready() {
    console.log('试图层布局完成后')
  },


  error() {
    console.log('组件方法抛出错误后执行')
  },

  //组件内部方法
  methods:{
    handleClick() {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})