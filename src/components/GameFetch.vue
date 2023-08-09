<script setup>
import { ref, onMounted } from "vue";
import { useGameStore } from "../stores/counter";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import Card from "./Card.vue";

useRouter;
const gameStore = useGameStore();
const router = useRouter();
const games = ref([]);
const loading = ref(false);
const error = ref(null);

onMounted(() => {
  loading.value = true;

  gameStore
    .fetchGames("/games")
    .then(() => {
      games.value = gameStore.games;
    })
    .catch((err) => {
      error.value = err.message;
    })
    .finally(() => {
      loading.value = false;
    });
});
</script>

<template>
  <div class="flex flex-col">
    <div class="text-5xl text-white p-4">All Games</div>
    <div class="w-full flex items-center justify-center mr-9 ml-0">
      <div v-if="error">{{ error }}</div>
      <Card v-else :Game="games"></Card>
    </div>
  </div>
</template>
