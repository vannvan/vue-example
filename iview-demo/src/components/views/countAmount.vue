<template lang="html">
  <div>
      <Table :columns="addCountData" border></Table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      reportList:[],
      countData:[]
    }
  },
  computed:{
    addCountData(){
      let countData = this.countData
      countData.splice(0,0,
        {title:' ',className:'first'},
        {title:'合',className:'first',align: 'center'},
        {title:'计',className:'first',align: 'center'},
        {title:' ',className:'first'},
        {title:' ',className:''});
      return countData
    },
    count_normal_amount:function(){
      let count = 0
      for(let i=0;i<this.reportList.length;i++){
        if(this.reportList[i].normal_amount!=undefined){
          count+=this.reportList[i].normal_amount
        }else{
          count = '----'
        }
      }
      return count
    },
    count_late_amount:function(){
      let count = 0
      for(let i=0;i<this.reportList.length;i++){
        if(this.reportList[i].be_late_amount!=undefined){
          count+=this.reportList[i].be_late_amount
        }else{
          count = '----'
        }
      }
      return count
    },
    count_leave_early_amount(){
      let count = 0
      for(let i=0;i<this.reportList.length;i++){
        if(this.reportList[i].leave_early_amount!=undefined){
          count+=this.reportList[i].leave_early_amount
        }else{
          count = '----'
        }
      }
      return count
    },
    count_not_attendance_amount(){
      let count = 0
      for(let i=0;i<this.reportList.length;i++){
        if(this.reportList[i].not_attendance_amount!=undefined){
          count+=this.reportList[i].not_attendance_amount
        }else{
          count = '----'
        }
      }
      return count
    },
    count_ask_for_leave_amount(){
      let count = 0
      for(let i=0;i<this.reportList.length;i++){
        if(this.reportList[i].ask_for_leave_amount!=undefined){
          count+=this.reportList[i].ask_for_leave_amount
        }else{
          count = '----'
        }
      }
      return count
    },
    count_all_amount(){
      let count = 0
      count = this.formatAmout(this.count_normal_amount)
              + this.formatAmout(this.count_late_amount)
              + this.formatAmout(this.count_leave_early_amount)
              + this.formatAmout(this.count_not_attendance_amount)
              + this.formatAmout(this.count_ask_for_leave_amount)
      return count
    },
    formatAmout(){
      return function(amount){
        let val = 0
        if(amount=='----'){
          return val
        }else{
          return amount
        }
      }
    }
  },
  methods: {
    getCountData(reportList) {
      // console.log(reportList)
      this.reportList = reportList
      this.initCount()
    },
    initCount(){
      this.countData = [{
        title: '正常',
        align:'center',
        renderHeader: (h, index) => {
            return h('span', {
                domProps: {
                    innerHTML: this.count_normal_amount
                }
            });
        },
      },
      {
        title:'迟到',
        align:'center',
        renderHeader: (h, index) => {
            return h('span', {
                domProps: {
                    innerHTML: this.count_late_amount
                }
            });
        },
      },
      {
        title:'早退',
        align:'center',
        renderHeader: (h, index) => {
            return h('span', {
                domProps: {
                    innerHTML: this.count_leave_early_amount
                }
            });
        },
      },
      {
        title:'未考勤',
        align:'center',
        renderHeader: (h, index) => {
            return h('span', {
                domProps: {
                    innerHTML: this.count_not_attendance_amount
                }
            });
        },
      },
      {
        title:'总计',
        align:'center',
        renderHeader: (h, index) => {
            return h('span', {
                domProps: {
                    innerHTML: this.count_all_amount
                }
            });
        },
      }]
    }
  }
}
</script>

<style lang="scss">
.countData{
  .ivu-table-wrapper{
    border:none !important
  }
  .first{
    border-right: none !important;
    text-align: right;
  }
}
</style>
