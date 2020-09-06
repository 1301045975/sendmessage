<template>
  <div class="el-image" style="position:relative;margin-bottom:40px">
    <img style="height:200px;width:240px;" :src="property.coverImg" />
    <span
      style="height:40px;width:80px;color:red;background-color:rgba(66,66,66,0.3);position:absolute;left:0px;top:0px;text-align:center;line-height:40px"
    >{{ houseType === "old" ? property.allPrice : property.rentPrice}}</span>
    <h3>{{ property.title }}</h3>
    <el-row>
      <span>{{ property.location }}</span> |
      <span>{{ property.countFT }}</span> |
      <span>{{ property.houseArea }}</span> |
      <span>{{ property.decoration }}</span>
    </el-row>
    <el-row>
      <span>{{ companyName }} &nbsp;推荐房源</span>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MyRecommend",
  props: {
    property: Object,
    houseType: String,
  },
  components: {},
  data() {
    return {
      companyName: ""
    };
  },
  created() {
    this.companyName = process.env.VUE_APP_COMPANY_NAME;
  },
  methods: {}
};
</script>

<style scoped>
</style>