import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Index.vue";

Vue.use(VueRouter);

// router文件夹-->index.js文件
//cv以下代码解决路由地址重复的报错问题(一劳永逸)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

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
    component: () => import("../views/me/Index.vue"),
    meta: {
      needLogin: true
    }
  },
  {
    path: "/rent",
    name: "Rent",
    component: () => import("../views/rent/Index.vue")
  },
  {
    path: "/old",
    name: "Old",
    component: () => import("../views/old/Index.vue"),
  },
  {
    path: "/sale",
    name: "Sale",
    component: () => import("../views/old/Index.vue"),
  },
  {
    path: "/old/detail",
    name: "OldDetail",
    component: () => import("../views/old/Detail.vue")
  },
  {
    path: "/personcenter",
    name: "PersonCenter",
    component: () => import("../views/shared/PersonCenter.vue")
  },

  {
    path: "/Detail_Page",
    name: "Detail_Page",
    component: () => import("../views/rent/Detail_Page.vue")
  },
  {
    path: "/oldHouse",
    name: "OldHouse",
    component: () => import("../views/oldHouse/Index.vue")
  },
  {
    path: "/around",
    name: "Around",
    component: () => import("../components/Around.vue")
  },
  {
    path: "/recommend",
    name: "recommend",
    component: () => import("../components/Recommend.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
