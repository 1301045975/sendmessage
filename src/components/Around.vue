<template>
  <div class="aroundContainer" :name="addrName">
    <div class="tabBox">
      <ul class="aroundType">
        <li
          :class="{'LOGCLICK': true, selectTag: 'traffic' === currentLabel}"
          data-log_evtid="10242"
          data-bl="traffic"
          @click="levelOneClick($event)"
          data-key="地铁站,公交站"
          data-index="subway,bus"
          data-length="10,10"
          id="traffic_panel"
        >交通</li>
        <li
          :class="{'LOGCLICK': true, selectTag: 'education' === currentLabel}"
          data-log_evtid="10242"
          data-bl="education"
          data-key="幼儿园,小学,中学,大学"
          @click="levelOneClick($event)"
          data-index="kindergarten,primary-school,middle-school,University"
          data-length="10,10,10,10"
        >教育</li>
        <li
          :class="{'LOGCLICK': true, selectTag: 'medical' === currentLabel}"
          data-log_evtid="10242"
          data-bl="medical"
          data-key="医院,药店"
          @click="levelOneClick($event)"
          data-index="hospital,pharmacy"
          data-length="10,10"
        >医疗</li>
        <li
          :class="{'LOGCLICK': true, selectTag: 'shopping' === currentLabel}"
          data-log_evtid="10242"
          data-bl="shopping"
          data-key="商场,超市,市场"
          @click="levelOneClick($event)"
          data-index="mall,supermarket,market"
          data-length="10,10,10"
        >购物</li>
        <li
          :class="{'LOGCLICK': true, selectTag: 'life' === currentLabel}"
          data-log_evtid="10242"
          data-bl="life"
          data-key="银行,ATM,餐厅,咖啡馆"
          @click="levelOneClick($event)"
          data-index="bank,atm,restaurant,coffee"
          data-length="10,10,10,10"
        >金融</li>
        <li
          :class="{'LOGCLICK': true, selectTag: 'entertainment' === currentLabel}"
          data-log_evtid="10242"
          data-bl="entertainment"
          @click="levelOneClick($event)"
          data-key="公园,电影院,健身房,体育馆"
          data-index="park,cinema,gym,sport"
          data-length="10,10,10,10"
        >休闲</li>
      </ul>
      <div :class="{'itemTagBox': true, levelTwoStyle: 'traffic' !== currentLabel}" id="traffic">
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'subway' === currentTwoLabel}"
          data-bl="subway"
          data-log_evtid="10242"
          data-index="subway"
          data-length="10"
          @click="twoLevelClick($event)"
        >地铁站</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'bus' === currentTwoLabel}"
          data-bl="bus"
          data-log_evtid="10242"
          data-index="bus"
          data-length="10"
          @click="twoLevelClick($event)"
        >公交站</div>
      </div>
      <div
        :class="{'itemTagBox': true, levelTwoStyle: 'education' !== currentLabel}"
        id="education"
      >
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'kindergarten' === currentTwoLabel}"
          data-bl="kindergarten"
          data-log_evtid="10242"
          data-index="kindergarten"
          data-length="10"
          @click="twoLevelClick($event)"
        >幼儿园</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'primary-school' === currentTwoLabel}"
          data-bl="primary-school"
          data-log_evtid="10242"
          data-index="primary-school"
          data-length="10"
          @click="twoLevelClick($event)"
        >小学</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'middle-school' === currentTwoLabel}"
          data-bl="middle-school"
          data-log_evtid="10242"
          data-index="middle-school"
          data-length="10"
          @click="twoLevelClick($event)"
        >中学</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'University' === currentTwoLabel}"
          data-bl="University"
          data-log_evtid="10242"
          data-index="University"
          data-length="10"
          @click="twoLevelClick($event)"
        >大学</div>
      </div>
      <div :class="{'itemTagBox': true, levelTwoStyle: 'medical' !== currentLabel}" id="medical">
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'hospital' === currentTwoLabel}"
          data-bl="hospital"
          data-log_evtid="10242"
          data-index="hospital"
          data-length="10"
          @click="twoLevelClick($event)"
        >医院</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'pharmacy' === currentTwoLabel}"
          data-bl="pharmacy"
          data-log_evtid="10242"
          data-index="pharmacy"
          data-length="10"
          @click="twoLevelClick($event)"
        >药店</div>
      </div>
      <div :class="{'itemTagBox': true, levelTwoStyle: 'shopping' !== currentLabel}" id="shopping">
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'mall' === currentTwoLabel}"
          data-bl="mall"
          data-log_evtid="10242"
          data-index="mall"
          data-length="10"
          @click="twoLevelClick($event)"
        >商场</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'supermarket' === currentTwoLabel}"
          data-bl="supermarket"
          data-log_evtid="10242"
          data-index="supermarket"
          data-length="10"
          @click="twoLevelClick($event)"
        >超市</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'market' === currentTwoLabel}"
          data-bl="market"
          data-log_evtid="10242"
          data-index="market"
          data-length="10"
          @click="twoLevelClick($event)"
        >市场</div>
      </div>
      <div :class="{'itemTagBox': true, levelTwoStyle: 'life' !== currentLabel}" id="life">
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'bank' === currentTwoLabel}"
          data-bl="bank"
          data-log_evtid="10242"
          data-index="bank"
          data-length="10"
          @click="twoLevelClick($event)"
        >银行</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'atm' === currentTwoLabel}"
          data-bl="atm"
          data-log_evtid="10242"
          data-index="atm"
          data-length="10"
          @click="twoLevelClick($event)"
        >ATM</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'restaurant' === currentTwoLabel}"
          data-bl="restaurant"
          data-log_evtid="10242"
          data-index="restaurant"
          data-length="10"
          @click="twoLevelClick($event)"
        >餐厅</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'coffee' === currentTwoLabel}"
          data-bl="coffee"
          data-log_evtid="10242"
          data-index="coffee"
          data-length="10"
          @click="twoLevelClick($event)"
        >咖啡馆</div>
      </div>
      <div
        :class="{'itemTagBox': true, levelTwoStyle: 'entertainment' !== currentLabel}"
        id="entertainment"
      >
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'cinema' === currentTwoLabel}"
          data-bl="cinema"
          data-log_evtid="10242"
          data-index="cinema"
          data-length="10"
          @click="twoLevelClick($event)"
        >电影院</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'gym' === currentTwoLabel}"
          data-bl="gym"
          data-log_evtid="10242"
          data-index="gym"
          data-length="10"
          @click="twoLevelClick($event)"
        >健身房</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'sport' === currentTwoLabel}"
          data-bl="sport"
          data-log_evtid="10242"
          data-index="sport"
          data-length="10"
          @click="twoLevelClick($event)"
        >体育馆</div>
        <div
          :class="{'tagStyle': true, 'LOGCLICK': true, select: 'park' === currentTwoLabel}"
          data-bl="park"
          data-log_evtid="10242"
          data-index="park"
          data-length="10"
          @click="twoLevelClick($event)"
        >公园</div>
      </div>

      <div class="aroundList" id="mapListContainer">
        <ul class="itemBox">
          <li v-for="(item, i) in serviceArray" :key="i" @click="reLoadCenter(i)">
            <div class="contentBox">
              <div class="itemContent">
                <span class="icon-park"></span>
                <span class="itemText itemTitle">{{item.name}}</span>
                <span class="icon-distance"></span>
                <span class="itemText itemdistance">{{item.detail_info.distance}}米</span>
              </div>
              <div class="itemInfo">{{item.address}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="loading" style="display: none;">
        <img
          src="https://s1.ljcdn.com/feroot/pc/asset/ershoufang/sellDetail/img/loading.gif?_v=20180126155619"
          class="loadingImg"
        />
        <span class="loadingText">努力加载中...</span>
      </div>
    </div>
    <!--地图-->
    <baidu-map
      id="bm-view"
      class="bm-view"
      :center="center"
      :zoom="zoom"
      ak="0dGpK7C09lZMjwx6QVhU6hzTRZBkGVAI"
      :scroll-wheel-zoom="true"
      @ready="handlerMapReady"
    >
      <!-- 导航覆盖物 -->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <!-- 比例尺覆盖物 -->
      <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
      <!-- 自定义中心点信息覆盖物 -->
      <bm-overlay class="aroundOverlay" ref="customOverlay" pane="labelPane" @draw="draw">
        <div
          id="content"
          class="content"
          :style="labelStyle"
          @mouseover="mouseUpLabel"
          @mouseout="mouseOutLabel"
        >{{addrName}}</div>
        <div class="icon" :style="{backgroundPositionY: iconPositionY}"></div>
      </bm-overlay>

      <!-- 周边点标记覆盖物 -->
      <div>
        <bm-marker
          v-for="(item, i) in pointArray.point"
          :key="i"
          :position="item"
          :icon="{url: theMarkerUrl, size: {width: 24, height: 32}}"
        ></bm-marker>
      </div>
    </baidu-map>
    <!--地图end-->
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmNavigation from "vue-baidu-map/components/controls/Navigation";
import BmScale from "vue-baidu-map/components/controls/Scale";
import BmMarker from "vue-baidu-map/components/overlays/Marker";
import BmOverlay from "vue-baidu-map/components/overlays/Overlay";
import BmInfoWindow from "vue-baidu-map/components/overlays/InfoWindow";
import BmLabel from "vue-baidu-map/components/overlays/Label";

export default {
  name: "Around",
  components: {
    BaiduMap,
    BmNavigation,
    BmScale,
    BmMarker,
    BmOverlay,
    BmInfoWindow,
    BmLabel
  },
  props: ["lat", "lng", "areaName"],
  created() {},
  data() {
    return {
      Bmap: {},
      map: {},
      width: 0,
      height: 0,
      addrName: "交大智能八期",
      center: { lng: 116.4133836971231, lat: 39.910924547299568 },
      zoom: 16,
      currentLabel: "traffic",
      currentTwoLabel: "subway",
      currentText: "交通",
      currentTwoText: "地铁站",
      serviceArray: [],
      theMarkerUrl: "", //icon的require形态
      pointArray: {
        type: "traffic",
        point: []
      },
      labelStyle: {
        background: "#EE5D5B",
        border: "1px solid rgb(188, 59, 58)",
        color: "white",
        padding: "2px",
        lineHeight: "28px",
        whiteSpace: "nowrap",
        fontSize: "16px",
        userSelect: "none",
        position: "relative",
        left: "-40px"
      },
      markerSize: {
        width: 11,
        height: 9
      },
      iconPositionY: "0px"
    };
  },
  mounted() {},
  computed: {
    contentLeftOffset() {
      // console.log(document.getElementsByClassName("content").content.offsetWidth)
      // return -document.getElementsByClassName("content").content.offsetWidth/2 + 11 + 'px';
      return -40 + "px";
    }
  },
  methods: {
    //地图初始化方法，地图组件渲染完毕时触发
    handlerMapReady({ BMap, map }) {
      this.BMap = BMap;
      this.map = map;

      this.center.lng = this.lng;
      this.center.lat = this.lat;
      this.addrName = this.areaName;
      this.addPoint("traffic");
    },
    //添加周边点
    addPoint(pointType) {
      this.$jsonp(
        "http://api.map.baidu.com/place/v2/search?query=" +
          this.currentText +
          this.currentTwoText +
          "&location=" +
          this.center.lat +
          "," +
          this.center.lng +
          "&radius=2000&scope=2&filter=sort_name:distance|sort_rule:1&output=json&ak=9pwN0orTUYNywM8HBvFC9qSgGpIGHtKO"
      )
        .then(res => {
          this.serviceArray = res.results;
          this.pointArray.point = [];
          for (let item in this.serviceArray) {
            let point = {};
            // console.log(this.serviceArray[item].location);
            point.lat = this.serviceArray[item].location.lat;
            point.lng = this.serviceArray[item].location.lng;
            this.pointArray.point.push(point);
          }
          this.pointArray.type = pointType;
          let MarkUrl = pointType + ".png";
          this.theMarkerUrl = require("../assets/aroundImg/" + MarkUrl);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //一级选项点击触发
    levelOneClick(e) {
      const point = new this.BMap.Point(this.center.lng, this.center.lat);
      this.map.centerAndZoom(point, 16);
      this.currentLabel = e.currentTarget.getAttributeNode("data-bl").value;
      this.currentText = e.currentTarget.innerText;
      this.currentTwoLabel = document
        .getElementById(this.currentLabel)
        .firstElementChild.getAttributeNode("data-bl").value;
      this.currentTwoText = document.getElementById(
        this.currentLabel
      ).firstElementChild.innerText;
      this.addPoint(e.currentTarget.getAttributeNode("data-bl").value);
    },
    //二级选项点击触发
    twoLevelClick(e) {
      const point = new this.BMap.Point(this.center.lng, this.center.lat);
      this.map.centerAndZoom(point, 16);
      this.currentTwoLabel = e.currentTarget.getAttributeNode("data-bl").value;
      this.currentTwoText = e.currentTarget.innerText;
      this.addPoint(this.pointArray.type);
    },
    mouseUpLabel() {
      this.labelStyle.background = "#6BADCA";
      this.labelStyle.borderColor = "#0000ff";
      //   this.addrName = "交大智能八期 416套";
      this.iconPositionY = "-20px";
    },
    mouseOutLabel() {
      this.labelStyle.background = "#EE5D5B";
      this.labelStyle.borderColor = "rgb(188, 59, 58)";
      //   this.addrName = "交大智能八期";
      this.iconPositionY = "0px";
    },
    //绘制自定义覆盖物，根据坐标设置放置位置
    draw({ el, BMap, map }) {
      const { lng, lat } = this.center;
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat));
      el.style.left = pixel.x + "px";
      el.style.top = pixel.y - 35 + "px";
    },
    //选择物品重新定位中心
    reLoadCenter(i) {
      let location = this.serviceArray[i].location;
      this.center.lng = location.lng;
      this.center.lat = location.lat;
      this.addrName = this.serviceArray[i].name;
    }
  }
};
</script>

<style scoped>
.aroundOverlay {
  position: absolute;
}

.icon {
  background: url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png)
    no-repeat;
  width: 11px;
  height: 10px;
  overflow: hidden;
}

.bm-view {
  height: 500px;
  width: 1150px;
}

.aroundContainer {
  width: 1150px;
  margin: 0 auto;
  height: 510px;
  /*margin-top: 18px;*/
  position: relative;
  overflow: hidden;
}

.tabBox {
  z-index: 999;
  position: absolute;
  top: 24px;
  bottom: 24px;
  right: 18px;
  width: 385px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.tabBox .aroundType {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 40px !important;
  font-size: 0;
  background-color: #fff;
  border-radius: 2px;
}

.tabBox .aroundType li.selectTag {
  position: relative;
  background: #fff;
  font-weight: 900;
  color: #2a86ef;
  box-shadow: 1px 0 0 rgba(0, 0, 0, 0.05);
}

.tabBox .aroundType li {
  cursor: pointer;
  display: inline-block;
  width: 16.66%;
  line-height: 40px;
  text-align: center;
  background: #f1f1f1;
  color: #384043;
  font-size: 14px;
}

.tabBox .itemTagBox {
  box-sizing: border-box;
  margin-left: 0px;
  padding-top: 0px;
}

.tabBox .itemTagBox .tagStyle.select {
  box-sizing: border-box;
  border-bottom: 1px solid #2a86ef;
  color: #2a86ef;
  font-size: 16px;
}

.tabBox .itemTagBox .tagStyle {
  box-sizing: border-box;

  color: black;
  font-size: 16px;
}

.tabBox .itemTagBox .tagStyle {
  display: inline-block;
  height: 43px;
  line-height: 43px;
  margin-right: 22px;
  cursor: pointer;
  font-size: 16px;
}

.tagStyle.LOGCLICK.select {
  box-sizing: border-box;
  margin-left: 17px;
  padding-top: 10px;
  border-bottom: 1px solid #eeeeee;
}

.tagStyle.LOGCLICK {
  box-sizing: border-box;
  margin-left: 17px;
  padding-top: 10px;
}

.tabBox .aroundType li.selectTag:before {
  content: "";
  width: 100%;
  height: 2px;
  background: #2a86ef;
  position: absolute;
  top: 0;
  left: 0;
}

.tabBox .aroundList {
  padding-top: 10px;
  height: 363px;
  overflow-y: auto;
}

.tabBox .itemBox {
  list-style: none;
  margin: 0;
  padding: 0;
}

.tabBox .itemBox li {
  padding: 10px 0;
  cursor: pointer;
}

.contentBox {
  border-left: 2px solid #fff;
  padding: 0 23px;
}

.contentBox .itemContent,
.makerDetailStyle .itemContent {
  color: #394043;
  font-size: 14px;
  overflow: hidden;
}

.contentBox .itemContent span,
.makerDetailStyle .itemContent span {
  float: left;
  font-weight: bold;
}

.contentBox .itemContent .itemTitle,
.makerDetailStyle .itemContent .itemTitle {
  max-width: 49%;
  margin-right: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.contentBox .itemContent span,
.makerDetailStyle .itemContent span {
  float: left;
  font-weight: bold;
}

[class^="icon-"],
[class*=" icon-"] {
  font-family: "map-font" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.contentBox .itemContent .itemdistance,
.makerDetailStyle .itemContent .itemdistance {
  width: 20%;
  float: right;
}

.contentBox .itemInfo,
.makerDetailStyle .itemInfo {
  color: #9c9fa1;
  font-size: 14px;
  padding: 8px 19px 0 0px;
  text-align: justify;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
  white-space: normal;
}

.levelTwoStyle {
  display: none;
}
</style>