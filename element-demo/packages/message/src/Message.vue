<template lang="html">
  <div class="message" :class="type" v-show="show">
      <span class="text">{{text}}</span>
    </div>
</template>

<script>
export default {
  name:"Message",
  data() {
    return {

    }
  },
  props: {
    text: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'info',
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.message{
  height: 35px;
  background: #ccc
}
</style>
