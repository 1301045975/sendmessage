<template>
  <div>
    <my-header :detailActive="1"></my-header>
    <div class="cheader">
      <div style="padding-top: 30px">
        <el-row class="csearch" type="flex" justify="center">
          <el-col
            :span="2"
            style="font-size: 28px;cursor: pointer;color: #00ae66;font-weight: bold"
          >军军房产</el-col>
          <el-col :span="8">
            <el-input
              placeholder="请输入内容"
              v-model="searchContent"
              class="input"
              style="border-radius: 0px"
            ></el-input>
          </el-col>
          <el-button type="success" class="cbtn-bg">开始找房</el-button>
        </el-row>
      </div>
    </div>

    <el-container class="detail-container">
      <el-main class="detail-main">
        <!-- 标题信息 -->
        <el-row :span="18" style="display:flex; flex-direction: row;">
          <el-col>
            <h1
              class="Title-info"
            >{{property.proArea}}{{property.proDistrict}}{{property.proEstateName}} {{property.proSquare}}平米{{property.proDecoration}} {{property.proTitle}}</h1>
          </el-col>
          <el-col :span="6" style="display:flex;justify-content:center; align-items:center">
            <el-button class="collect-house-btn" @click="collectHouse" plain>关注房源</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16" class="house-regin">军军房产网 > 成都二手房 > 郫都区二手房 > 犀浦二手房 > 当前房源</el-col>
          <el-col :span="8" class="house-regin">房源发布机构 加入对比 分享此房源</el-col>
        </el-row>
        <!-- 图片及基本信息 -->
        <el-row style="margin-top: 20px;">
          <el-col :span="12">
            <!-- <div style="width:100%">
              <el-carousel :interval="4000" type="card" height="400px">
                <el-carousel-item v-for="(item,index) in imgs" :key="index">
                  <img class="lunbo" :src="item.src" style="position:relative" />
                </el-carousel-item>
              </el-carousel>
            </div>-->
            <!-- 左边轮播图 -->
            <swiper ref="swiper" :autoPlay="false" :showIndicator="true">
              <slide v-for="(imgUrl, index) in imgUrls" :key="'imgUrls' + index">
                <img class="img-main" :src="imgUrl" />
              </slide>
            </swiper>
            <swiper-footer
              ref="swiperFooter"
              :autoPlay="autoPlay"
              @slideToIndex="handleSlideToIndex"
            >
              <div slot="prevBtn" class="prev-btn" @click="handlePrevSlide">&lt;</div>
              <swiper-footer-slide
                v-for="(imgUrl, index) in imgUrls"
                :key="'imgUrlsFooter' + index"
                @click="hanleSlideTo(index)"
              >
                <img
                  :class="index == imgActiveIndex ? 'img-active img-footer' : 'img-footer'"
                  :src="imgUrl"
                />
              </swiper-footer-slide>
              <div slot="nextBtn" class="next-btn" @click="handleNextSlide">&gt;</div>
            </swiper-footer>
          </el-col>
          <!-- 右边基本信息 -->
          <el-col :span="12">
            <div class="base-info">
              <!-- 价格 -->
              <div class="base-info-one">
                <div class="left-price">
                  <span class="left-price-unit">{{property.proPrice }}</span>
                  {{property.proPriceType}}
                </div>
                <div class="left-singleprice">
                  <span>
                    <span
                      style="font-weight:bold;"
                    >{{property.proPrice * 10000 / property.proSquare}}</span>
                    <i>元/平米</i>
                  </span>
                  <span class="left-singleprice-monthly">首付{{property.proPrice * 0.3}}万</span>
                </div>
              </div>
              <!-- 分割线 -->
              <el-divider></el-divider>
              <!-- 基本信息 -->
              <div class="base-info-two">
                <div class="base-info-item">
                  <span class="base-info-main">{{property.proCountF}}室{{property.proCountT}}厅</span>
                  <span class="base-info-sub">{{property.proFloor}}共{{property.proFloorAll}}层</span>
                </div>
                <div class="base-info-item">
                  <span class="base-info-main">{{property.proDirection}}</span>
                  <span class="base-info-sub">其他</span>
                </div>
                <div class="base-info-item">
                  <span class="base-info-main">{{property.proSquare}} 平米</span>
                  <span class="base-info-sub">{{property.proDate.substring(0,4)}}年建楼</span>
                </div>
              </div>
              <!-- 分割线 -->
              <el-divider></el-divider>
              <!-- 区域信息 -->
              <div class="base-info-san"></div>
            </div>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <div style="position: relative">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#f5f5f5"
            text-color="#101d37"
            active-text-color="red"
          >
            <el-menu-item index="1">房屋信息</el-menu-item>
            <el-submenu index="2">
              <template slot="title">房源描述</template>
              <el-menu-item index="2-1">交通出行</el-menu-item>
              <el-menu-item index="2-2">周边配套</el-menu-item>
              <el-menu-item index="2-3">朝向坐标</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">费用详情</el-menu-item>
            <el-menu-item index="4">推荐经纪人</el-menu-item>
            <el-menu-item index="5">地址和交通</el-menu-item>
            <el-menu-item index="6">房产计算器</el-menu-item>
            <el-button
              type="primary round"
              icon="el-icon-phone"
              style="margin-top:10px;margin-left: 30px"
            >电话咨询</el-button>
            <el-button
              type="primary round"
              icon="el-icon-user-solid"
              style="position: relative"
            >预约看房</el-button>
          </el-menu>
        </div>
        <!--房屋基本信息                    -->
        <el-row>
          <h2>房屋信息</h2>
          <el-row>
            <el-col :span="4">
              <span>基本信息</span>
            </el-col>
            <el-col :span="6">
              <el-row style="line-height: 30px;">房屋户型：三居室</el-row>
              <el-row style="line-height: 30px;">租房方式：月付</el-row>
              <el-row style="line-height: 30px;">委托人：飞飞程</el-row>
              <el-row style="line-height: 30px;">房屋朝向：南北</el-row>
              <el-row style="line-height: 30px;">房屋面积：362㎡</el-row>
              <el-row style="line-height: 30px;">配套电梯：三部</el-row>
            </el-col>
            <el-col :span="6">
              <el-row style="line-height: 30px;">所在楼层：17层</el-row>
              <el-row style="line-height: 30px;">租期：六个月</el-row>
              <el-row style="line-height: 30px;">取暖：有</el-row>
              <el-row style="line-height: 30px;">燃气：有</el-row>
              <el-row style="line-height: 30px;">用电：有</el-row>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col :span="4">
              <span>看房</span>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" icon="el-icon-user-solid" size="normal">预约看房</el-button>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col :span="4">
              <span>配套设施</span>
            </el-col>
            <el-col :span="2" style="text-align: center">
              <el-row style="line-height: 40px">
                <i class="el-icon-circle-check" style="font-size:32px;width: 36px;height: 36px"></i>
              </el-row>
              <el-row>保险</el-row>
            </el-col>

            <el-col :span="2" style="text-align: center">
              <el-row style="line-height: 40px">
                <i class="el-icon-help" style="font-size:32px;width: 36px;height: 36px"></i>
              </el-row>
              <el-row>电视</el-row>
            </el-col>
            <el-col :span="2" style="text-align: center">
              <el-row style="line-height: 40px">
                <i class="el-icon-s-custom" style="font-size:32px;width: 36px;height: 36px"></i>
              </el-row>
              <el-row>物管</el-row>
            </el-col>
            <el-col :span="2" style="text-align: center">
              <el-row style="line-height: 40px">
                <i class="el-icon-plus" style="font-size:32px;width: 36px;height: 36px"></i>
              </el-row>
              <el-row>商超</el-row>
            </el-col>
            <el-col :span="2" style="text-align: center">
              <el-row style="line-height: 40px">
                <i class="el-icon-map-location" style="font-size:32px;width: 36px;height: 36px"></i>
              </el-row>
              <el-row>地铁</el-row>
            </el-col>
            <el-col :span="2" style="text-align: center">
              <el-row style="line-height: 40px">
                <i class="el-icon-key" style="font-size:32px;width: 36px;height: 36px"></i>
              </el-row>
              <el-row>
                <span>电子门锁</span>
              </el-row>
            </el-col>
          </el-row>
        </el-row>
        <el-row>
          <h2>房源描述</h2>
          <el-row style="margin-bottom: 20px;">
            <el-col :span="12" style="line-height: 28px">
              【交通出行】
              小区距离八通线通州北苑站986m（来源于百度地图） 公交车站（1）：复兴里：317路、802路、通22路、通2路、通43路 （2）后南仓：317路、802路、809路
            </el-col>
          </el-row>
          <el-row style="margin-bottom: 20px;">
            <el-col :span="12" style="line-height: 28px">
              【周边配套】
              小区北侧就是万达广场、万达宝贝王，万达影城，永辉超市，建行，国泰百货，东侧是潞河医院
            </el-col>
          </el-row>
        </el-row>
        <el-row style="margin-bottom: 20px">
          <h2>费用详情</h2>
          <el-row>
            <h4>年租价 当租期不足1年时租金可能会上浮，详询管家</h4>
          </el-row>
          <el-row style="line-height: 44px;">
            <el-col :span="4">付款方式</el-col>
            <el-col :span="4">租金 (元/月)</el-col>
            <el-col :span="4">押金 (元)</el-col>
            <el-col :span="4">服务费 (元)</el-col>
            <el-col :span="4">中介费 (元)</el-col>
          </el-row>
          <el-row>
            <el-col :span="4">季付</el-col>
            <el-col :span="4">2200</el-col>
            <el-col :span="4">三个月</el-col>
            <el-col :span="4">1000</el-col>
            <el-col :span="4">3000</el-col>
          </el-row>
        </el-row>
        <el-row>
          <h2>推荐经纪人</h2>
          <span>您可以通过拨打电话或在线咨询的方式联系经纪人</span>
          <el-row style="line-height: 44px;margin-top: 20px;">
            <el-card shadow="never">
              <el-row>
                <el-col :span="6">
                  <el-image :src="src"></el-image>
                </el-col>
                <el-col :span="6">
                  <span style="margin-left: 80px">王大军</span>
                  <br />
                  <span style="margin-left: 80px">评分:9.2 | 20次评价</span>
                  <br />
                  <span style="margin-left: 80px">182818281828</span>
                  <br />
                  <span style="margin-left: 80px">
                    <el-button type="success" size="normal">在线咨询</el-button>
                  </span>
                </el-col>
              </el-row>
            </el-card>
          </el-row>

          <el-row>
            <h2>地址和交通</h2>
            <el-row>
              <!-- <baidu-map>
              </baidu-map>-->
            </el-row>
          </el-row>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <h2>房产计算器</h2>
          <calculator_tool></calculator_tool>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <h2>周边配套</h2>
          <around class="around" />
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <h2>推荐二手房</h2>
          <Recommend :recomProperty="recomProperty" />
        </el-row>
      </el-main>
    </el-container>
    <my-footer></my-footer>
  </div>
</template>

<script>
import houseApi from "@/api/house";
import oldHouseApi from "@/api/oldhouse";
import searchHouse from "@/views/old/Index";
import calculator_tool from "@/components/calculator_tool";

import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";
import Around from "@/components/Around";
import Recommend from "@/components/Recommend";

import {
  Swiper,
  Slide,
  SwiperFooter,
  SwiperFooterSlide
} from "@/components/common/swiper";
import cost from "../../api/cost";

export default {
  name: "OldDetail",
  components: {
    MyHeader,
    MyFooter,
    Swiper,
    Slide,
    SwiperFooter,
    SwiperFooterSlide,
    Around,
    Recommend,
    calculator_tool
  },
  data() {
    return {
      proId: -1,
      searchContent: "",
      recomProperty: [],
      imgs: [
        { src: require("../../assets/img/bg-app.jpg") },
        { src: require("../../assets/img/banner.jpg") },
        { src: require("../../assets/img/bg-login.jpg") },
        { src: require("../../assets/img/bannerV2.jpg") },
        { src: require("../../assets/img/bg-login.jpg") }
      ],
      imgActiveIndex: 0,
      autoPlay: true,
      imgUrls: [
        "https://image1.ljcdn.com/110000-inspection/pc1_vcEpfzgJg_1.jpg.710x400.jpg",
        "https://image1.ljcdn.com/110000-inspection/pc1_vcEpfzgJg_1.jpg.710x400.jpg",
        "https://image1.ljcdn.com/110000-inspection/pc1_vcEpfzgJg_1.jpg.710x400.jpg"
      ],
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      activeIndex2: "1",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      property: {
        proTitle: ""
      },
      activeName: "first",
      loading: true
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      //获取页面传递的参数
      this.proId = this.$route.query.proId;
      //通过pid获取详细信息
      houseApi
        .getProDetail(this.proId, "chengdu")
        .then(res => {
          this.property = res.data;
        })
        .catch(err => {
          console.log(err);
        });
      oldHouseApi
        .getRecommend("出售", "chengdu", 1, 4)
        .then(res => {
          this.recomProperty = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //自定义swiper需要的一些参数
    handlePrevSlide() {
      this.$refs.swiper.prevSlide();
      this.$refs.swiperFooter.prevSlide();
    },
    handleNextSlide() {
      this.$refs.swiper.nextSlide();
      this.$refs.swiperFooter.nextSlide();
    },
    hanleSlideTo(index) {
      this.$refs.swiper.slideTo(index);
      this.$refs.swiperFooter.slideTo(index);
    },
    handleSlideToIndex(index) {
      this.$refs.swiper.slideTo(index);
      this.imgActiveIndex = index;
    },
    //关注房源
    collectHouse(e) {
      let target = e.target;
      if (target.nodeName == "SPAN" || target.nodeName == "I") {
        target = e.target.parentNode;
      }
      e.target.blur();
    }
  }
};
</script>

<style lang="scss" scoped>
.favor-house {
  height: 4em;
}
.detail-container {
  justify-content: center;
  .detail-main {
    .collect-house-btn {
      height: 3em;
    }
    .house-regin {
      font-size: 0.8em;
      color: gray;
    }
    .el-row {
      margin-left: 20% !important;
      margin-right: 20% !important;
      width: 60%;
    }
    .Title-info {
      align-items: center;
      line-height: 3em;
      //   background-color: #f5f5f6;
    }
    .base-info {
      padding: 0 7em;
      //   justify-content: center;
      .base-info-one {
        display: flex;
        .left-price {
          font-size: 1.2em;
          color: red;
          .left-price-unit {
            font-size: 2em;
            font-weight: bolder;
          }
        }
        .left-singleprice {
          display: flex;
          margin-left: 1.5em;
          flex-direction: column;
          justify-content: flex-end;
          .left-singleprice-monthly {
            margin-top: 1em;
            font-size: 0.5em;
          }
        }
      }
      .base-info-two {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .base-info-item {
          display: flex;
          flex-direction: column;
          .base-info-main {
            font-weight: bold;
            font-size: 1.4em;
          }
          .base-info-sub {
            margin-top: 0.2em;
            font-size: 0.6em;
          }
        }
      }
    }
  }
}
.title {
  font-size: 2em;
}
.img-footer,
.prev-btn,
.next-btn {
  height: 5em;
  width: 8em;
  margin: 0.5em 0.5em 0 0;
  align-items: center;
  cursor: pointer;
}
.prev-btn {
  position: absolute;
  float: left;
  left: 0;
  display: flex;
  width: 2em;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  color: #fff;
  background-color: #333;
  margin: 0.5em 0 0 0;
  z-index: 199;
}

.next-btn {
  position: absolute;
  float: right;
  right: 0;
  display: flex;
  width: 2em;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  background-color: #333;
  margin: 0.5em 0 0 0;
  z-index: 199;
}
.cbtn-bg {
  background: #00ae66;
  border: none;
}
.img-active {
  border: 1px solid red;
}
</style>