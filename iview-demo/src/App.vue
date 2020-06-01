<template>
  <div id="app">
    <keep-alive :include="include">
      <!-- 会被缓存的组件 -->
      <router-view v-if="$route.meta.keepAlive" keepAlive />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" dekeepAlive />
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      include: []
    };
  },
  watch: {
    $route(to, from) {
      // if (to.params.filp) {
      //   var e = to.params.filp;
      //   var dom = e.getElementsByClassName("data-filpTarget")[0];
      //   this.firstReact = dom.getBoundingClientRect();
      //   console.log(this.firstReact);
      // }
      // // 动画
      // if (to.meta.transitionType || from.meta.transitionType) {
      //   this.transitionType = to.meta.transitionType
      //     ? "flipEnter"
      //     : "flipLeave";
      // } else {
      //   if (to.meta.deepth && from.meta.deepth) {
      //     this.transitionType =
      //       to.meta.deepth > from.meta.deepth ? "slide-left" : "slide-right";
      //   }
      // }

      console.log("watch $route");
      //是否需要缓存
      if (to.meta.keepAlive) {
        !this.include.includes(to.name) && this.include.push(to.name);
      }
      if (from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
        var index = this.include.indexOf(from.name);
        index !== -1 && this.include.splice(index, 1);
      }
    }
  }
};
</script>

<style>
/* 路由切换动画 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: transform 350ms;
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.slide-right-enter,
.slide-left-leave-active {
  transform: translate(-100%, 0);
}
.slide-right-leave-active,
.slide-left-enter {
  transform: translate(100%, 0);
}
</style>
