<template>
  <div class="index"></div>
</template>

<script>
import { resolve } from "path";
import { rejects } from "assert";
import { log } from "util";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  filters: {},
  computed: {},
  created() {
    console.log("a1");
    this.$nextTick(() => {
      setTimeout(() => {
        console.log("b1");
      }, 100);
    });
    console.log("c1");
  },
  mounted() {
    console.log("a2");
    let promise = new Promise((resolve, rejects) => {
      console.log("b2");
      let resData = { a: 1, b: 2 };
      let a = false;
      if (a) {
        resolve(resData);
      } else {
        rejects("throw error");
      }
    });
    console.log("e2");
    this.$nextTick(() => {
      console.log("g2");
    });
    // promise.then(res => {
    //   console.log("d2");
    //   console.log(res);
    // }).catch(error => {
    //   console.log(error)
    // }).finally(() => {
    //   console.log('end')
    // })

    // let promise1 = new Promise((resolve,rejects) => {
    //   console.log('promise1')
    //   let p2 = true
    //   if(p2) {
    //     resolve('success')
    //   }
    // })

    // promise1.then(res => {
    //   console.log(res)
    // })

    // console.log("c2");
    // console.log(this.$el);
    this.$Message.info("啊啦啦啦1-11");
  },
  methods: {}
};
</script>

<style lang='scss'>
</style>
