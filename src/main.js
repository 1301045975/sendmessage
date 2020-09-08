import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import { Message, MessageBox } from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";
import VueJsonp from 'vue-jsonp'
//阿里可伸缩布局方案, 实现分辨率适配
import 'amfe-flexible'


Vue.use(ElementUI);
Vue.use(router);
Vue.use(VueJsonp);

Vue.config.productionTip = false;

// 
// 未登录时，通过url访问需要登录后才能访问的页面，跳转到首页
// 
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (store.getters.token) {
      next();
    } else {
      Message({
        message: '您未登录，无法访问此页面。请先登录',
        type: 'warning',
        duration: 3 * 1000
      });
      next({
        path: "/"
      })
    }
  } else {
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
