<template>
  <div class="container">
    <h1 class="header">
      Добро пожаловать. Здесь вы найдете лучшее кафе для себя. Или мы предложим
      вам отличный вариант на сегодня!
    </h1>
    <div class="main_wrapper">
      <div class="main_block">
        <div class="btn_wrapper">
          <app-button @click="handleOpenRandomCafe"
            >Выбрать случайное кафе</app-button
          >
        </div>
        <app-dialog
          v-model:isOpenDialog="dialogVisible"
          v-on:handleOpenDialog="handleOpenDialog"
          ><cafe-info
            :cafe="cafe"
            :emptyList="emptyList"
            :isLoading="isCafesLoading"
          ></cafe-info
        ></app-dialog>
      </div>
    </div>
    <div class="container">
      <h2 class="subheader">Кафе нашего города</h2>
      <cafes-list
        :cafes="cafes"
        v-if="!isCafesLoading"
        v-on:handleOpenCafe="handleOpenCafe"
        :isLoading="isCafesLoading"
      />
      <div v-else>Идет загрузка...</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/common/AppButton.vue";
import AppDialog from "@/components/common/AppDialog.vue";
import CafeInfo from "@/components/CafeInfo.vue";
import CafesList from "@/components/CafesList.vue";
import { ICafeItem } from "@/interfaces";

interface IProps {
  fetchCafes: () => Promise<void>;
  fetchCafeInfo: (id: string) => Promise<void>;
  handleOpenRandomCafe: () => Promise<void>;
  handleOpenCafe: () => Promise<void>;
  handleOpenDialog: () => void;
  dialogVisible: boolean;
  isRandomCafe: boolean;
  isCafesLoading: boolean;
  cafes: ICafeItem[];
  cafeIndex: "";
  emptyList: boolean;
}

export default defineComponent({
  mounted() {
    (this as unknown as IProps).fetchCafes();
  },
  components: {
    AppButton,
    AppDialog,
    CafeInfo,
    CafesList,
  },
  data() {
    return {
      cafes: [],
      dialogVisible: false,
      isRandomCafe: false,
      isCafesLoading: false,
      emptyList: false,
      cafe: {
        id: 0,
        name: "",
        address: "",
        landmark: "",
        cuisine: "",
        distance: 0,
        time: 0,
        photo: "",
        business_lunch: false,
        price: 0,
        content: "",
      },
    };
  },
  methods: {
    handleOpenDialog(val = true) {
      (this as unknown as IProps).dialogVisible = val;
    },
    async handleOpenRandomCafe() {
      (this as unknown as IProps).handleOpenDialog();
      const cafesCount = this.cafes.length;
      const minValue = 0;
      if (!cafesCount) {
        (this as unknown as IProps).emptyList = true;
        return;
      }
      const cafeIndex =
        Math.floor(Math.random() * (cafesCount - 1 - minValue)) + minValue;
      await this.fetchCafeInfo(
        String((this.cafes[cafeIndex] as unknown as ICafeItem).id)
      );
    },
    async handleOpenCafe(id: string) {
      (this as unknown as IProps).handleOpenDialog();
      await this.fetchCafeInfo(id);
    },
    async fetchCafes() {
      try {
        (this as unknown as IProps).isCafesLoading = true;
        const response = await fetch(
          "https://bandaumnikov.ru/api/test/site/get-index"
        );

        const cafes = await response.json();
        this.cafes = cafes.data;
      } catch (e) {
        alert("Ошибка");
      } finally {
        (this as unknown as IProps).isCafesLoading = false;
      }
    },
    async fetchCafeInfo(id: string) {
      console.log(id);
      try {
        (this as unknown as IProps).isCafesLoading = true;
        const response = await fetch(
          `https://bandaumnikov.ru/api/test/site/get-view?id=${id}`
        );

        const cafe = await response.json();
        this.cafe = cafe.data;
      } catch (e) {
        alert("Ошибка");
      } finally {
        (this as unknown as IProps).isCafesLoading = false;
      }
    },
  },
});
</script>
<style scoped>
.container {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 16px 16px 16px;
}
.main_wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  height: 20vh;
}
.main_block {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
}
.btn_wrapper {
  position: fixed;
}

.header {
  text-align: center;
}
.subheader {
  margin-bottom: 20px;
}
</style>
