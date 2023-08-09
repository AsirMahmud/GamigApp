<template>
  <div>
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <p>Page: {{ data.results }}</p>
      <button @click="refetch">Refresh Data</button>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@vueuse/core";

const { isFetching, error, data, refetch } = useFetch(
  "https://api.rawg.io/api/games",
  {
    params: {
      key: "a7d90ad7127b44bbb0a70176dd8cec23",
    },
  }
);
</script>
