<template lang="html">
  <div>
      <div class="time-line">
        <template v-for="(item, index) in 6">
          <span class="move"  v-drag="{set:getOffset,index:index}" :style="{left:calcInitLeft(index)}"></span>
        </template>
      </div>
      <div class="show">
        <p>
          {{calcTime}}
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
      timeObj:{}
    }
  },
  watch: {
    offset:function(v) {
      // console.log(v);
    },

  },
  directives: {
      drag: function(el,bindings) {
          let dragBox = el; //获取当前元素
          const width = 1440
          let _this = this
          dragBox.onmousedown = e => {
              //算出鼠标相对元素的位置
              let disX = e.clientX - dragBox.offsetLeft;
              let disY = e.clientY - dragBox.offsetTop;
              document.onmousemove = e => {
                  //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                  let left = e.clientX - disX;
                  let top = e.clientY - disY;
                  // console.log(bindings);
                  let {index} = bindings.value

                  bindings.value.set(left);
                  //移动当前元素
                  dragBox.style.left = left + "px";
                  if(left <=0) {
                    dragBox.style.left = 0 + 'px';
                    bindings.value.set(0);
                  }
                  if(left >= width) {
                    dragBox.style.left = width + 'px';
                    bindings.value.set(width);
                  }
                  // dragBox.style.top = top + "px";
              };
              document.onmouseup = e => {
                    //鼠标弹起来的时候不再移动
                    document.onmousemove = null;
                   //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
                  document.onmouseup = null;
              };
          };
      }
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
    getOffset(x,y) {
      console.log(y);
      this.offset = x
    }
  }
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
