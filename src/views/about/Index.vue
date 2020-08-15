<template>
  <div class="about">
    <my-header></my-header>
    <div>
      <h1>This is an about page</h1>
    </div>
    <my-footer></my-footer>
  </div>
  
</template>

<script>
import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";

export default {
  name: "About",
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
