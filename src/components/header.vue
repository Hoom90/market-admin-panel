<script setup>
import { onMounted, ref, getCurrentInstance, computed, reactive } from "vue";
import store from "../store";
import router from "../config";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import avatar from "../assets/image.png";
dayjs.extend(jalaliday);

const { emit } = getCurrentInstance();
const props = defineProps({
  sidebar: {
    require: true,
  },
});

const state = reactive({
  sidebar: props.sidebar,
});

// const loggedIn = computed(() => {
//   return store.state.auth.status.loggedIn;
// });

// onMounted(() => {
//   if (loggedIn) {
//     router.push("/");
//   }
// });

const handleSideBar = () => {
  state.sidebar = !state.sidebar;
  emit("update:sidebar", state.sidebar);
};

const handleLogout = () => {
  //   store.dispatch("auth/logout");
  router.push("/login");
};
</script>
<template>
  <div
    class="sticky bg-primary text-white h-[10svh] flex justify-between items-center px-[64px]"
  >
    <div class="flex gap-3 items-center">
      <button
        class="w-[35px] flex flex-col gap-1 border p-2 rounded"
        @click="handleSideBar"
      >
        <div class="h-[2px] w-full bg-white"></div>
        <div class="h-[2px] w-full bg-white"></div>
        <div class="h-[2px] w-full bg-white"></div>
      </button>
      <span> دفتر حسابها </span>
    </div>

    <div class="flex items-center gap-4">
      <span>{{
        dayjs().calendar("jalali").locale("fa").format("YYYY/MM/DD")
      }}</span>
      <button>
        <div class="border rounded-full w-[50px] h-[50px] p-[1px]">
          <img
            :src="avatar"
            alt="avatar"
            class="bg-skeleton rounded-full h-full w-full"
          />
        </div>
      </button>
    </div>
  </div>
</template>
