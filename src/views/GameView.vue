<script setup>
import { storeToRefs } from "pinia";
import { useGameStore } from "../stores/counter";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import Rating from "../components/Rating.vue";
import Genres from "../components/Genres.vue";
import PlatForm from "../components/PlatForm.vue";

const gameStore = useGameStore();
const gameInfo = ref(null);
const route = useRoute();
const { id } = route.params;

onBeforeMount(() => {
  // Find the game with the specified id in the gameStore.games array
  const foundGame = gameStore.games.find((c) => c.id === parseInt(id));
  // If the game is found, store it in the gameInfo ref
  if (foundGame) {
    gameInfo.value = foundGame;
  } else {
    // Handle the scenario when the game with the specified id is not found
    console.error(`Game with id ${id} not found.`);
  }
});
</script>

<template>
  <div v-if="gameInfo" class="max-w-full h-full">
    <h1 class="lg:text-8xl md:text-5xl text-5xl m-4 text-white">
      {{ gameInfo.name }}
    </h1>
    <div class="flex flex-col lg:flex-row items-center justify-start">
      <img
        :src="gameInfo.background_image"
        class="lg:w-[50%] lg:h-[50%] w-[80%] object-cover m-4"
      />
      <div class="flex flex-col p-4">
        <h1>ScreenShots</h1>
        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="(i, j) in gameInfo.short_screenshots"
            class="lg:w-72 p-1 m-auto grid-flow-row border-4 border-white overflow-hidden"
          >
            <img :src="i.image" class="w-72 object-cover" />
          </div>
        </div>
      </div>
    </div>

    <Rating :GameInfo="gameInfo"></Rating>
    <Genres :GameInfo="gameInfo"></Genres>
    <PlatForm :GameInfo="gameInfo"></PlatForm>
  </div>
</template>
