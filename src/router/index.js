import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about/Index.vue")
  },
  {
    path: "/map",
    name: "Map",
    component: () => import("../views/map/Index.vue")
  },
  {
    path: "/me",
    name: "Me",
    component: () => import("../views/me/Index.vue")
  },
  {
    path: "/personcenter",
    name: "PersonCenter",
    component: () => import("../views/shared/PersonCenter.vue")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
