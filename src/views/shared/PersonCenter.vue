<template>
    <el-container class="cbody">
      <el-main style="padding-top: 100px;">
        <el-row :gutter="0">
          <el-col :span="16" :offset="4">
            <el-tabs tab-position="left">
              <el-tab-pane label="编辑资料">
                <h2>功能正在开发中，敬请期待...</h2>
              </el-tab-pane>
              <el-tab-pane label="我的委托">
                <h2>功能正在开发中，敬请期待...</h2>
              </el-tab-pane>
              <el-tab-pane label="收藏房源">
                <h2>功能正在开发中，敬请期待...</h2>
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
                <CityHouseConfig></CityHouseConfig>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
</template>

<script>
    import CityHouseConfig from "./CityHouseConfig";

    export default {
        name: "PersonCenter",
        components: {
            CityHouseConfig
        }
    }
</script>

<style scoped>

</style>
