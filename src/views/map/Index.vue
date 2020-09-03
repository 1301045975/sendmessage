<template>
  <div style="width:100%; height:98%;">
    <baidu-map
      :style="{height:this.height}"
      ak="0dGpK7C09lZMjwx6QVhU6hzTRZBkGVAI"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @ready="handlerMapReady"
      @zoomend="syncCenterAndZoom"
    >
      <bm-boundary
        v-if="false"
        :name="areaBoundry"
        :strokeWeight="2"
        strokeColor="blue"
        fillColor="skyblue"
        :fillOpacity="0.4"
      ></bm-boundary>
      <bm-polygon
        v-if="showBoundary"
        :path="getPolygonPath"
        stroke-color="blue"
        :stroke-opacity="0.5"
        :stroke-weight="2"
        fill-color="skyblue"
        :fill-opacity="0.4"
      />
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
      <!-- <div v-if="showRegion && regions">
        <area-overlay
          v-for="(item, index) in regions"
          :key="index"
          :position="{ lng: item.lng, lat: item.lat }"
          :text="item"
          :class="areaIndex === index ? 'active' : ''"
          @mouseover.native="selectArea(item, index)"
          @mouseleave.native="cancelArea(item, index)"
          @click.native="clickRegion(item, index)"
        ></area-overlay>
      </div>-->
      <div v-if="showEstate && estates">
        <estate-overlay
          v-for="(item, index) in estates"
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
import BmPolygon from "vue-baidu-map/components/overlays/Polygon";
import MapHeader from "@/components/map/MapHeader.vue";
import MapFilter from "@/components//map/MapFilter.vue";
import {
  getCity,
  getDistricts,
  getZones,
  getRegions,
  getEstatesByRegionId
} from "@/api/map";

export default {
  name: "Map",
  components: {
    BaiduMap,
    ZoneOverlay,
    BmBoundary,
    BmPolygon,
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
      showRegion: false,
      showEstate: false,
      areaBoundry: "",
      posCity: "成都市",
      input: "",
      height: "950px",
      city: null,
      districts: null,
      zones: null,
      regions: null,
      estates: null,
      polygonPath: ""
    };
  },
  computed: {
    getPolygonPath() {
      let arr2 = [];
      if (this.polygonPath !== "") {
        let arr = this.polygonPath.split(";");
        for (let i = 0; i < arr.length; i++) {
          let arr3 = arr[i].split(",");
          arr2.push({
            lng: parseFloat(arr3[0]),
            lat: parseFloat(arr3[1])
          });
        }
      }
      return arr2;
    }
  },
  created() {
    this.height = (window.innerHeight - 10) + "px";
    // console.log(this.height);
  },
  mounted() {
    // this.height = window.innerWidth + "px";
    // console.log(this.height);
    // 获取District信息
    getDistricts()
      .then(res => {
        this.districts = res.data;
        // console.log(res.data);
        // console.log(this.districts[0].border);
      })
      .catch(err => {
        console.log(err);
      });
    // 获取Zone信息
    getZones()
      .then(res => {
        this.zones = res.data;
        // console.log(this.zones);
      })
      .catch(err => {
        console.log(err);
      });
    // 获取Region信息
    getRegions()
      .then(res => {
        this.regions = res.data;
        // console.log(this.regions);
      })
      .catch(err => {
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
      // if (item.level === "district") {
      //   this.area = index;
      //   // this.areaBoundry = `${item.cityName}${item.districtName}`; // 行政区名字，只供参考
      //   this.polygonPath = item.border;
      //   this.showBoundary = true;
      //   // console.log(this.getPolygonPath);
      // }
      this.area = index;
      // this.areaBoundry = `${item.cityName}${item.districtName}`; // 行政区名字，只供参考
      this.polygonPath = item.border;
      this.showBoundary = true;
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
      // zone与boundry的分界线
      const ZOOMBOUNDARY2 = 14;
      // boundry与estate的分界线
      const ZOOMBOUNDARY3 = 15;
      this.zoom = e.target.getZoom();
      this.showDistrict = this.zoom < ZOOMBOUNDARY1;
      this.showZone = this.zoom >= ZOOMBOUNDARY1 && this.zoom < ZOOMBOUNDARY3;
      this.showRegion = this.zoom >= ZOOMBOUNDARY2 && this.zoom < ZOOMBOUNDARY3;
      this.showEstate = this.zoom >= ZOOMBOUNDARY3;
      if (!this.showDistrict) {
        this.showBoundary = false;
      }
      // console.log(this.zoom);
      // console.log(this.showDistrict);
      // console.log(this.showZone);
    },
    clickArea(item, index) {
      this.zoom += 2;
      // console.log(item);
      this.$set(this.center, "lng", item.lng);
      this.$set(this.center, "lat", item.lat);
      // console.log("clickArea");
    },
    clickRegion(item, index) {
      this.zoom += 1;
      this.$set(this.center, "lng", item.lng);
      this.$set(this.center, "lat", item.lat);
      console.log(item);
      // 获取Region信息
      getEstatesByRegionId(item.areaId)
        .then(res => {
          this.estates = res.data;
          // console.log(this.regions);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
#bm-view {
  height: 950px;
  // height: 100%;

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
