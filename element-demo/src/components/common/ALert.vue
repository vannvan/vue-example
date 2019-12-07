<template lang="html">
  <div>
    <div class="modal">
      <div class="body">
        {{msg}}
      </div>
      <div class="footer">
        <el-button>确认</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/assets/js/bus'

export default {
  props: {
    msg:{
      default:'错误',
      type:String
    },

  },
  mounted() {
    //do something after mounting vue instance
    bus.$on('passValue',val=>{
      console.log(val)
    });
  }
}
</script>

<style lang="scss">
.modal{
  width: 300px;
  height: auto;
  background: #ccc;
  margin:0 auto;
  .title{
    height: 40px;
    width: 100%;
    background: #f6f6f6;
    text-align: center;
    line-height: 40px;
  }
  .body{
    width: 100%;
    height: 150px;
    text-align: center;
  }
  .footer{
    height: 40px;
    width: 100%;

  }
}
</style>
