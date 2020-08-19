<template>
  <div class="map-wrapper">
    <baidu-map
      id="bm-view"
      class="bm-view"
      ak="0dGpK7C09lZMjwx6QVhU6hzTRZBkGVAI"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @ready="handlerMapReady"
      @zoomend="syncCenterAndZoom"
    >
      <bm-boundary
        v-if="showBoundary"
        :name="areaBoundry"
        :strokeWeight="2"
        strokeColor="blue"
        fillColor="skyblue"
        :fillOpacity="0.4"
      ></bm-boundary>
      <div v-if="showDistrict && districts">
        <area-overlay
          v-for="(item, index) in districts"
          :key="index"
          :position="{ lng: item.lng, lat: item.lat }"
          :text="item"
          :class="areaIndex === index ? 'active' : ''"
          @mouseover.native="selectArea(item, index)"
          @mouseleave.native="cancelArea(item, index)"
          @click.native="clickArea(item, index)"
        ></area-overlay>
      </div>
      <div v-if="showZone && zones">
        <area-overlay
          v-for="(item, index) in zones"
          :key="index"
          :position="{ lng: item.lng, lat: item.lat }"
          :text="item"
          :class="areaIndex === index ? 'active' : ''"
          @mouseover.native="selectArea(item, index)"
          @mouseleave.native="cancelArea(item, index)"
          @click.native="clickArea(item, index)"
        ></area-overlay>
      </div>
      <div v-if="showEstate">
        <estate-overlay
          v-for="(item, index) in estateGeoPoints"
          :key="index"
          :position="{ lng: item.lng, lat: item.lat }"
          :text="item"
          :class="areaIndex === index ? 'active' : ''"
          @mouseover.native="selectArea(item, index)"
          @mouseleave.native="cancelArea(item, index)"
        ></estate-overlay>
      </div>
      <div id="map-header-wrapper">
        <map-header></map-header>
      </div>
      <div id="map-filter-wrapper">
        <map-filter></map-filter>
      </div>
    </baidu-map>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import connect from "../../connect.js";
import ZoneOverlay from "@/components/map/ZoneOverlay.vue";
import AreaOverlay from "@/components/map/AreaOverlay.vue";
import EstateOverlay from "@/components/map/EstateOverlay.vue";
import BmBoundary from "vue-baidu-map/components/others/Boundary";
import MapHeader from "@/components/map/MapHeader.vue";
import MapFilter from "@/components//map/MapFilter.vue";
import { getCity, getDistricts, getZones } from "@/api/map";

export default {
  name: "Map",
  components: {
    BaiduMap,
    ZoneOverlay,
    BmBoundary,
    EstateOverlay,
    MapHeader,
    MapFilter,
    AreaOverlay
  },
  data() {
    return {
      center: { lng: 116.4133836971231, lat: 39.910924547299568 },
      zoom: 12,
      districtIndex: "",
      estateIndex: "",
      areaIndex: "",
      showDistrict: true,
      showBoundary: false,
      showZone: false,
      showEstate: false,
      areaBoundry: "",
      posCity: "成都市",
      input: "",
      height: "950px",
      city: null,
      districts: null,
      zones: null,
      estateGeoPoints: [
        {
          lng: 103.98323427406207,
          lat: 30.7756333737778,
          cityName: "成都市",
          districtName: "郫都区",
          areaName: "犀浦镇",
          qualifiedName: "成都市郫都区犀浦镇",
          estateName: "季柳园",
          name: "季柳园",
          level: "area",
          houseCnt: 123
        },
        {
          lng: 103.98347466061654,
          lat: 30.76366106299384,
          cityName: "成都市",
          districtName: "郫都区",
          areaName: "犀浦镇",
          qualifiedName: "成都市郫都区犀浦镇",
          estateName: "双铁广场",
          name: "双铁广场",
          level: "area",
          houseCnt: 234
        }
      ]
    };
  },
  created() {
    this.height = window.innerWidth + "px";
    console.log(this.height);
  },
  mounted() {
    this.height = window.innerWidth + "px";
    console.log(this.height);
    // 获取District信息
    getDistricts().then(res => {
      this.districts = res.data;
    }).catch(err => {
      console.log(err);
    });
    // 获取Zone信息
    getZones().then(res => {
      this.zones = res.data;
      // console.log(res);
    }).catch(err => {
      console.log(err);
    });
  },
  methods: {
    handlerMapReady({ BMap, map }) {
      // 组件加载完成后，获取城市信息
      getCity().then(res => {
        const data = res.data;
        this.$set(this.center, "lng", data.lng);
        this.$set(this.center, "lat", data.lat);
        // console.log(res);
      });
      // lng, lat 表示你要设置的经纬度
      // const lng = 104.08153351042464;
      // const lat = 30.655821878416409;
      // this.$set(this.center, "lng", lng);
      // this.$set(this.center, "lat", lat);
      // console.log(BMap); // just console.log(BMap)
      // console.log(map); // just console.log(map)
    },
    initGeo() {
      connect.$on("cityGeoOk", data => {
        this.$set(this.center, "lng", data[0]);
        this.$set(this.center, "lat", data[1]);
      });
    },
    selectArea(item, index) {
      if (item.level === "district") {
        this.area = index;
        this.areaBoundry = `${item.cityName}${item.districtName}`; // 行政区名字，只供参考
        this.showBoundary = true;
      }
    },
    cancelArea(item, index) {
      if (item.level === "district") {
        this.areaIndex = "";
        this.areaBoundry = "";
        this.showBoundary = false;
      }
    },
    syncCenterAndZoom(e) {
      // district与zone的分界线
      const ZOOMBOUNDARY1 = 13;
      // zone与estate的分界线
      const ZOOMBOUNDARY2 = 14;
      this.zoom = e.target.getZoom();
      this.showDistrict = this.zoom < ZOOMBOUNDARY1;
      this.showZone = this.zoom >= ZOOMBOUNDARY1 && this.zoom < ZOOMBOUNDARY2;
      this.showEstate = this.zoom >= ZOOMBOUNDARY2;
      if (!this.showDistrict) {
        this.showBoundary = false;
      }
      // console.log(this.zoom);
      // console.log(this.showDistrict);
      // console.log(this.showZone);
    },
    clickArea(item, index) {
      this.zoom += 1;
      // console.log(item);
      this.$set(this.center, "lng", item.lng);
      this.$set(this.center, "lat", item.lat);
      // console.log("clickArea");
    }
  }
};
</script>

<style lang="scss">
#bm-view {
  height: 950px;
}
#map-header-wrapper {
  position: fixed;
  top: 40px;
  left: 50px;
}
#map-filter-wrapper {
  position: fixed;
  top: 40px;
  left: 500px;
}
</style>
