<template lang="html">
  <div>
    page
  </div>
</template>

<script>
export default {
  mounted() {
    //do something after mounting vue instance
    console.log(bus.$on('value'));
  }
}
</script>

<style lang="css" scoped>
</style>
