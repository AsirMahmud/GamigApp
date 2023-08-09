<script setup>
import { onBeforeMount, ref } from "vue";
import axiosInstance from "../axiosInstance";
import { RouterLink, useRouter } from "vue-router";
import { useGameStore } from "../stores/counter";
import { storeToRefs } from "pinia";

const router = useRouter();
const genres = ref([]);
const error = ref(null);
const loading = ref(false);
const gameStore = useGameStore();
const { aside } = storeToRefs(gameStore);
const { asideChanger } = gameStore;

onBeforeMount(() => {
  loading.value = true; // Set loading to true before making the API request
  axiosInstance
    .get("/genres")
    .then((res) => {
      genres.value = res.data.results;
      loading.value = false; // Set loading back to false after the API request is complete
    })
    .catch((er) => {
      error.value = er.message;
      loading.value = false; // Set loading back to false if there's an error
    });
});
</script>

<template>
  <div class="bg-black/80 lg:bg-black/10 py-1">
    <p v-if="loading">loading.....</p>
    <div v-else class="text-white">
      <div class="p-4 lg:hidden">
        <h1>HOME</h1>
        <h1>About</h1>
        <h1>Genre</h1>
        <h1>Trendng</h1>
      </div>
      <div
        v-for="i in genres"
        @click="router.push(`/genres/${i.name}`), asideChanger()"
        :key="i.id"
        class="card-normal card-side bg-base-100 shadow-xl m-2 border-primary border-2 rounded-xl active:select-secondary cursor-pointer"
      >
        <div class="flex justify-start items-center m-2 hover">
          <div class="avatar">
            <div class="w-10 rounded-full">
              <img :src="i.image_background" alt="Movie" />
            </div>
          </div>
          <h1 class="text-xl ml-3 text-white">{{ i.name }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
