<template>
  <div v-if="cafes?.length > 0">
    <div class="list_wrapper">
      <cafe-item
        v-for="cafe in cafes"
        :cafe="cafe"
        :key="cafe.id"
        v-on:handleOpenCafe="handleOpenCafe"
        :isLoading="isLoading"
      />
    </div>
  </div>
  <h2 v-else style="color: red">Список кафе пуст</h2>
</template>

<script lang="ts">
import CafeItem from "@/components/CafeItem.vue";
import { ICafeItem } from "@/interfaces";
import { PropType, defineComponent } from "vue";
export default defineComponent({
  components: { CafeItem },
  props: {
    cafes: {
      type: Array as PropType<ICafeItem[]>,
      required: true,
    },
    isSingleItem: {
      type: Boolean,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleCloseDialog() {
      this.$emit("handleOpenDialog", false);
    },
    handleOpenCafe(id: string) {
      this.$emit("handleOpenCafe", id);
    },
  },
});
</script>

<style scoped>
.list_wrapper {
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  column-gap: 16px;
  row-gap: 16px;
  grid-column: 1 / -1;
}
</style>
