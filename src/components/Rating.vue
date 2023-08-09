<script setup>
import { defineProps } from "vue";
const props = defineProps({
  GameInfo: Object,
});
</script>

<template>
  <div
    class="flex md:flex-row flex-col justify-center items-center bg-black/20 m-4 rounded-xl"
  >
    <div class="flex flex-col justify-center items-center m-4 p-4">
      <p class="lg:text-9xl text-5xl font-bold text-white">
        {{ GameInfo.rating }} | 5.0
      </p>
      <p class="lg:text-7xl text-3xl text-white p-2">RATING</p>
    </div>
    <div class="flex flex-col justify-end m-5">
      <div v-for="i in GameInfo.ratings" class="p-4">
        <div
          class="radial-progress text-white"
          :style="`--value:${i.percent};`"
        >
          {{ i.percent }}%
        </div>
        <div className="rating p-4">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>

      <div class="stats shadow">
        <div class="stat place-items-center">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">{{ GameInfo.added / 1000 }}</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Users</div>
          <div class="stat-value text-secondary">
            {{ GameInfo.ratings_count / 1000 }}k
          </div>
          <div class="stat-desc text-secondary">
            ↗︎ {{ GameInfo.reviews_text_count }} ({{ GameInfo.metacritic }}%)
          </div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">{{ GameInfo.ratings_count }}</div>
          <div class="stat-desc">
            ↘︎ {{ GameInfo.suggestions_count }} ({{ GameInfo.playtime }}%)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
