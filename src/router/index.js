import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "index",
  //   component: () => import("../views/index.vue"),
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/about.vue"),
  // },
  // Chat GPT
  {
    path: "/",
    component: () => import("../views/gpt/index.vue"),
    children: [
      {
        path: "",
        name: "gpt-entrance",
        component: () => import("../views/gpt/entrance.vue"),
      },
      {
        path: "/end",
        name: "gpt-end",
        component: () => import("../views/gpt/end.vue"),
      },
      {
        path: "/:id",
        name: "gpt-room",
        component: () => import("../views/gpt/_id.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash", //abstract
  routes,
});

export default router;
