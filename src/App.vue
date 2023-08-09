<script setup>
import Aside from "./components/Aside.vue";
import { RouterView } from "vue-router";
import MainNav from "./components/MainNav.vue";
import { useGameStore } from "./stores/counter";
import { storeToRefs } from "pinia";
import { vAutoAnimate } from "@formkit/auto-animate";
const asideStore = useGameStore();
const { aside } = storeToRefs(asideStore);
</script>

<template>
  <div class="w-full flex flex-col max-h-full h-max scroll-smooth">
    <!-- nav-->
    <MainNav class="relative"></MainNav>
    <div class="flex">
      <!--aside-->
      <div
        class="lg-block z-10 h-full w-full absolute mt-2 ease-in-out delay-150 lg:hidden"
        :class="!aside && 'hidden'"
      >
        <Aside></Aside>
      </div>
      <div
        class="lg-block h-full w-1/6 lg:block mt-2 ease-in-out delay-150 hidden"
      >
        <Aside></Aside>
      </div>

      <!--routerView-->
      <div class="col-span-2 flex-auto w-full h-full mt-10">
        <KeepAlive max="20">
          <RouterView></RouterView>
        </KeepAlive>
      </div>
    </div>
  </div>
</template>
