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
          meta:{
            label:'图标'
          }
        },
        {
          path: "/button",
          name: "button",
          component: () => import("@/views/button.vue"),
          meta:{
            label:'按钮'
          }
        },
        {
          path: "/earth",
          name: "earth",
          component: () => import("@/views/earth.vue"),
          meta:{
            label:'three-地球'
          }
        }
      ],
    },

  ],
});

export default router;
