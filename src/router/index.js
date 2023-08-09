import { createRouter, createWebHistory } from "vue-router";
import HomeViews from "../views/HomeViews.vue";
import GameView from "../views/GameView.vue";
import GenreViews from "../views/GenreViews.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViews,
    },
    {
      path: "/game/:id",
      name: "game",
      component: GameView,
    },

    {
      path: "/genres/:genre",
      name: "genre",
      component: GenreViews,
    },
    // Add additional routes here if needed
  ],
});

export default router;
