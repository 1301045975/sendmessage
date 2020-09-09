<template>
  <div class="height:100%">
    <my-header></my-header>
    <div class="main-content">
      <!-- <el-row :gutter="0">
          <el-col :span="16" :offset="4">
            <el-tabs tab-position="left">
              <el-tab-pane label="编辑资料">
                <my-profile></my-profile>
              </el-tab-pane>, 
               
              <el-tab-pane  label="收藏房源">
                <fav-property></fav-property>
              </el-tab-pane>
              <el-tab-pane v-if="roles.indexOf('admin')>-1" name="cityHousePriceManage" :lazy="true" label="房价管理">
                <city-house-config></city-house-config>
              </el-tab-pane>
            </el-tabs>
          </el-col>
      </el-row>-->
      <div class="left-title">
        <div class="left-title-header">个人中心</div>
        <ul>
          <li :class="leftActive==1 ? 'li-active':''" @click="showRight(1)">
            <a>编辑资料</a>
          </li>
          <li :class="leftActive==2 ? 'li-active':''" @click="showRight(2)">
            <a>收藏房源</a>
          </li>
          <li
            v-if="roles.indexOf('admin')>-1"
            :class="leftActive==3 ? 'li-active':''"
            :lazy="true"
            @click="showRight(2)"
          >
            <a>房价管理</a>
          </li>
        </ul>
      </div>
      <div class="right-detail">
        <my-profile v-if="leftActive == 1"></my-profile>
        <fav-property v-if="leftActive == 2"></fav-property>
        <city-house-config v-if="leftActive == 3"></city-house-config>
      </div>
    </div>
    <my-footer style="position:fixed; bottom: 10px"></my-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CityHouseConfig from "@/components/me/CityHouseConfig.vue";
import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";
import MyProfile from "@/components/me/MyProfile.vue";
import FavProperty from "@/components/me/FavProperty.vue";
import FavEstate from "@/components/me/FavEstate.vue";

export default {
  name: "Me",
  components: {
    CityHouseConfig,
    MyHeader,
    MyFooter,
    MyProfile,
    FavProperty,
    FavEstate
  },
  computed: {
    ...mapGetters(["name", "imgurl", "mobile", "roles"])
  },
  data() {
    return {
      leftActive: 0
    };
  },
  methods: {
    showRight(i) {
      this.leftActive = i;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-content {
  padding: 30px 0;
  width: 1150px;
  margin: 0 auto;
}
.left-title {
  background: #fafafa;
  width: 170px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  border: 1px solid #e6e5e5;
  float: left;
  text-align: center;
  .left-title-header {
    cursor: pointer;
    width: 120px;
    height: 33px;
    line-height: 33px;
    margin: 0 auto;
    font-size: 19px;
    font-weight: bold;
    padding: 20px 0;
    border-bottom: 1px solid #eaeaea;
  }
  ul {
    padding: 0px;
  }
  li {
    cursor: pointer;
    line-height: 35px;
    font-size: 16px;
    margin: 0 auto;
    padding: 10px 0;
    list-style-type: none;
    a:hover {
      color: #409eff;
    }
  }
  .li-active {
    background-color: #409eff;
    color: #fff;
  }
}
.right-detail {
  float: right;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  border: 1px solid #e6e5e5;
  width: 930px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
