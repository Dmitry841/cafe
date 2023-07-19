<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-button",
});
</script>

<style scoped lang="scss">
.btn {
  min-width: 300px;
  padding: 10px 15px;
  background: rgb(212, 230, 245);
  font-size: 20px;
  border: 1px solid teal;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
}
</style>
