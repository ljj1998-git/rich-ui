import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "app",
      component: () => import("@/layouts/default.vue"),
      children: [
        {
          path: "/icon",
          name: "icon",
          component: () => import("@/views/icon.vue"),
        }
      ],
    },

  ],
});

export default router;
