<template>
  <div class="random_block">
    <cafe-item
      v-if="!emptyList"
      :cafe="cafe"
      :isSingleItem="true"
      :isLoading="isLoading"
    ></cafe-item>
    <p v-else>Список кафе пуст😢</p>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
import CafeItem from "@/components/CafeItem.vue";
import { ICafeItem } from "@/interfaces";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    cafe: {
      type: Object as PropType<ICafeItem>,
      required: true,
    },
    emptyList: {
      type: Boolean,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    CafeItem,
  },
});
</script>
<style scoped>
.random_block {
  display: flex;
  flex-direction: column;
}
</style>
