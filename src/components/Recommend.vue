<template>
  <div class="recommendContainer">
    <!-- <el-row style="width: 100%;align-items: center;padding: 0 0 40px 40px">
      <el-col v-for="(item, i) in recomProperty" :key="i" :span="spanNumber">
        <div class="el-image" style="position: relative">
          <img class="img-main" :src="imgUrl2.src" />
          <span
            style="height: 40px;width: 60px;color: white;background-color: #333333;position: absolute; left: 0px;top: 0px;text-align: center;line-height: 40px"
          >150万</span>
        </div>
        <h3>{{item.proEstateName}}</h3>
        <el-row>
          <span style="color: red">{{item.proSquare}}</span>&nbsp;
          <span>2室一厅</span>&nbsp;
          <span>金科北路</span>
        </el-row>
      </el-col>
    </el-row>-->
    <ul class="info-title">
      <li
        class="info-item"
        v-for="(item, index) in recomProperty"
        :key="index"
        @click="toDetail(recomProperty[index].proId)"
      >
        <div class="base-item">
          <img class="item-img" :src="item.proCoverUrl?item.proCoverUrl:noImgUrl" />
          <div class="item-price">
            <span class="price" v-if="houseType=='old'">
              <span class="num">{{item.proPrice}}</span>
              {{item.proPriceType}}
            </span>
            <span class="price" v-else>
              <span class="num">{{item.proRentPrice}}</span>
              {{item.proRentPriceType}}
            </span>
            <span class="house">{{item.proCountF}}室{{item.proCountT}}厅</span>
            <span class="house">{{item.proSquare}}m²</span>
          </div>
          <div class="item-area">
            <span>{{item.proEstateName}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";
import Around from "@/components/Around";

import {
  Swiper,
  Slide,
  SwiperFooter,
  SwiperFooterSlide
} from "@/components/common/swiper";

export default {
  name: "Recommend",
  props: {
    recomProperty: Array,
    houseType: String
  },
  components: {
    MyHeader,
    MyFooter,
    Swiper,
    Slide,
    SwiperFooter,
    SwiperFooterSlide,
    Around
  },
  data() {
    return {
      noImgUrl: { src: require("../assets/img/noimg.jpg") }
    };
  },

  methods: {
    toDetail(proid) {
      this.$router.push({
        path: "/" + this.houseType + "/detail",
        query: {
          proId: proid
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.info-title {
  padding: 0px;
}
.info-item {
  list-style-type: none;
  float: left;
  width: 24%;
}
.base-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.item-img {
  width: 222px;
  height: 158px;
}
.item-price {
  margin:5px 0;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  align-items: flex-end;
  .price {
    color: red;
  }
  .num{
    font-size: 20px;
  }
  .house{
    color: #999;
    margin-left: 10px;
  }
  .item-area{
    font-size: 22px;
    margin-top: 5px;
  }
}
</style>