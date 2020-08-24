<template>
  <div class="content">
    <div class="iconBox">
      <!-- <div class="iconItem" v-for="(item, index) in iconList">
        <w-icon :class="item"  :style="{color:RandomColor()}"></w-icon>
        <p>{{item}}</p>
      </div> -->
        {{msg}}        name：{{obj.name}}
        age：{{obj.age}}
    </div>

  </div>
</template>

<script>
import iconList from '@/assets/js/icon.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome To Your Vue.js App',
      date:1558849079,
      params:this.$route.query,
      iconList:iconList,
      obj:{}
    }
  },
  mounted() {
    // this.getUserInfo()
    //这里使用一下定义在mixin中的方法
    console.log(this.formatTime(this.date))
    this.dump()
    // console.log('1')
  this.msg = '1'
  setTimeout(() => {
    this.msg = '3'
  }, 200);
  this.obj = {
    name:'bob',
    age:22
  }
  this.$router.push({
    path:'XXX',
    query:{
      name:'',
      address:""
    }
  })
  },
  methods: {
    async dump() {
      // console.log('2')
      await this.echo()
      this.obj = {
        name:'john',
        age:21
      }
      this.$nextTick(() =>{
      this.msg = '2'

      })
    },
    async echo() {
      this.obj = {
        name:'smith'
      }
    },
    getUserInfo() {
      let datas = {
        token:''
      }
      // URL_CONFIG 来自mixin
      this.$http.post(this.URL_CONFIG.UrlConfig.getUserInfo,datas)
      .then(res =>{
        console.log(res)
      }).catch(error =>{
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h1{
  color: $themeColor
}
.iconBox{
  width: 100%;
  height: auto;
  margin: 0 auto;
  .iconItem{
    height: 64px;
    width: 120px;
    padding: 10px;
    margin:5px;
    overflow: hidden;
    float: left;
    i{
      font-size: 24px;
    }
    p{
      font-size: 10px;
    }
  }
}
hr{
  width:100%;
  height:0;
  border:1px solid #f00
}
</style>
