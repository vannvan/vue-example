<template lang="html">
  <div>
      <div class="time-line">
        <template v-for="(item, index) in timeObj">
          <span class="move tooltips icon-location" :data-msg="calcTime(item[index])" @mousedown="move($event,index)"  :style="{left:calcInitLeft(index)}"></span>
          <!-- <span class="move" @mousedown="move($event,index)"  :style="{left:calcInitLeft(index)}"></span> -->
        </template>
      </div>
      <div class="show">
        <p>
        <span v-for="(item, index) in timeObj" :key="index">
          <b>{{index}}</b>
          {{calcTime(item[index])}}
        </span>
        </p>
        <p>
          <span v-for="(item, index) in formatTime(timeObj)" :key="index">
            <el-time-select
              :value="item"
              placeholder="选择时间">
            </el-time-select>
          </span>
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
      timeObj:[0,1,2,3,4,5,6].map((el,index)=>{return Object.assign({},{[el]:''})})
    }
  },
  watch: {
    offset:function(v) {
      // console.log(v);
    },

  },

  computed: {
    calcTime() {
      return function(t) {
        // console.log(this.offset)
        return this.numberToTime(t)
      }
    },
    formatTime() {
      return function(arr) {
        return arr.map((el,index,curr)=>{
          return el = this.numberToTime(el[index])
        })
      }
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
       const width = 1440
       //算出鼠标相对元素的位置
       let disX = e.clientX - odiv.offsetLeft;
       let disY = e.clientY - odiv.offsetTop;
       document.onmousemove = (e)=>{    //鼠标按下并移动的事件
         //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
         let left = e.clientX - disX;
         let top = e.clientY - disY;
         //绑定元素位置到positionX和positionY上面
          // this.timeObj.inde[positionY] = top
         //移动当前元素
         // odiv.style.left = left + 'px';
         // odiv.style.top = top + 'px';
         if(left <=0) {
           left = 0
           document.onmousemove = null;
           document.onmouseup = null;
           odiv.style.left = 0 + 'px';
         }else if(left >= width) {
           left = width
           document.onmousemove = null;
           document.onmouseup = null;
           odiv.style.left = width + 'px';
         }else{
           odiv.style.left = left + 'px';
         }
         this.timeObj[index][index] = left
       };
       document.onmouseup = (e) => {
         document.onmousemove = null;
         document.onmouseup = null;
       };
   },
   numberToTime(t) {
     let hour = parseInt(t/60)
     let minute = t%60
     hour = hour.toString().length == 1?'0'+hour:hour
     minute = minute.toString().length == 1?'0'+minute:minute
     return hour + ":" + minute
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
  user-select: none;
  .move{
    height: 10px;
    width: 10px;
    position: absolute;
    top:-10px;
    color: #f00;
    cursor: pointer;
  }

  .tooltips::after {
  		position: absolute;
  		left: -60px;
  		top: -40px;
  		border-radius: 5px;
  		width: 80px;
  		height: 35px;
  		background-color: #ccc;
  		opacity: 0;
  		text-align: center;
  		font-size: 12px;
  		content: attr(data-msg);
  		transition: all 300ms;
      line-height: 35px
  	}
  .tooltips:hover::after {
  		left: calc(100% + 10px);
  		opacity: 1;
  	}
  .tooltips[href]:empty::before {
  		content: attr(href);
  	}
  .tooltips[href]:empty:hover::after {
  		display: none;
  	}
  }
.show{
  position: relative;
  left:30px
}
</style>
