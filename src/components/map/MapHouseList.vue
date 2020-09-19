<template>
  <div class="map-house-list">
    <div class="title">
      共{{ propertyNum }}个可选项
      <!-- 下拉更多 -->
      <div class="showMoreInfo" @click="showMore">
        <!-- 动态更新下拉箭头 -->
        <i v-if="showList==0" class="el-icon-arrow-down"></i>
        <i v-else class="el-icon-arrow-up show-hand"></i>
      </div>
    </div>
    <div v-if="showList==1">
      <!-- 基本信息 -->
      <div class="base-info">
        <span class="info-name">{{estates.estateName}}</span>
        <span class="info-subinfo" v-if="estateDetail">
          {{ estateDetail.estBuildingType == null ? "暂无数据" : estateDetail.estBuildingType}} | 
          {{ estateDetail.estTotalBuilding == null ? "暂无数据" : estateDetail.estTotalBuilding}} | 
          {{ estateDetail.estBuildingTime == null ? "暂无数据" : estateDetail.estBuildingTime}} | 
          {{ estateDetail.estTotalProperty == null ? "暂无数据" : estateDetail.estTotalProperty}}
        </span>
      </div>
      <!-- 详细信息 -->
      <div class="house-list">
        <!-- 自定义排序部分 -->
        <div class="list-picker"></div>
        <!-- 列表显示结果 -->
        <div class="list-info">
          <ul>
            <li v-for="(item, index) in Properties" :key="index" @click="toDetail(item.proId)">
              <img :src="item.proCoverUrl==null?defaultImg:item.proCoverUrl" />
              <div class="list-right-info">
                <span class="main-info">{{item.proTitle}} {{item.proArea}} {{item.proDistrict}}</span>
                <span
                  class="sub-info"
                >{{item.proCountF}}室{{item.proCountT}}厅{{item.proCountW}}卫/{{item.proSquare}}m²/{{item.proDirection}}/{{item.proEstateName}}</span>
                <span class="price">
                  <span class="total-price">{{item.proPrice}}{{item.proPriceType}}</span>
                  {{item.proUnitPrice}}{{item.proUnitPriceType}}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { getPropertiesByEstateId, getEstateDetail } from "@/api/map";
export default {
  data() {
    return {
      showList: 0,
      Properties: [],
      defaultImg: require("../../assets/img/noimg.jpg"),
      estateDetail: null,
      propertyNum: 0,
    };
  },
  props: ["estates", "eststeList"],
  watch: {
    estates(newValue, oldValue) {
      console.log(newValue);
      //暂时只有1有，因此不传具体的参数
      this.updateProperties(newValue.estateId);
      this.updateEstateDetail(newValue.estateId);
      // this.updateProperties(1);
    }
  },
  methods: {
    //上下箭头按钮，是否显示；
    showMore() {
      this.showList = this.showList ^ 1;
    },
    //外部组件调用，选择estate时就会自动显示；
    chooseShow() {
      this.showList = 1;
    },
    //检查到estates变化时更新对应的房源信息
    updateProperties(estateid) {
      getPropertiesByEstateId(estateid).then(res => {
        this.Properties = res.data;
        this.propertyNum = this.Properties.length;
      });
    },
    //检查到estates变化时更新对应的房源信息
    updateEstateDetail(estateId) {
     getEstateDetail(estateId).then(res => {
       if (res.code == 200) {
         this.estateDetail = res.data;
       }
      });
    },
    // 点击前往详情页面
    toDetail(proid) {
      console.log(proid + " toDetail");
      this.$router.push({
        path: "/old/detail",
        query: {
          proId: proid
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.map-house-list {
  z-index: 99;
  max-height: calc(100vh - 120px);
  width: 27em;
  padding: 0.4em;
  border-radius: 0.2em;
  background-color: #fff;
  -webkit-transition: top 0.5s;
}
.title {
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  line-height: 2em;
  font-size: 0.9em;
  border-bottom: 1px solid #f0f0f0;
}
.showMoreInfo {
  i {
    &:hover {
      cursor: pointer;
    }
  }
}

.base-info {
  height: 3em;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f0f0f0;
  padding: 0.7em 1em 0;
}
.house-list {
  height: 30em;
  .list-picker {
  }
  .list-info {
    overflow-y: auto;
    
    display: flex;
    flex-direction: column;
    padding: 0 0.7em;
    ul {
      padding: 0px;
    }
    li {
      display: flex;
      flex-direction: row;
      padding: 0.5em 0;
      list-style-type: none;
      height: 5em;
      background-color: #fff;
      border-bottom: 1px solid #f0f0f0;
      overflow: hidden;
      img {
        height: 5em;
        width: 7em;
      }
      .list-right-info {
        display: flex;
        flex-direction: column;
        padding-left: 0.9em;
        justify-content: space-between;
        .main-info {
          flex-wrap: nowrap;
          font-size: 1em;
          font-weight: bold;
        }
        .sub-info {
          font-size: 0.4em;
        }
        .price {
          font-size: 0.8em;
          color: gray;
        }
        .total-price {
          font-size: 1.2em;
          color: red;
        }
      }
    }
  }
}
.info-name {
  font-size: 1.1em;
  line-height: 0.9em;
}
.info-subinfo {
  color: gray;
  padding-top: 0.7em;
  font-size: 0.7em;
}
</style>