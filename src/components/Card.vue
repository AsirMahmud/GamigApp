<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  Game: Array,
});
</script>

<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
    <div
      v-for="game in Game"
      @click="router.push(`/game/${game.id}`)"
      :key="game.id"
      class="card-normal w-72 h-[500px] shadow-primary m-3 border-2 border-spacing-1 border-primary rounded-xl"
    >
      <div class="w-72">
        <img
          :src="game.background_image"
          alt="Shoes"
          class="object-cover w-72 h-60 rounded-t-xl p-1"
        />
      </div>
      <div class="card-body">
        <h3 class="text-2xl text-white">{{ game.name }}</h3>
        <div class="mt-8 flex flex-col items-end p-1">
          <div
            class="badge p-1 w-7 bg-secondary/30 border-none text-white text-xl mb-2"
          >
            {{ game.metacritic }}
          </div>
          <div>
            <div
              class="badge m-1 bg-secondary/30 border-none text-white mt-1"
              v-for="i in game.genres"
            >
              {{ i.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
