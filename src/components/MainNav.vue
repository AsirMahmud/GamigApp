<script setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { useGameStore } from "../stores/counter";
import { storeToRefs } from "pinia";

const asideStore = useGameStore();
const { aside } = storeToRefs(asideStore);
const { asideChanger } = asideStore;
</script>

<template>
  <div
    class="navbar text-white flex justify-between shadow-sm border-primary shadow-primary"
  >
    <RouterLink to="/">
      <Icon icon="mdi:thunder-outline" class="text-6xl"></Icon>
      <p class="text-2xl sm:text-xl">THE REDSTONE</p>
    </RouterLink>
    <div class="flex w-4/12 justify-around lg:visible invisible">
      <RouterLink to="/">HOME</RouterLink>
      <p>ABOUT</p>
      <p>GENRES</p>
      <p>TRENDING</p>
    </div>
    <button @click="asideChanger" class="lg:hidden">
      <Icon icon="fontisto:nav-icon-a" class="text-3xl" />
    </button>
  </div>
</template>
