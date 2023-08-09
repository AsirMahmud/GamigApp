<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  GameInfo: Object,
});
</script>

<template>
  <div class="">
    <p class="text-5xl text-white">Platforms</p>
    <div class="flex items-center p-2 bg-black/20 m-4 rounded-xl">
      <div v-for="i in GameInfo.platforms" :key="i.id" class="p-2">
        <div
          v-if="i.platform.id === 187"
          class="flex flex-col justify-center items-center p-2"
        >
          <Icon class="text-7xl text-white" icon="ri:playstation-line" />
          <p class="text-xl text-white">Playstaion 5</p>
        </div>
        <div
          v-else-if="i.platform.id === 186"
          class="flex flex-col justify-center items-center p-2"
        >
          <Icon class="text-7xl text-white" icon="cib:xbox" />
          <p class="text-xl text-white">xbox</p>
        </div>
        <div
          v-else-if="i.platform.id === 4"
          class="flex flex-col justify-center items-center p-2"
        >
          <Icon class="text-7xl text-white" icon="game-icons:pc" />
          <p class="text-xl text-white">PC</p>
        </div>
        <div
          v-else-if="i.platform.id === 7"
          class="flex flex-col justify-center items-center p-2"
        >
          <Icon
            class="text-7xl text-white"
            icon="icon-park-solid:switch-nintendo"
          />
          <p class="text-xl text-white">Nintendo Switch</p>
        </div>
        <div
          v-else-if="i.platform.id === 6"
          class="flex flex-col justify-center items-center p-2"
        >
          <Icon class="text-7xl text-white" icon="carbon:linux" />
          <p class="text-xl text-white">Linux</p>
        </div>
        <div
          v-else-if="i.platform.id === 5"
          class="flex flex-col justify-center items-center p-2"
        >
          <Icon class="text-7xl text-white" icon="wpf:mac-os" />
          <p class="text-xl text-white">Mac</p>
        </div>
        <div
          v-else-if="i.platform.id === 21"
          class="flex flex-col justify-center items-center p-2"
        >
          <Icon class="text-7xl text-white" icon="basil:android-outline" />
          <p class="text-xl text-white">Android</p>
        </div>
      </div>
    </div>
  </div>
</template>
