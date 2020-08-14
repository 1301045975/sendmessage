<template>
  <div class="about">
    <nav-header></nav-header>
    <div>
      <h1>This is an about page</h1>
    </div>
    <nav-footer></nav-footer>
  </div>
  
</template>

<script>
import NavFooter from "@/components/common/NavFooter.vue";
import NavHeader from "@/components/common/NavHeader.vue";

export default {
  name: "About",
  components: {
    NavFooter,
    NavHeader
  }
}
</script>
