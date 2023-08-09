// src/store/index.js
import { defineStore } from "pinia";
import axiosInstance from "../axiosInstance"; // Import the Axios instance

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    games: [],
    loading: false,
    error: null,
    aside: false,
  }),
  actions: {
    fetchGames(para) {
      this.loading = true;

      return axiosInstance
        .get(para)
        .then((response) => {
          this.games = response.data.results;
          this.error = null;
        })
        .catch((error) => {
          this.error = error.message;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    asideChanger() {
      this.aside = this.aside ? false : true;
    },
  },
});
