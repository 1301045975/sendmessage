<template>
  <div>
    <my-header></my-header>
    <el-container class="cbody">
      <el-main style="padding-top: 100px;">
        <el-row :gutter="0">
          <el-col :span="16" :offset="4">
            <el-tabs tab-position="left">
              <el-tab-pane label="编辑资料">
                <my-profile></my-profile>
              </el-tab-pane>
              <el-tab-pane label="我的委托">
                <h2>功能正在开发中，敬请期待...</h2>
              </el-tab-pane>
              <el-tab-pane label="收藏房源">
                <fav-property></fav-property>
              </el-tab-pane>
              <el-tab-pane label="已看房源">
                <h2>功能正在开发中，敬请期待...</h2>
              </el-tab-pane>
              <el-tab-pane label="专属经纪人">
                <h2>功能正在开发中，敬请期待...</h2>
              </el-tab-pane>
              <el-tab-pane label="房源推荐">
                <h2>功能正在开发中，敬请期待...</h2>
              </el-tab-pane>
              <el-tab-pane label="楼盘推荐">
                <h2>功能正在开发中，敬请期待...</h2>
              </el-tab-pane>
              <el-tab-pane name="cityHousePriceManage" :lazy="true" v-if="true" label="房价管理">
                <city-house-config></city-house-config>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <my-footer></my-footer>
  </div>
</template>

<script>
import CityHouseConfig from "@/components/me/CityHouseConfig.vue";
import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";
import MyProfile from "@/components/me/MyProfile.vue";
import FavProperty from "@/components/me/FavProperty.vue";

export default {
  name: "Me",
  components: {
    CityHouseConfig,
    MyHeader,
    MyFooter,
    MyProfile,
    FavProperty
  }
};
</script>

<style scoped>
</style>
