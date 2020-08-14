<template>
  <div>
    <nav-header></nav-header>
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NavFooter from "@/components/common/NavFooter.vue";
import NavHeader from "@/components/common/NavHeader.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    NavFooter,
    NavHeader
  }
};
</script>
