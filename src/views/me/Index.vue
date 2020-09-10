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
          <li class="left-sub-header">
            <a @click="showMore()" style="font-size:18px">
              编辑资料
              <i :class="showDetail == 1 ?'el-icon-caret-bottom' : 'el-icon-caret-right'"></i>
            </a>
          </li>
          <a v-if="showDetail == 1">
            <li :class="leftActive==11 ? 'li-active':''" @click="showRight(11)">
              <a>修改昵称</a>
            </li>
            <li :class="leftActive==12 ? 'li-active':''" @click="showRight(12)">
              <a>修改密码</a>
            </li>
            <li :class="leftActive==13 ? 'li-active':''" @click="showRight(13)">
              <a>上传头像</a>
            </li>
            <li
              v-if="roles.indexOf('admin')>-1"
              :class="leftActive==3 ? 'li-active':''"
              :lazy="true"
              @click="showRight(2)"
            >
              <a>房价管理</a>
            </li>
          </a>
          <li class="left-sub-header">
            <a @click="showMore2()" style="font-size:18px">
              我的收藏
              <i :class="showDetail2 == 1 ?'el-icon-caret-bottom' : 'el-icon-caret-right'"></i>
            </a>
          </li>
          <a v-if="showDetail2 == 1">
            <li :class="leftActive==2 ? 'li-active':''" @click="showRight(2)">
              <a>收藏房源</a>
            </li>
          </a>
        </ul>
      </div>
      <div class="right-detail">
        <my-profile v-if="leftActive == 1"></my-profile>
        <change-name v-if="leftActive==11"></change-name>
        <reset-pwd v-if="leftActive==12"></reset-pwd>
        <upload-photo v-if="leftActive==13"></upload-photo>
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
import FavProperty from "@/components/me/FavProperty.vue"; //房价管理
import FavEstate from "@/components/me/FavEstate.vue"; //个人资料
import UploadPhoto from "@/components/me/UploadPhoto.vue"; //上传头像
import ChangeName from "@/components/me/ChangeName.vue"; //修改昵称
import ResetPwd from "@/components/me/ResetPwd.vue"; //重置密码
export default {
  name: "Me",
  components: {
    CityHouseConfig,
    MyHeader,
    MyFooter,
    MyProfile,
    FavProperty,
    FavEstate,
    UploadPhoto,
    ChangeName,
    ResetPwd
  },
  computed: {
    ...mapGetters(["name", "imgurl", "mobile", "roles"])
  },
  data() {
    return {
      leftActive: 0,
      showDetail: 0,
      showDetail2: 0
    };
  },
  methods: {
    showRight(i) {
      this.leftActive = i;
    },
    showMore() {
      this.showDetail = !this.showDetail;
    },
    showMore2() {
      this.showDetail2 = !this.showDetail2;
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
    font-size: 20px;
    font-weight: bold;
    padding: 20px 0;
    border-bottom: 1px solid #eaeaea;
  }
  .left-sub-header {
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
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
  width: 920px;
  padding: 0 20px;
  margin: 0 auto;
  min-height: 600px;
}
</style>
