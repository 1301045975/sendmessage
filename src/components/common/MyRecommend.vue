<template>
  <div class="property-info" @click="toDetail(property.id)">
    <img style="height:200px;width:240px;" :src="property.coverImg" />
    <span
      style="height:40px;width:80px;color:red;background-color:rgba(66,66,66,0.3);position:absolute;left:0px;top:0px;text-align:center;line-height:40px;font-size:16px"
    >{{ houseType === "old" ? property.allPrice : property.rentPrice}}</span>
    <el-row>
      <span style="font-size:16px"><strong>{{ property.title }}</strong></span>
    </el-row>
    <el-row>
      <span style="font-size:16px">{{ property.location }} | </span>
      <span style="font-size:16px">{{ property.countFT }} | </span>
      <span style="font-size:16px">{{ property.houseArea }}</span>
    </el-row>
    <el-row>
      <span style="font-size:14px;color:#bcb2b1">{{ companyName }} &nbsp;推荐房源</span>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MyRecommend",
  props: {
    property: Object,
    houseType: String
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
  methods: {
    toDetail(proid) {
      // console.log(proid + " toDetail");
      if (this.houseType == "old") {
        this.$router.push({
          path: "/old/detail",
          query: {
            proId: proid
          }
        });
      } else {
        this.$router.push({
          path: "/rent/detail",
          query: {
            proId: proid
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.property-info {
  position: relative;
  margin-bottom: 40px;
}
</style>