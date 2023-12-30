<script setup>
import { reactive, ref } from "vue";
import layoutheader from "../components/header.vue";

const sidebar = ref();

const state = reactive({
  links: [
    {
      title: "صندوق",
      url: "/cashier",
    },
    {
      title: "انبارداری",
      url: "/warehouse",
    },
    {
      title: "آمار",
      url: "/report",
    },
  ],
  sidebar: false,
});

const updateSidebar = (value) => {
  state.sidebar = value;
  if (state.sidebar) {
    sidebar.value.classList.replace("w-[50px]", "w-[200px]");
  } else {
    sidebar.value.classList.replace("w-[200px]", "w-[50px]");
  }
};
</script>
<template>
  <div class="max-w-[1440px] mx-auto">
    <layoutheader
      :sidebar="state.sidebar"
      @update:sidebar="updateSidebar"
    ></layoutheader>
    <div class="flex">
      <div
        ref="sidebar"
        class="transition-all ease-in-out translate-x-0 bg-primary text-white w-[50px]"
      >
        <div class="w-full flex flex-col justify-between h-[90vh]">
          <div class="flex flex-col">
            <RouterLink
              v-for="(link, index) in state.links"
              :key="index"
              :to="link.url"
              active-class="bg-primary-second"
              class="p-2 px-3 hover:bg-primary-second text-center flex gap-3 transition-all"
              :class="state.sidebar ? 'justify-start' : 'justify-center'"
            >
              <span> i </span>
              <span v-if="state.sidebar" class="text-start">
                {{ link.title }}
              </span>
            </RouterLink>
          </div>
          <div class="mb-3 w-full px-3">
            <button
              class="flex justify-center gap-2 w-full border rounded-xl p-1 px-3 hover:bg-red-500"
              @click="handleLogout"
            >
              <span>x</span>
              <span v-if="state.sidebar">خروج</span>
            </button>
          </div>
        </div>
      </div>
      <RouterView></RouterView>
    </div>
    <!-- <footer></footer> -->
  </div>
</template>
<style scoped>
/* scrollbar */
::-webkit-scrollbar {
  width: 0;
}
</style>
