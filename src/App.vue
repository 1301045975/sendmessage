<template>
  <div id="app" :style="{'zoom':zoomValue}">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      zoomValue: 1
    };
  },
  created() {
    // if (window.screen.width >= 1920) {
    //   this.zoomValue = 1;
    // } else {
    //   this.zoomValue = 0.7;
    // }
  }
};
</script>

<style lang="scss">
// @import "./assets/scss/reset.scss";
// @import "./assets/scss/config.scss";
// @import "./assets/scss/button.scss";
</style>
