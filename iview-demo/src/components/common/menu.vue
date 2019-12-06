<template>
  <div class="">
    <Menu mode="horizontal" active-name="1" @on-select="onRoutes">
      <template v-for="(item, index) in menuList">
        <MenuItem :name="item.path">
            <Icon type="ios-paper" />
            {{item.name}}
        </MenuItem>
      </template>
      <div class="right-action">
        <Icon :type="fullScreenIcon" :style='{color:isFullscreen?"#f00":"#000"}' size="30" @click="screenfull()"/>
      </div>
    </Menu>
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
import screenfull from 'screenfull'
  export default {
    data() {
      return {
        menuList: [
          {name:'一大波图标',path:'helloWorld'},
          {name:'iview合并表格',path:'iviewTable'},
          {name:'iview合并表格1',path:'iviewTable1'},
          {name:'iview表格合计',path:'iviewTableCount'},
          {name:'表格input和select',path:'tableInputAndSelect'}
        ],
        isFullscreen:false
      }
    },
    computed: {
      fullScreenIcon() {
        return this.isFullscreen?"ios-contract":"ios-expand"
      }
    },
    mounted() {
      //do something after mounting vue instance
      window.onresize = () => {
           // 全屏下监控是否按键了ESC
           if (!this.checkFull()) {
             // 全屏下按键esc后要执行的动作
             this.isFullscreen = false;
           }
           console.log('当前',this.isFullscreen)
         }
    },
    methods: {
      onRoutes(name){
        console.log(name);
        this.$router.push({path:'/'+name});
      },
      /**
     * 全屏事件
     */
      screenfull() {
        if (!screenfull.isEnabled) {
          return false
        }
        screenfull.toggle();
        this.isFullscreen = !this.isFullscreen;
      },
      /**
       * 是否全屏并按键ESC键的方法
       */
      checkFull() {
        var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
        // to fix : false || undefined == undefined
        if (isFull === undefined) {
            isFull = false;
        }
        // this.isFullscreen = false
        return isFull;
      }
    }
  }
</script>
<style lang="scss">
.right-action{
  float: right;
  margin-right: 25px
}
</style>
