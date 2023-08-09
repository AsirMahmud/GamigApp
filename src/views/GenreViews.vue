<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useGameStore } from "../stores/counter";
import { useRouter } from "vue-router";
import Card from "../components/Card.vue";
const router = useRouter();
const route = useRoute();
const { genre } = route.params;
const { games } = useGameStore();
const genres = ref([]);
const loading = ref(true); // Add a loading state

watch(
  () => route.params.genre,
  (newGenre) => {
    loading.value = true; // Set loading to true before fetching new data
    setTimeout(() => {
      // Simulate an asynchronous data fetching process
      genres.value = games.filter((game) => {
        return game.genres.some((g) => g.name === newGenre);
      });
      loading.value = false; // Set loading to false after fetching new data
    }, 500); // Adjust the delay based on your actual API response time
  }
);

// Initially, filter the games based on the default genre
genres.value = games.filter((game) => {
  return game.genres.some((g) => g.name === genre);
});
loading.value = false; // Set loading to false after the initial data is fetched
</script>

<template>
  <div v-if="genres != []" class="w-full flex items-center justify-center">
    <div v-if="loading">loading.....</div>
    <!-- Show loading message -->

    <div v-else class="">
      <Card :Game="genres"></Card>
    </div>
  </div>
  <div v-else>
    <p class="">Sorry</p>
  </div>
</template>
