<template>
  <div>
    <my-header :detailActive="1" ref="myheader"></my-header>
    <el-container class="detail-container">
      <div class="detail-main">
        <!-- 标题信息 -->
        <el-row class="top-title">
          <div class="top-title-info">
            <el-col :span="16">
              <h1
                class="Title-info"
              >{{property.proArea}}{{property.proDistrict}}{{property.proEstateName}} {{property.proTitle}}</h1>
            </el-col>
            <el-col :span="8" class="top-button">
              <el-button
                v-if="isCollect == 0"
                class="collect-house-btn"
                @click="collectHouse"
                plain
              >关注房源</el-button>
              <el-button v-else class="collect-house-btn" @click="cancelCollect" plain>已关注</el-button>
            </el-col>
          </div>
        </el-row>
        <!-- 链接信息 -->
        <el-row>
          <el-col :span="16" class="house-regin">军军房产网 > 成都二手房 > 郫都区二手房 > 犀浦二手房 > 当前房源</el-col>
          <!-- <el-col :span="8" class="house-regin">房源发布机构 加入对比 分享此房源</el-col> -->
        </el-row>
        <el-divider></el-divider>
        <!-- 图片及基本信息 -->
        <el-row style="margin-top: 20px;">
          <!-- 左边轮播图 -->
          <el-col :span="12">
            <swiper ref="swiper" :autoPlay="false" :showIndicator="true">
              <slide v-for="(imgUrl, index) in property.proPhotoUrl" :key="'imgUrls' + index">
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
                v-for="(imgUrl, index) in property.proPhotoUrl"
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
            <div class="left-base-info">
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
                  <span class="base-info-sub">{{property.proDecoration}}</span>
                </div>
                <div class="base-info-item">
                  <span class="base-info-main">{{property.proSquare}} 平米</span>
                  <span
                    class="base-info-sub"
                  >{{property.proDate ? property.proDate.substring(0, 4):""}}年建楼</span>
                </div>
              </div>
              <!-- 分割线 -->
              <el-divider></el-divider>
              <!-- 循环处理区域信息 -->
              <div class="base-info-san">
                <span
                  v-for="(item, index) in topInfoList"
                  :key="index + 'topInfoList'"
                  class="left-title"
                >
                  <span class="right-info">{{topInfoList[index]}}</span>
                  {{topInfoListRight[index]}}
                </span>
              </div>
              <el-divider></el-divider>
            </div>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <!--房屋基本信息-->
        <el-row class="main-item">
          <el-col :span="12">
            <h1>房源信息</h1>
            <el-divider></el-divider>

            <el-row v-for="(item, index) in houseBaseInfo" :key="index">
              <div class="house-base-info">
                <div class="house-base-title">{{houseBaseTitle[index]}}</div>
                <div class="house-base-list">
                  <ul>
                    <li v-for="(item2, index2) in item" :key="index2" class="base-info-item">
                      <span>
                        {{item2.title}}
                        <span style="color:black; padding-left:5px">{{item2.info}}</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <el-divider></el-divider>
            </el-row>
          </el-col>
          <el-col :span="8" class="contact-employee">
            <h1>联系经纪人</h1>
            <el-divider></el-divider>
            <div class="contact-item">
              <img
                class="contact-img"
                :src="property.proEmployee1Img?  property.proEmployee1Img :defaultImg"
              />
              <div class="contact-info">
                <span class="contact-name">姓名：{{property.proEmployee1Name}}</span>
                <span class="contact-tel">
                  电话：
                  <span>{{property.proEmployee1Phone ? property.proEmployee1Phone : 12345678900}}</span>j
                </span>
              </div>
            </div>
            <el-divider></el-divider>
          </el-col>
        </el-row>

        <el-row class="main-item main-item-content">
          <span>
            <h2>房源特色</h2>
          </span>
          <el-divider></el-divider>
          <span>暂无数据</span>
          <el-divider></el-divider>
        </el-row>
        <el-row class="main-item main-item-content">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <h2>房源评论</h2>
            <span style="color:#adafaf;">总共{{commentsList.length}}条此房源评价记录</span>
          </div>
          <el-divider></el-divider>
          <div
            v-for="(item, index) in commentsList"
            :key="index+'commentsList'"
            class="comment-box"
          >
            <div class="comment-left">
              <img class="comment-img" :src="item.photoUrl" />
            </div>
            <div class="comment-right">
              <div class="comment-title">
                <span>
                  {{item.commentPerson}}
                  <span style="margin-left:70px">{{item.commentPersonTel}}</span>
                </span>
              </div>
              <div class="comment-content">
                <span>{{item.content}}</span>
              </div>
            </div>
          </div>
          <el-divider></el-divider>
        </el-row>
        <el-row class="main-item main-item-content">
          <h2>房源照片</h2>
          <el-divider></el-divider>
          <span>查看更多照片</span>
          <el-divider></el-divider>
        </el-row>
        <el-divider></el-divider>
        <el-row class="main-item">
          <h2>房产计算器</h2>
          <calculator_tool></calculator_tool>
        </el-row>
        <el-divider></el-divider>

        <el-row class="main-item">
          <h2>周边配套</h2>
          <around
            v-if="property.proLat"
            class="around"
            :lat="property.proLat"
            :lng="property.proLng"
            :areaName="property.proEstateName"
          />
        </el-row>
        <el-divider></el-divider>
        <el-row class="main-item">
          <h2>推荐二手房</h2>
          <Recommend :recomProperty="recomProperty" :houseType="'old'" />
        </el-row>
        <el-divider></el-divider>
      </div>
    </el-container>
    <my-footer></my-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import houseApi from "@/api/house";
import oldHouseApi from "@/api/oldhouse";
import {
  addFavProperty,
  isUserFavProperty,
  deleteFavPropertyV2
} from "@/api/me";
import { getToken } from "@/utils/auth";
import store from "@/store";
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
      isCollect: 0, //是否收藏该房源
      isLogin: 0, //是否登录
      imgActiveIndex: 0,
      autoPlay: true,
      imgUrls: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599491744156&di=48b8a3160a19136d004770afd8c8a4c2&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F2i%2Fi8%2FQJ6373288283.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599491744156&di=3044432e2317bc5b949e276b61517a33&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F39%2F50%2F11%2Fpic_lib%2Fs960x639%2FMyHome_1003s960x639.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=175887210,2607723101&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599491811325&di=9053e36f9ab003407ee94f0ae5a5ae92&imgtype=0&src=http%3A%2F%2Ftiebapic.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D9b6cbc515d90f60304b09c4f0913b370%2Fdfbd3ad8bc3eb135221487dbb11ea8d3fc1f4431.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1189167979,2795395867&fm=26&gp=0.jpg"
      ],
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      activeIndex2: "1",
      defaultImg: require("../../assets/img/noimg.jpg"),
      property: {
        proTitle: ""
      },
      activeName: "first",
      loading: true,
      topInfoList: [
        "小区名称",
        "所在区域",
        "看房时间",
        "房源编号",
        "信息真实性负责人"
      ],
      topInfoListRight: [],
      //房源信息-基本信息-交易属性
      houseBaseTitle: ["基本信息", "交易属性"],
      houseBaseInfo: [
        [
          { title: "房屋户型:", info: "" },
          { title: "所在楼层:", info: "" },
          { title: "建筑面积:", info: "" },
          { title: "户型结构:", info: "" },
          { title: "套内面积:", info: "" },
          { title: "建筑类型:", info: "" },
          { title: "房屋朝向:", info: "" },
          { title: "装修情况:", info: "" },
          { title: "梯户比例:", info: "" },
          { title: "配备电梯:", info: "" },
          { title: "产权年限:", info: "" }
        ],
        [
          { title: "委托时间:", info: "" },
          { title: "刷新时间:", info: "" },
          { title: "房屋用途:", info: "" },
          { title: "产权日期:", info: "" },
          { title: "产权所属:", info: "" },
          { title: "抵押状态:", info: "" }
        ]
      ],
      commentsList: []
    };
  },
  computed: {
    ...mapGetters(["name", "imgurl", "mobile", "roles"])
  },
  created() {
    this.init();
  },

  watch: {
    $route(to, from) {
      this.$router.go(0);
      window.scrollTo(0, 0);
    },
    // mobile发生变化是，此函数会执行
    mobile(newValue, oldValue) {
      console.log("mobile change");
      if (typeof newValue == "undefined" || newValue == "") {
        // console.log("null");
      } else {
        this.checkLogin();
      }
    },
    property(newValue, oldValue){
      this.checkLogin();
    }
  },

  mounted() {
    // 切换页面时滚动条自动滚动到顶部
    window.scrollTo(0, 0);
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
          this.getTopInfoList();
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
      //暂时只有45有数据
      // getCommentsByPropertyId(this.proId, "chengdu").then(res => {
      oldHouseApi.getCommentsByPropertyId(45, "chengdu").then(res => {
        if (res.code == 200) {
          this.commentsList = res.data;
          this.formatComment(); //  格式化content内容
        }
      });
    },
    //基础信息部分获取区域等信息
    getTopInfoList() {
      let tempList = [];
      tempList[0] = this.property.proEstateName; //小区名称
      tempList[1] = this.property.proArea + " " + this.property.proDistrict; //  所在区域
      tempList[2] = "提前预约随时可看"; //  看房时间
      tempList[3] = this.property.proNo; //  房源编号
      tempList[4] = "军军房业" + " - "; //信息真实性负责人
      tempList[4] += this.property.proEmployee1Name; //      信息真实性负责人
      this.topInfoListRight = tempList;
      //房源信息-基本信息
      this.houseBaseInfo[0][0].info += this.property.proCountF + "室"; //房屋户型
      this.houseBaseInfo[0][0].info += this.property.proCountT + "厅"; //房屋户型
      this.houseBaseInfo[0][0].info += this.property.proCountW + "卫"; //房屋户型
      this.houseBaseInfo[0][0].info += this.property.proCountY + "阳台"; //房屋户型
      this.houseBaseInfo[0][1].info = this.property.proFloor + "共"; //所在楼层
      this.houseBaseInfo[0][1].info += this.property.proFloorAll + "层"; //所在楼层
      this.houseBaseInfo[0][2].info = this.property.proSquare + " m²"; //建筑面积
      this.houseBaseInfo[0][3].info = this.property.proType; //户型结构
      this.houseBaseInfo[0][4].info = "暂无数据"; //套内面积
      this.houseBaseInfo[0][5].info = this.property.proType; //建筑类型
      this.houseBaseInfo[0][6].info = this.property.proDirection; //房屋朝向
      this.houseBaseInfo[0][7].info = this.property.proDecoration; //装修情况
      this.houseBaseInfo[0][8].info = this.property.proLadderRatio; //梯户比例
      this.houseBaseInfo[0][9].info = this.property.proElevator; //配备电梯
      this.houseBaseInfo[0][10].info = this.property.proRightYears; //产权年限
      //房源信息-交易属性
      this.houseBaseInfo[1][0].info = this.property.proTrustDate.substring(
        0,
        10
      ); //委托时间
      this.houseBaseInfo[1][1].info = this.property.proModDate.substring(0, 10); //刷新时间
      this.houseBaseInfo[1][2].info = this.property.proUsage; //房屋用途
      this.houseBaseInfo[1][3].info = this.property.proDate.substring(0, 10); //产权日期
      this.houseBaseInfo[1][4].info = this.property.proOwnership; //产权所属
      this.houseBaseInfo[1][5].info = this.property.proMortgate; //抵押状态
      //如果没有轮播图，就用封面图;
      if (this.property.proPhotoUrl == null) {
        // console.log("没有图片")
        this.property.proPhotoUrl = [];
        this.property.proPhotoUrl.push(this.property.proCoverUrl);
      }
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
    //点击关注房源
    collectHouse(e) {
      // this.checkLogin();
      if (this.isLogin == 0) {
        this.$refs.myheader.toggleLoginDialog();
      } else {
        this.toCollect();
      }
    },
    //检查登录
    checkLogin() {
      if (getToken()) {
        this.isLogin = 1;
        let formData = {
          telephone: this.mobile,
          propId: this.property.proId
        };
        console.log(formData);
        if (this.mobile && typeof(this.property.proId) != "undefined" ) {
          isUserFavProperty(formData).then(res => {
            if (res.code == 200) {
              this.isCollect = 1;
            }
          });
        }
      } else {
        console.log("eslse");
      }
    },
    //开始收藏
    toCollect() {
      let formData = {
        propertyId: this.property.proId,
        telephone: this.mobile,
        cityCode: 510100,
        type: 1
      };
      addFavProperty(formData)
        .then(res => {
          console.log(res);
          if (res.code == 200) {
            console.log("yes");
            this.isCollect = 1;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //取消收藏
    cancelCollect() {
      let formData = {
        propertyId: this.property.proId,
        telephone: this.mobile,
        cityCode: 510100,
        type: 1
      };
      deleteFavPropertyV2(formData).then(res => {
        if (res.code == 200) {
          console.log("取消成功");
          this.isCollect = 0;
        }
      });
    },
    //格式化comment的content内容
    formatComment() {}
  }
};
</script>

<style lang="scss" scoped>
.detail-container {
  justify-content: center;
  .detail-main {
    .main-item-content {
      width: 710px !important;
    }
    .main-item {
      .el-row {
        margin: 0 !important;
        width: 100% !important;
      }
    }
    .house-regin {
      font-size: 12px;
      color: gray;
    }
    .el-row {
      width: 1150px;
    }
    .top-title {
      position: relative;
      padding: 60px 0 40px;
      text-align: center;
      .top-title-info {
        vertical-align: middle;
        display: inline-block;
        width: 1150px;
        justify-content: center;
        .Title-info {
          display: table-cell;
          align-items: center;
          line-height: 29px;
          text-overflow: ellipsis;
          font-size: 26px;
          //   background-color: #f5f5f6;
        }
        .top-button {
          display: flex;
          justify-content: flex-end;
        }
        .collect-house-btn {
          width: 110px;
          height: 45px;
          display: block;
          border-radius: 3px;
          font-size: 14px;
        }
      }
    }

    .left-base-info {
      padding: 0 7em;
      //   justify-content: center;
      .base-info-one {
        display: flex;
        margin: 2.5em 0;
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
        margin: 2.5em 0;
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
      .base-info-san {
        display: flex;
        flex-direction: column;
        margin: 1em 0;
        .left-title {
          padding: 0.5em 0;
          font-size: 0.9em;
          .right-info {
            margin-right: 2em;
            font-size: 0.9em;
            color: gray;
            font-weight: 600;
          }
        }
      }
    }

    .house-base-info {
      display: flex;
      font-size: 0.97em;
      color: #999999;
      .house-base-title {
        margin: 0;
        width: 20%;
      }
      .house-base-list {
        width: 76%;
        // padding-bottom: 2em;
        border-bottom: 1rpx solid gray;
        ul {
          padding: 0;
          margin-top: -0.5em;
        }
        li {
          float: left;
          width: 50%;
          padding: 0.5em 0;
          list-style-type: none;
        }
      }
    }
    .contact-employee {
      margin-left: 6em;
      .contact-item {
        display: flex;
        .contact-img {
          width: 5em;
          height: 6em;
        }
        .contact-info {
          display: flex;
          padding-left: 2em;
          flex-direction: column;
          justify-content: center;
          .contact-name {
            font-size: 1.1em;
            font-weight: bold;
          }
          .contact-tel {
            margin-top: 0.5em;
            font-size: 1.3em;
            color: red;
            span {
              font-weight: bold;
            }
          }
        }
      }
    }
    .comment-box {
      box-shadow: 0 0 6px 0 rgba(13, 4, 9, 0.2);
      margin: 10px 5px;
      // margin-top: 10px;
      padding: 15px;
      height: 120px;
      display: flex;
      font-size: 14px;
      .comment-left {
        display: flex;
        align-items: center;
        .comment-img {
          height: 70px;
          width: 70px;
          border-radius: 20px;
        }
      }
      .comment-right {
        height: 100%;
        display: flex;
        flex-direction: column;
        // padding:0 30px ;
        margin: 10px 40px;
        .comment-title {
          font-size: 18px;
          font-weight: bold;
          // margin-top: 15px;
        }
        .comment-content {
          margin: 20px 0;
          // color: red;
          line-height: 20px;
        }
      }
    }
  }
}
.title {
  font-size: 2em;
}
.img-main {
  width: 700px;
  height: 400px;
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