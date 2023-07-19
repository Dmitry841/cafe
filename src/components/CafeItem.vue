<template>
  <div class="item_block" @click="handleOpenCafe">
    <div class="img_wrapper">
      <div v-if="isLoading" class="lds-dual-ring"></div>
      <img
        v-else
        v-bind:src="cafe.photo || defaultImgUrl"
        class="img"
        alt="Фото кафе"
      />
    </div>
    <div class="item_text">
      <p><b>Название:</b> {{ cafe.name }}</p>
      <p><b>Адрес:</b> {{ cafe.address || "Нет данных" }}</p>
      <p>
        <b>Наличие бизнес ланча:</b>
        {{ `${cafe.business_lunch ? "Есть" : "Нет"}` }}
      </p>
      <div v-if="isSingleItem">
        <p>
          <b>Кухня:</b>
          {{ cafe.cuisine }}
        </p>
        <p>
          <b>Ориентир:</b>
          {{ cafe.landmark }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ICafeItem } from "@/interfaces";
import { PropType, defineComponent } from "vue";
export default defineComponent({
  props: {
    cafe: {
      type: Object as PropType<ICafeItem>,
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
  data() {
    return {
      defaultImgUrl:
        "https://i2.photo.2gis.com/images/branch/0/30258560083049418_dfc7.jpg",
    };
  },
  methods: {
    handleOpenCafe() {
      this.$emit("handleOpenCafe", this.cafe.id);
    },
  },
});
</script>
<style scoped lang="scss">
.img_wrapper {
  height: 300px;
}
.img {
  width: 100%;
  height: 300px;
}
.item_block {
  border: 1px solid teal;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
}
.item_text {
  padding: 4px;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
