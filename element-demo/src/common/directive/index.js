let mydirective = {}
const trigger = (el, type) => {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}
mydirective.install = function (Vue) {
  //背景颜色
  Vue.directive('bg', {
      bind(el, binding) {
        el.style.color = '#f6f6f6';
      }
    }),
    //主题色
    Vue.directive('color', {
      bind(el, binding) {
        el.style.color = '#42E5D3';
      }
    }),
    Vue.directive('theme', function (el) {
      el.style.color = '#42E5D3'
      el.style.background = '#f6f6f6'
    }),
    Vue.directive('danger', function (el) {
      el.style.color = '#f00'
    }),
    // 图片未加载完之前先用随机背景色占位
    Vue.directive('img', {
      inserted: function (el, binding) {
        var color = Math.floor(Math.random() * 1000000);
        el.style.backgroundColor = "#" + color;
        var img = new Image();
        img.src = binding.value;
        img.onload = function () {
          el.style.backgroundImage = 'url(' + binding.value + ')'
        }
      }
    }),
    Vue.directive('Int', {
      bind: function (el, binding) {
        console.log(JSON.parse(binding.expression).limit)
        let limitNum = JSON.parse(binding.expression).limit
        const input = el.getElementsByTagName('input')[0]
        input.onkeyup = function (e) {
          // console.log(input.value,'old')
          let oldVal = input.value
          if (input.value.length === 1) {
            input.value = input.value.replace(/[^0-9]/g, '')
          } else {
            input.value = input.value.replace(/^[0]/, '')
            // input.value = input.value.replace(/[^\d]/g, '') 
            if (input.value % 1 != 0) {
              console.log('小数')
              input.value = input.value > 720 ? input.value.toString().substr(0, (limitNum).toString().length + 2) : input.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
              // input.value = Number(input.value).toFixed(2)
            } else {
              console.log('整数')

              input.value = input.value > 720 ? (input.value).toString().substr(0, (limitNum).toString().length) : input.value.replace(/[^\d]/g, '')
            }
          }
          trigger(input, 'input')
        }
        input.onblur = function (e) {
          if (input.value.length === 1) {
            input.value = input.value.replace(/[^0-9]/g, '')
          } else {
            input.value = input.value.replace(/[^\d]/g, '')
          }
          trigger(input, 'input')
        }
      }
    })
}

export default mydirective;



float2Number:{
         bind: function (el, binding,vnode) {
        console.log(JSON.parse(binding.expression).limit)
        let limitNum = JSON.parse(binding.expression).limit
        // const input = el.getElementsByTagName('input')[0]
         const input = vnode.elm.children[0]

        input.addEventListener('compositionstart', () => {
           vnode.inputLocking = true
         })
         input.addEventListener('compositionend', () => {
           vnode.inputLocking = false
           input.dispatchEvent(new Event('input'))
         })
        input.oninput = function (e) {
          console.log(input.value,'old')
          if (vnode.inputLocking) {
             return
           }
          let oldVal = input.value
          if (input.value.length === 1) {
            input.value = input.value.replace(/[^0-9]/g, '')
          } else {
            input.value = input.value.replace(/^[0]/, '')
            // input.value = input.value.replace(/[^\d]/g, '') 
            if (input.value % 1 != 0) {
              console.log('小数')
              input.value = input.value > 720 ? input.value.toString().substr(0, (limitNum).toString().length + 2) : input.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
              // input.value = Number(input.value).toFixed(2)
            } else {
              console.log('整数')
              input.value = input.value > 720 ? (input.value).toString().substr(0, (limitNum).toString().length-1) : input.value.replace(/[^\d]/g, '')
            }
            if(input.value.split('').every(el=>el==0)) {
              console.log('全他妈是0')
              input.value = ''
            }
            console.log(input.value)
          }
          // trigger(input, 'input')
           input.dispatchEvent(new Event('input'))
        }
        input.onblur = function (e) {
          if (input.value.length === 1) {
            input.value = input.value.replace(/[^0-9]/g, '')
          } else {
            input.value = input.value.replace(/[^\d]/g, '')
          }
          // trigger(input, 'input')
          input.dispatchEvent(new Event('input'))
        }
      }
       }