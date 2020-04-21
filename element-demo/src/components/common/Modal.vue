<template lang="html">
    <div class="modal" v-show="visible">
      <div class="title">{{title}}</div>
      <div class="body">
        {{content}}
      </div>
      <div class="footer">
        <el-button @click="handleOk()">确认</el-button>
        <el-button>取消</el-button>
      </div>
    </div>
</template>

<script>
import bus from '@/assets/js/bus'

export default {
  props: {
    title:{
      default:'标题',
      type:String
    },
    value:{
      default:false,
      type:Boolean
    },
    render:{
      defalut:Function,
      type:null
    }

  },
  watch:{
    value (val) {
        this.visible = val;
    },
  },
  data() {
    return {
      visible:this.value,
      content:''
    }
  },
  methods: {
    setChildBody(content) {
      this.content = content
    },
    handleOk() {
      // console.log('OK');
      // this.$emit('getChild','msg')
      bus.$emit('passValue','akakakk')

    }
  }
}
</script>

<style lang="scss">
.modal {
  width: 300px;
  height: auto;
  background: #ccc;
  margin: 0 auto;
  .title {
    height: 40px;
    width: 100%;
    background: #f6f6f6;
    text-align: center;
    line-height: 40px;
  }
  .body {
    width: 100%;
    height: 150px;
    text-align: center;
  }
  .footer {
    height: 40px;
    width: 100%;
  }
}
</style>
