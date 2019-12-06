<template lang="html">
  <div class="content">
    <Table :columns="columns" :data="reportList"  border>
      <div slot="footer" class="countData">
        <countAmount ref="getColCount"></countAmount>
      </div>
    </Table>
  </div>
</template>
<script>
import countAmount from './countAmount'
export default {
  components: {
    countAmount
  },
  data() {
    return {
      columns:[
        {title:'年级',key:'grade_name',align:'center'},
          {title:'班级',key:'class_name',align:'center'},
          {title:'日期',key:'date',align:'center'},
          {title:'姓名',key:'student_name',align:'center'},
          {
              title: '考勤时段',
              key: 'list',
              align:'center',
              render: (h, params) => {
                  return h('div', {
                    attrs: {
                        class:'subCol'
                    },
                  }, [
                  h('ul', this.reportList[params.index].list.map(item => {
                      return h('li', {
                      }, item.time_period_name)
                  }))
                ]);
              }
          },
          {
              title: '正常',
              key: 'list',
              align:'center',
              render: (h, params) => {
                if(this.reportList[params.index].list[0].normal_amount!=undefined){
                  return h('div', {
                    attrs: {
                        class:'subCol'
                    },
                  }, [
                  h('ul', this.reportList[params.index].list.map(item => {
                      return h('li', {
                      }, item.normal_amount)
                  }))
                ]);
                }else{
                  return h('div', [
                    h('span', '----'),
                  ])
                }
              }
          },
          {
              title: '迟到',
              key: 'list',
              align:'center',
              render: (h, params) => {
                if(this.reportList[params.index].list[0].be_late_amount!=undefined){
                  return h('div', {
                    attrs: {
                        class:'subCol'
                    },
                  }, [
                  h('ul', this.reportList[params.index].list.map(item => {
                      return h('li', {
                      }, item.be_late_amount)
                  }))
                ]);
              }else{
                return h('div', [
                  h('span', '----'),
                ])
              }
            }
          },
          {
              title: '早退',
              key: 'list',
              align:'center',
              render: (h, params) => {
                if(this.reportList[params.index].list[0].leave_early_amount!=undefined){
                    return h('div', {
                      attrs: {
                          class:'subCol'
                      },
                    }, [
                    h('ul', this.reportList[params.index].list.map(item => {
                        return h('li', {
                        }, item.leave_early_amount)
                    }))
                  ]);
                }else{
                  return h('div', [
                    h('span', '----'),
                  ])
                }
              }
          },
          {
              title: '未考勤',
              key: 'list',
              align:'center',
              render: (h, params) => {
                if(this.reportList[params.index].list[0].not_attendance_amount!=undefined){
                  return h('div', {
                    attrs: {
                        class:'subCol'
                    },
                  }, [
                  h('ul', this.reportList[params.index].list.map(item => {
                      return h('li', {
                      }, item.not_attendance_amount)
                  }))
                ]);
                }else{
                  return h('div', [
                    h('span', '----'),
                  ])
                }
              }
          },
          {
            title:'合计',
            align:'center',
            render: (h,params) => {
              return h('div', {
                attrs: {
                    class:'subCol'
                },
              }, [
              h('ul', this.reportList[params.index].list.map(item => {
                  return h('li', {
                  }, this.rowCount(this.reportList[params.index].list[0]))
              }))
            ]);
            }
          }
      ],
      reportList:[{
                "list": [{
                    "time_period_name": "上午上学",
                    "normal_amount": 0,
                    "be_late_amount": 1,
                    "leave_early_amount": 0,
                    "not_attendance_amount": 0
                }, {
                    "time_period_name": "下午上学",
                    "normal_amount": 0,
                    "be_late_amount": 0,
                    "leave_early_amount": 0,
                    "not_attendance_amount": 1
                }, {
                    "time_period_name": "下午放学",
                    "normal_amount": 0,
                    "be_late_amount": 0,
                    "leave_early_amount": 0,
                    "not_attendance_amount": 1
                }, {
                    "time_period_name": "上午放学",
                    "normal_amount": 0,
                    "be_late_amount": 0,
                    "leave_early_amount": 1,
                    "not_attendance_amount": 0
                }],
                "grade_name": "幼儿园托儿班",
                "class_name": "幼儿园托儿班2班",
                "date": "2019-02-14",
                "student_name": "刘小明"
            }],
    }
  },
  computed: {
    // 行合计
    rowCount(){
      return function(index){
        return this.formatUndefined(index.normal_amount)
              +this.formatUndefined(index.not_attendance_amount)
              +this.formatUndefined(index.leave_early_amount)
              +this.formatUndefined(index.ask_for_leave_amount)
              +this.formatUndefined(index.be_late_amount)
      }
    },
    formatUndefined(){
      return function(key){
        return key==undefined?0:key
      }
    }
  },
  mounted() {
    //do something after mounting vue instance
    //将数据重新组合传给合计
    let obj = []
    for(let i=0;i<this.reportList.length;i++){
      for(let j=0;j<this.reportList[i].list.length;j++){
        obj.push(this.reportList[i].list[j])
      }
    }
    let footer = document.getElementsByClassName("ivu-table-footer")
    if(this.reportList.length==0){
      footer[0].style.display="none"
    }else{
      footer[0].style.display="block"
    }
    this.$refs.getColCount.getCountData(obj)  //合计
  }
}
</script>

<style lang="scss">
.subCol>ul>li{
      margin:0 -18px;
      list-style:none;
      text-align: center;
      padding: 9px;
      border-bottom:1px solid #ccc;
      overflow-x: hidden;
}
.subCol>ul>li:last-child{
  border-bottom: none
}
</style>
