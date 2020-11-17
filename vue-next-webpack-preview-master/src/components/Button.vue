<template>
  <div>
    <button :class="['btn' + ' btn-' + type]">按钮</button>
  </div>
</template>

<script lang="ts">
import { Prop, onUnmounted } from "vue";
export default {
  props: {
    type: {
      type: String,
    },
  },
  setup(props) {
    console.log("props", props);
  },
};
</script>

<style lang="scss">
.btn {
  padding: 0 8px;
  border: none;
}
</style>