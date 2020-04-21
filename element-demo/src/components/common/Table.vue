<template>
  <div>
    <table>
      <thead>
        <th v-for="(th,index) in columns" :key="index">{{th.title}}</th>
      </thead>
      <tbody>
        <tr v-for="(tr,trIndex) in data" :key="trIndex">
          <td v-for="(tdVal,tdKey) in tr" :key="tdKey">{{tdVal}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: []
    }
  },
  computed:{
      calTdRender() {

      }
  },
  mounted() {
    // console.log(this.columns);
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;

  th,
  td {
    height: 60px;
    border: 1px solid #eee;
  }
}
</style>