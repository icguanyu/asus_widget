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
    path: "/gpt",
    component: () => import("../views/gpt/index.vue"),
    children: [
      {
        path: "",
        name: "gpt-entrance",
        component: () => import("../views/gpt/entrance.vue"),
      },
      {
        path: "/gpt/end",
        name: "gpt-end",
        component: () => import("../views/gpt/end.vue"),
      },
      {
        path: "/gpt/:id",
        name: "gpt-room",
        component: () => import("../views/gpt/_id.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "abstract", //abstract
  routes,
});

export default router;
