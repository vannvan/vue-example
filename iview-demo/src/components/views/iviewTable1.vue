<template lang="html">
  <div class="content">
    <Table :columns="columns" :data="reportList"border></Table>
  </div>
</template>
<script>
export default {
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
                  h('ul', this.reportList[params.index].list.map((item,index) => {
                      return h('li', {
                        style:{
                          height:this.calcItemHeight(index)
                        },
                        attrs: {
                          class:"item"+index
                        }
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
                  h('ul', this.reportList[params.index].list.map((item,index) => {
                      return h('li', {
                        style:{
                          height:this.calcItemHeight(index)
                        },
                        attrs: {
                          class:"item"+index
                        }
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
                  h('ul', this.reportList[params.index].list.map((item,index) => {
                      return h('li', {
                        style:{
                          height:this.calcItemHeight(index)
                        },
                        attrs: {
                          class:"item"+index
                        }
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
                    h('ul', this.reportList[params.index].list.map((item,index) => {
                        return h('li', {
                          style:{
                            height:this.calcItemHeight(index)
                          },
                          attrs: {
                            class:"item"+index
                          }
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
                  h('ul', this.reportList[params.index].list.map((item,index) => {
                      return h('li', {
                        style:{
                          height:this.calcItemHeight(index)
                        },
                        attrs: {
                          class:"item"+index
                        }
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
                    "not_attendance_amount": '111111111111111111111111111111111111111111111111111111111111111111'
                }, {
                    "time_period_name": "上午放学",
                    "normal_amount": 0,
                    "be_late_amount": 0,
                    "leave_early_amount": 1,
                    "not_attendance_amount": '111111111111111111111111111111111111111111111111111111111111111111'
                }],
                "grade_name": "幼儿园托儿班",
                "class_name": "幼儿园托儿班2班",
                "date": "2019-02-14",
                "student_name": "刘小明"
            }],
    }
  },
  computed:{
    calcItemHeight() {
      return function(index) {
        if(index){
          this.$nextTick(() =>{
            let offsetHeightArray = []
            let itemLength = document.getElementsByClassName("item"+index).length
            for(let i=0;i<itemLength;i++) {
              offsetHeightArray.push(parseInt(document.getElementsByClassName('item'+index)[i].offsetHeight))
            }
            let max = Math.max.apply(null,offsetHeightArray);
            for(let i=0;i<itemLength;i++) {
              document.getElementsByClassName('item'+index)[i].style.height = max + 'px'
            }
          })
       }
    }}
  }
}
</script>

<style lang="scss">
.subCol>ul>li{
      margin:0 -18px;
      text-align: center;
      padding: 9px;
      border-bottom:1px solid #ccc;
}
.subCol>ul>li:last-child{
  border-bottom: none
}
</style>
