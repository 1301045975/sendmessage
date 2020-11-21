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
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/Index.vue")
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../views/messagedetail/detail")
  },
  {
    path: "/client",
    name: "Client",
    component: () => import("../views/client/client.vue")
  }



];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
