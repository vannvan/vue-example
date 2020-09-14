<template>
  <div>
    <button>按钮</button>
  </div>
</template>

<script lang="ts">
import { Prop, onUnmounted } from "vue";
export default {
  props: {
    type: String,
  },
  setup(props) {
    console.log("props", props.name);
  },
};
</script>

<style>
</style>