<template lang="html">
  <div>
      <div class="time-line">
        <template v-for="(item, index) in 6">
          <span class="move" index-data="index"  @mousedown="move($event,index)"  :style="{left:calcInitLeft(index)}"></span>
        </template>
      </div>
      <div class="show">
        <p>
          {{timeObj}}
        </p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time:'',
      offset:'',
      timeObj:[0,1,2,3,4].map((el,index)=>{return Object.assign({},{index:{start:'',end:''}})})
    }
  },
  watch: {
    offset:function(v) {
      // console.log(v);
    },

  },

  computed: {
    calcTime() {
      // console.log(this.offset)
      let hour = parseInt(this.offset/60)
      let minute = this.offset%60
      hour = hour.toString().length == 1?'0'+hour:hour
      minute = minute.toString().length == 1?'0'+minute:minute
      return hour + ":" + minute
    },
    calcInitLeft() {
      return function(index) {
        return index == 0?0:(index*2*10) + 'px'
      }
    }
  },
  mounted() {
    //do something after mounting vue instance

  },
  methods: {
    move(e,index){
      console.log(e,index)
       let odiv = e.target;    //获取目标元素

       //算出鼠标相对元素的位置
       let disX = e.clientX - odiv.offsetLeft;
       let disY = e.clientY - odiv.offsetTop;
       document.onmousemove = (e)=>{    //鼠标按下并移动的事件
         //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
         let left = e.clientX - disX;
         let top = e.clientY - disY;

         //绑定元素位置到positionX和positionY上面
         // this.timeObj.positionX = top;
         // this.timeObj.positionY = left;

          this.timeObj[index].start = left
          // this.timeObj.inde[positionY] = top
         //移动当前元素
         odiv.style.left = left + 'px';
         odiv.style.top = top + 'px';
       };
       document.onmouseup = (e) => {
         document.onmousemove = null;
         document.onmouseup = null;
       };
   }

   },
}
</script>

<style lang="scss">
.time-line{
  height: 10px;
  width: 1440px;
  background: #ccc;
  position: relative;
  top:200px;
  left:30px;
  .move{
    height: 10px;
    width: 10px;
    background: #f00;
    position: absolute;
    // left:0;
    top:0;
    cursor: pointer;
  }
}
.show{
  position: relative;
  left:30px
}
</style>
