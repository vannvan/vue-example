// 标签页
<template>
  <el-tabs type="border-card">
      <el-tab-pane v-for="(item,index) in tabs" :label="item.name" :key="index">
          内容{{index}}
      </el-tab-pane>
    <!-- <el-tab-pane label="用户管理">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane> -->
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      tabs: []
    };
  },
  mounted() {
    this.tabs = Array.from({ length: 15 }, (v, k) => {
      return {
        name: "标签" + k,
        data: "内容" + k
      };
    });
  }
};
</script>

<style lang="scss">
.el-tabs{
    width: 600px !important;
    .el-tabs__nav{
        display: flex !important;
        flex-wrap: wrap !important;
    }
}
</style>