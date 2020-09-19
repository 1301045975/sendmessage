<template>
  <div>
    <el-container class="cbody">
      <div style="width:1000px; margin: 0 auto; height:100px">
        <el-header style="height:100px">
          <div style="display:flex;flex-direction:row;justify-content:space-between">
            <div>
              <span
                style="font-size:24px;cursor:pointer;font-weight:bold;color:white"
              >{{ companyName }}</span>
              <span style="font-size:12px;color:white">
                <i class="el-input__icon el-icon-location-outline"></i>
                {{city}}
              </span>
            </div>
            <div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:35%">
              <span style="font-size:16px;cursor:pointer;color:white" @click="send('/old')">二手房</span>
              <span style="font-size:16px;cursor:pointer;color:white" @click="send('/rent')">租房</span>
              <span style="font-size:16px;cursor:pointer;color:white" @click="send('/map')">地图找房</span>
              <span
                style="font-size:16px;cursor:pointer;color:white"
                @click="center"
              >{{loginOrRegis}}</span>
              <span
                style="font-size:18px;cursor:pointer;color:white"
                @click="logout"
                v-show="!logoutFlag"
              >退出</span>
            </div>
          </div>
          <div>
            <login-dialog
              ref="loginDialog"
              :width="'460px'"
              :height="'600px'"
              @loginSuccess="loginCallback"
            ></login-dialog>
          </div>
        </el-header>
      </div>
      <el-main style="padding-top: 100px;">
        <el-row type="flex" justify="center">
          <el-col :span="8" style="text-align: center; font-size:22px">
            <span
              :class="houseType==='oldHouse'?'houseType activet':'houseType'"
              @click="searchType('oldHouse')"
            >
              <strong>找二手房</strong>
            </span>
            <span
              :class="houseType==='rentHouse'?'houseType activet':'houseType' "
              @click="searchType('rentHouse')"
            >
              <strong>找租房</strong>
            </span>
          </el-col>
        </el-row>
        <el-row class="csearch" type="flex" justify="center">
          <el-col :span="8">
            <el-input
              :placeholder="searchPlaceHolder"
              v-model="searchContent"
              class="input"
              style="border-radius: 0px;"
            ></el-input>
          </el-col>
          <el-button type="success" class="cbtn-bg" @click="searchHouse">开始找房</el-button>
        </el-row>
      </el-main>
    </el-container>
    <el-container>
      <div style="width:50%;margin:20px auto;height: 200px;">
        <el-row>
          <el-col :span="12" style="text-align: center;">
            <el-row>
              <el-image
                @click="send('/old')"
                :src="require('../../assets/OldHouse.png')"
                style="width:80px;height:80px"
              ></el-image>
            </el-row>
            <el-row style="line-height:40px;font-size:18px;">
              <span @click="send('/old')" style="cursor:pointer;">找二手房</span>
            </el-row>
            <el-row style="line-height:40px;font-size:12px;color:grey">海量真实房源，数量不重复，点击开启看房旅程</el-row>
          </el-col>
          <el-col :span="12" style="text-align: center;">
            <el-row>
              <el-image
                @click="send('/rent')"
                :src="require('../../assets/RentHouse.png')"
                style="width:80px;height:80px"
              ></el-image>
            </el-row>
            <el-row style="line-height:40px;font-size:18px;">
              <span @click="send('/rent')" style="cursor:pointer;">找租房</span>
            </el-row>
            <el-row style="line-height:40px;font-size:12px;color:grey">整租、短租公寓信息量大一应俱全</el-row>
          </el-col>
        </el-row>
      </div>
    </el-container>

    <el-container>
      <el-main>
        <div style="display:flex;justify-content:center;align-items:center;padding-bottom:20px;">
          <div style="display:flex;justify-content:space-between;align-items:center;width:1100px;">
            <span style="font-size:24px"><strong>热门售房</strong></span>
            <span style="font-size:16px" @click="send('/old')">查看更多>></span>
          </div>
        </div>

        <div style="display:flex;justify-content:center;align-items:center;">
          <div
            v-if="recOldProperties.length > 0"
            style="display:flex;justify-content:space-between;align-items:center;width:1100px;"
          >
            <my-recommend
              v-for="(item, index) in recOldProperties.slice(0,4)"
              :key="'recOldProperties2'+index"
              :property="item"
              :houseType="'old'"
            ></my-recommend>
          </div>
        </div>
        <div style="display:flex;justify-content:center;align-items:center;">
          <div
            v-if="recOldProperties.length > 0"
            style="display:flex;justify-content:space-between;align-items:center;width:1100px;"
          >
            <my-recommend
              v-for="(item, index) in recOldProperties.slice(4,8)"
              :key="'recOldProperties2'+index"
              :property="item"
              :houseType="'old'"
            ></my-recommend>
          </div>
        </div>
      </el-main>
    </el-container>

    <el-container>
      <el-main>
        <div style="display:flex;justify-content:center;align-items:center;">
          <div style="display:flex;justify-content:space-between;align-items:center;width:1100px;padding-bottom:20px;">
            <span style="font-size:24px"><strong>热门租房</strong></span>
            <span style="font-size:16px" @click="send('/rent')">查看更多>></span>
          </div>
        </div>
        <div style="display:flex;justify-content:center;align-items:center;">
          <div
            v-if="recRentProperties.length > 0"
            style="display:flex;justify-content:space-between;align-items:center;width:1100px;"
          >
            <my-recommend
              v-for="(item, index) in recRentProperties.slice(0,4)"
              :key="'recOldProperties2'+index"
              :property="item"
              :houseType="'rent'"
            ></my-recommend>
          </div>
        </div>

        <div style="display:flex;justify-content:center;align-items:center;">
          <div
            v-if="recRentProperties.length > 0"
            style="display:flex;justify-content:space-between;align-items:center;width:1100px;"
          >
            <my-recommend
              v-for="(item, index) in recRentProperties.slice(4,8)"
              :key="'recOldProperties2'+index"
              :property="item"
              :houseType="'rent'"
            ></my-recommend>
          </div>
        </div>
      </el-main>
    </el-container>

    <my-footer></my-footer>
  </div>
</template>

<script>
import oldHouseApi from "@/api/oldhouse";
import { getToken } from "@/utils/auth"; // 验权
import store from "@/store";
import MyRecommend from "@/components/common/MyRecommend.vue";
import { getOldHouseRec, getRentHouseRec } from "@/api/home";

(function(m, ei, q, i, a, j, s) {
  m[i] =
    m[i] ||
    function() {
      (m[i].a = m[i].a || []).push(arguments);
    };
  (j = ei.createElement(q)), (s = ei.getElementsByTagName(q)[0]);
  j.async = true;
  j.charset = "UTF-8";
  j.src = "https://static.meiqia.com/dist/meiqia.js?_=t";
  s.parentNode.insertBefore(j, s);
})(window, document, "script", "_MEIQIA");
// _MEIQIA("entId", "204239");
//_MEIQIA('manualInit');
// import BMap from "BMap";

import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";
import loginDialog from "@/components/login/loginDialog";
import { getOldHouse, getRentHouse } from "@/api/map";
import { str2Date, dateDiff, calculateLastUpdate } from "@/utils/date";

export default {
  name: "Home",
  components: {
    MyHeader,
    MyFooter,
    loginDialog,
    MyRecommend
  },
  data() {
    return {
      companyName: "",
      city: "",
      searchPlaceHolder: "请输入区域、商圈或小区名",
      houseType: "oldHouse",
      searchMap: {},
      list: [],
      activeIndex: "1",
      activeIndex2: "1",
      searchContent: "",
      getDownloadImage:
        "https://ajax.api.lianjia.com/qr/getDownloadQr?location=site_middle&ljweb_channel_key=site_index",
      ershouImage:
        "http://117.51.142.27:9003/5eb404d9-76d8-4048-ad69-24ef1243fa67.jpg",
      loginOrRegis: "登录/注册",
      logoutFlag: false,
      recRentProperties: [],
      recOldProperties: [],
      defaultImg: require("../../assets/img/noimg.jpg")
    };
  },
  created() {
    if (getToken()) {
      store
        .dispatch("GetInfo")
        .then(res => {
          // 拉取用户信息
          this.loginOrRegis = this.$store.getters.mobile;
          this.logoutFlag = false;
        })
        .catch(err => {
          this.$message.error("获取用户信息失败");
        });
    } else {
      this.logoutFlag = true;
    }
    getOldHouseRec()
      .then(res => {
        if (res.code === 200) {
          // this.recOldProperties = res.data;
          let data = res.data;
          // 清空
          this.recOldProperties.splice(0, this.recOldProperties.length);
          if (data) {
            data.forEach((item, i) => {
              let propertyInfo = {};
              // 默认封面图片
              propertyInfo.id = item.proId;
              propertyInfo.coverImg = item.proCoverUrl
                ? item.proCoverUrl
                : this.defaultImg;
              // 详细页面链接
              propertyInfo.detailUrl = "#";
              // 标题
              propertyInfo.title = item.proTitle;
              // 位置
              propertyInfo.location = item.proDistrict + "-" + item.proArea;
              // x室y厅
              propertyInfo.countFT =
                item.proCountF +
                "室" +
                item.proCountT +
                "厅" +
                item.proCountW +
                "卫";
              // 面积
              propertyInfo.houseArea = item.proSquare + "m²";
              // 朝向
              propertyInfo.direction = item.proDirection;
              // 装修
              propertyInfo.decoration = item.proDecoration;
              // 楼层
              propertyInfo.floor =
                item.proFloor + "(共" + item.proFloorAll + "层)";
              propertyInfo.completeYear = item.proCompleteYear + "建";
              propertyInfo.houseType = item.proType;
              propertyInfo.numFav = Math.round(Math.random() * 1000) + "关注";
              propertyInfo.lastUpdate = calculateLastUpdate(
                str2Date(item.proModDate)
              );
              propertyInfo.isSupportVR = true;
              propertyInfo.isAllowView = true;
              propertyInfo.isOverFiveYears = false;
              propertyInfo.allPrice = item.proPrice + item.proPriceType;
              propertyInfo.unitPrice =
                "单价：" + item.proUnitPrice + item.proUnitPriceType;
              propertyInfo.rentPrice =
                item.proRentPrice + item.proRentPriceType;
              this.recOldProperties.push(propertyInfo);
            });
          }
        } else {
          this.$message.error("二手房推荐获取失败");
        }
      })
      .catch(err => {
        console.log(err);
      });
    getRentHouseRec()
      .then(res => {
        if (res.code === 200) {
          // this.recRentProperties = res.data;
          let data = res.data;
          // 清空
          this.recRentProperties.splice(0, this.recRentProperties.length);
          if (data) {
            data.forEach((item, i) => {
              let propertyInfo = {};
              // 默认封面图片
              propertyInfo.id = item.proId;
              propertyInfo.coverImg = item.proCoverUrl
                ? item.proCoverUrl
                : this.defaultImg;
              // 详细页面链接
              propertyInfo.detailUrl = "#";
              // 标题
              propertyInfo.title = item.proTitle;
              // 位置
              propertyInfo.location = item.proDistrict + "-" + item.proArea;
              // x室y厅
              propertyInfo.countFT = item.proTitle.split("，")[0];
              // 面积
              propertyInfo.houseArea = item.proSquare + "m²";
              // 朝向
              propertyInfo.direction = item.proDirection;
              // 装修
              propertyInfo.decoration = item.proDecoration;
              // 楼层
              propertyInfo.floor =
                item.proFloor + "(共" + item.proFloorAll + "层)";
              propertyInfo.completeYear = item.proCompleteYear + "建";
              propertyInfo.houseType = item.proType;
              propertyInfo.numFav = Math.round(Math.random() * 1000) + "关注";
              propertyInfo.lastUpdate = calculateLastUpdate(
                str2Date(item.proModDate)
              );
              propertyInfo.isSupportVR = true;
              propertyInfo.isAllowView = true;
              propertyInfo.isOverFiveYears = false;
              propertyInfo.allPrice = item.proPrice + item.proPriceType;
              propertyInfo.unitPrice =
                "单价：" + item.proUnitPrice + item.proUnitPriceType;
              propertyInfo.rentPrice =
                item.proRentPrice + item.proRentPriceType;
              this.recRentProperties.push(propertyInfo);
            });
          }
        } else {
          this.$message.error("租房推荐获取失败");
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    this.ready();
    this.companyName = process.env.VUE_APP_COMPANY_NAME;
    // console.log(process.env.VUE_APP_COMPANY_NAME);
    // console.log(process.env.VUE_APP_BASE_API_PORTAL);
    // this.initOldHose();
  },
  methods: {
    ready() {
      var geolocation = new window.BMap.Geolocation();
      geolocation.getCurrentPosition(
        r => {
          console.log(r.address.city);
          this.city = r.address.city;
        },
        { enableHighAccuracy: true }
      );
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({ path: key });
    },
    send(path) {
      this.$router.push({ path: path });
    },
    business() {
      window.location.href = "https://shangye.lianjia.com/bj/xzl/rent/mlist";
    },
    initOldHose() {
      oldHouseApi.search(1, 4, this.searchMap).then(response => {
        this.list = response.data.rows;
      });
    },
    searchType(type) {
      console.log(type);
      this.houseType = type;
    },
    info(id) {
      this.$router.push("/oldHouse/info/" + id);
    },
    searchHouse() {
      console.log(this.houseType);
      if (this.houseType === "oldHouse") {
        this.$router.push({
          name: "Old",
          params: { searchContent: this.searchContent }
        });
      } else {
        this.$router.push({
          name: "Rent",
          params: { searchContent: this.searchContent }
        });
      }
      // this.$router.push("/" + this.houseType + "/" + this.searchContent);
    },
    showLoginDialog() {
      this.$refs.loginDialog.showDialog(true);
    },
    loginCallback() {
      // 获取用户电话
      // this.telephone = this.$store.getters.mobile;
      // 修改登陆状态
      // this.loginFlg = true;
    },
    center() {
      if (this.loginOrRegis == "登录/注册") {
        this.showLoginDialog();
      } else {
        this.$router.push({ path: "/me" });
        // alert('go to center');
      }
    },
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        this.$message.success("登出成功");
        location.reload(); // 为了重新实例化vue-router对象 避免bug
      });
    }
  }
};
</script>

<style  lang="scss" scoped>
.cbody {
  background-image: url("../../assets/img/bannerV4.jpg");
  width: 100%;
  height: 500px;
  padding-top: 30px;
  background-position: center 0;
  background-attachment: fixed;
  display: block;
  position: relative;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.cheader {
  width: 1100px;
  margin: 0 auto;
  line-height: 100px;
  color: #fff;
  text-align: center;
}
.csearch {
  width: 100%;
  padding-top: 10px;
}
.el-input__inner {
  border-radius: 0px;
}
.capp {
  width: 100%;
  height: 600px;
  background-image: url("../../assets/img/bg-app.jpg");
  background-repeat: no-repeat;
}
.cbtn-bg {
  background: #00ae66;
  border: none;
  border-radius: 20px;
  // height: 50px;
  width: 140px;
  font-size: 18px;
}
.cefooter {
  width: 100%;
  height: 260px;
  background-image: url("../../assets/img/truth-bgV2.jpg");
}

.input >>> .el-input__inner {
  height: 50px;
  border-radius: 0px;
}

.crow {
  padding: 10px 0px;
}

.citem {
  background: none;
  color: #fff;
}
.recommend-info {
  width: 1100px;
  margin: 0 auto;
}
.recommend-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
}
.info-title {
  padding: 0px;
}
.info-item {
  list-style-type: none;
  float: left;
  width: 24%;
}
.houseType {
  color: #fff;
  cursor: pointer;
  padding-left: 20px;
}
.activet {
  color: #00ae66;
}
</style>
