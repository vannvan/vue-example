import Vue from 'vue';
import app from '../../src/App.vue'

describe('test app.vue', () => {
  it('组件加载后', () => {
    let vm = new Vue(app).$mount();
    expect(vm.title).toEqual('Hello world')
  })
})
