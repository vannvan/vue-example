// Copyright (c) 2019 by https://github.com/vannvan.
// All Rights Reserved.

import WIcon from './Icon/index';
// import WMessage from './Message/index'
const components = [
  WIcon,
  // WMessage
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  // Vue.prototype.$Message = WMessage
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)

}

export default {
  install,
  WIcon,
  // WMessage
}
