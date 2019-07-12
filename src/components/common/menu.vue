<template>
  <div class="">
    <Menu mode="horizontal" active-name="1" @on-select="onRoutes">
      <template v-for="(item, index) in menuList">
        <MenuItem :name="item.path">
            <Icon type="ios-paper" />
            {{item.name}}
        </MenuItem>
      </template>
    </Menu>
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        menuList: [
          {name:'图标',path:'helloWorld'},
          {name:'iview合并表格',path:'iviewTable'}
        ]
      }
    },
    methods: {
      onRoutes(name){
        console.log(name);
        this.$router.push({path:'/'+name});
      },
    }
  }
</script>
