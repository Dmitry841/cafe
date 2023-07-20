<template>
  <div class="dialog" v-if="isOpenDialog" v-on:click.stop="handleCloseDialog">
    <div @click.stop class="dialog__content" id="d">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-dialog",
  props: {
    isOpenDialog: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    handleCloseDialog() {
      this.$emit("handleOpenDialog", false);
    },
  },
});
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 400px;
  min-width: 400px;
  padding: 20px;
}

@media screen and (max-width: 768px) {
  .dialog__content {
    margin: auto;
    background: rgb(190, 37, 37);
    border-radius: 12px;
    min-width: 200px;
    padding: 20px;
  }
}
</style>
