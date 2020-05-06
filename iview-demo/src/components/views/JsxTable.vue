<template>
<div>
  <Table :columns="columns" :data="data"></Table>
</div>
</template>
<script>
import Vue from 'vue';
export default {
  methods:{
    render(h,{column,index,row}){
      let value = row[column.key];
      return <div on-click={(e)=>this.changeIndex(e,index)} >
      {this.index === index? 
        <i-input type="text" value={value} on-input={(value)=>{
          this.handleChange(value,column,row)
        }} onOn-enter={()=>this.enter(row,index)}/>:
        <span>{value}</span>
      }
      </div>
    },
    enter(row,index){
      this.data.splice(index,1,row);
      this.index = -1;
    },
    handleChange(value,column,row){
      row[column['key']]= value;
    },
    changeIndex(e,index){
      this.index = index;
      this.$nextTick(()=>{
        e.currentTarget.getElementsByTagName("input")[0].focus()
      })
    }
  },
  data() {
    return {
      index:-1,
      columns: [
        {
          title: 'Name',
          key: 'name',
          render:this.render
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        },
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02',
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
        },
      ],
    };
  },
};
</script>