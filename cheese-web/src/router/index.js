import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import CheeseDetails from "../views/CheeseDetails.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/cheese/:id",
    name: "CheeseDetails",
    component: CheeseDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
