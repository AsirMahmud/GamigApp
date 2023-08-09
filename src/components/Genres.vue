<script setup>
import { defineProps } from "vue";
const props = defineProps({
  GameInfo: Object,
});
</script>

<template>
  <div>
    <p class="text-5xl text-white p-4">GENRES</p>
    <div
      class="grid grid-cols-2 justify-center bg-black/20 m-4 rounded-xl items-center"
    >
      <div
        v-for="i in GameInfo.genres"
        class="p-4 justify-center flex flex-col items-center"
      >
        <img :src="i.image_background" class="w-[30%]" />
        <p class="text-2xl text-white">{{ i.name }}</p>
      </div>
    </div>
  </div>
</template>
