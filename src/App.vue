<template>
  <main-page></main-page>
  <div class="app"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainPage from "@/pages/MainPage.vue";

export default defineComponent({
  components: {
    MainPage,
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
