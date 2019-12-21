import Message from './src/Message';
import Vue from 'vue';



const MESSAGE = {
  duration: 3000,
  animateTime: 300,
  install(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }

    Vue.component(Message.name,Message)
    //
    function msg(type, text, callback) {
      let msg
      let duration = MESSAGE.duration
      if(typeof text === 'string') {
        msg = text
      }else if (text instanceof Object) {
        msg = text.text || 'msg格式错误'
        if(text.duration) {
          duration = text.duration
        }
      }
      let VueMessage = Vue.extend({
        render(h) {
          let props = {
            type,
            text: msg,
            show: this.show
          }
          return h('message',{props})
        },
        data() {
          return {
            show: false
          }
        }
      })

      let newMessage =new VueMessage()
      let vm  = newMessage.$mount()
      let el = vm.$el
      document.body.appendChild(el)
      vm.show = true
      // let t1 = setTimeout(() => {
      //   clearTimeout(t1)
      //   vm.show = false
      //   let t2 = setTimeout(() => {
      //     clearTimeout(t2)
      //     document.body.removeChild(el)
      //     newMessage.$destroy()
      //     vm = null
      //     callback && (typeof callback === 'function') && callback()
      //
      //   },MESSAGE.animateTime)
      // },duration)
    }

    Vue.prototype.$Message = {
      info(text,callback) {
        if(!text) return
        msg('info',text,callback)
      }

    }

  }
}

// MESSAGE..prototype.info = info(text,callback) {
//   if(!text) return
//   msg('info',text,callback)
// }


export default MESSAGE
