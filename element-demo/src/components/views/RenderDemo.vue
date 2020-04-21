<template>
  <div>
    <Table :columns="columns" :data="data"></Table>
  </div>
</template>

<script>
import Table from "../common/Table";
export default {
  components: {
    Table
  },
  data() {
    return {
      columns: [
        {
          title: "name",
          key: "name"
        },
        {
          title: "age",
          key: "age",
          render: (h,params) => {
            console.log('aa')
            return h('span','11')
          }
        }
      ],
      data: [
        {
          name: "bob",
          age: 22
        },
        {
          name: "smith",
          age: 20
        },
        {
          name: "john",
          age: 18
        }
      ]
    };
  }
};
</script>

<style>
</style>