<template>
  <div class="map-wrapper">
    <baidu-map
      id="bm-view"
      class="bm-view"
      ak="0dGpK7C09lZMjwx6QVhU6hzTRZBkGVAI"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @ready="handler"
      @zoomend="syncCenterAndZoom"
    >
      <bm-boundary
        v-if="showBoundary"
        :name="zoneBoundary"
        :strokeWeight="2"
        strokeColor="blue"
        fillColor="skyblue"
        :fillOpacity="0.4"
      ></bm-boundary>
      <div v-if="showZone">
        <zone-overlay
          v-for="(item, index) in zoneGeoPoints"
          :key="index"
          :position="{ lng: item.lng, lat: item.lat }"
          :text="item"
          :class="zoneIndex === index ? 'active' : ''"
          @mouseover.native="selectZone(item, index)"
          @mouseleave.native="cancelZone(item, index)"
          @click.native="clickZoneOrArea(item, index)"
        ></zone-overlay>
      </div>
      <div v-if="showArea">
        <zone-overlay
          v-for="(item, index) in areaGeoPoints"
          :key="index"
          :position="{ lng: item.lng, lat: item.lat }"
          :text="item"
          :class="areaIndex === index ? 'active' : ''"
          @mouseover.native="selectZone(item, index)"
          @mouseleave.native="cancelZone(item, index)"
          @click.native="clickZoneOrArea(item, index)"
        ></zone-overlay>
      </div>
      <div v-if="showEstate">
        <estate-overlay
          v-for="(item, index) in estateGeoPoints"
          :key="index"
          :position="{ lng: item.lng, lat: item.lat }"
          :text="item"
          :class="areaIndex === index ? 'active' : ''"
          @mouseover.native="selectZone(item, index)"
          @mouseleave.native="cancelZone(item, index)"
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
import connect from "../connect.js";
import ZoneOverlay from "@/components/map/ZoneOverlay.vue";
import EstateOverlay from "@/components/map/EstateOverlay.vue";
import BmBoundary from "vue-baidu-map/components/others/Boundary";
import MapHeader from "@/components/map/MapHeader.vue";
import MapFilter from "@/components//map/MapFilter.vue";

export default {
  name: "Map",
  components: {
    BaiduMap,
    ZoneOverlay,
    BmBoundary,
    EstateOverlay,
    MapHeader,
    MapFilter
  },
  data() {
    return {
      center: { lng: 104.07, lat: 30.67 },
      zoom: 12,
      zoneIndex: "",
      areaIndex: "",
      showZone: true,
      showBoundary: false,
      showArea: false,
      showEstate: false,
      posCity: "成都市",
      input: "",
      zoneGeoPoints: [
        {
          lng: 104.08956175659785,
          lat: 30.661904490317256,
          cityName: "成都市",
          districtName: "锦江区",
          qualifiedName: "成都市锦江区",
          name: "锦江区",
          level: "district",
          houseCnt: 123
        },
        {
          lng: 103.90544568808663,
          lat: 30.79953765357336,
          cityName: "成都市",
          districtName: "郫都区",
          qualifiedName: "成都市郫都区",
          name: "郫都区",
          level: "district",
          houseCnt: 234
        }
      ],
      areaGeoPoints: [
        {
          lng: 103.97764397694121,
          lat: 30.76070519944251,
          cityName: "成都市",
          districtName: "郫都区",
          areaName: "犀浦镇",
          qualifiedName: "成都市郫都区犀浦镇",
          name: "犀浦镇",
          level: "area",
          houseCnt: 123
        },
        {
          lng: 103.93374186609141,
          lat: 30.811712989903346,
          cityName: "成都市",
          districtName: "郫都区",
          areaName: "红光镇",
          qualifiedName: "成都市郫都区红光镇",
          name: "红光镇",
          level: "area",
          houseCnt: 234
        }
      ],
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
  methods: {
    handler({ BMap, map }) {
      // lng, lat 表示你要设置的经纬度
      const lng = 104.08153351042464;
      const lat = 30.655821878416409;
      this.$set(this.center, "lng", lng);
      this.$set(this.center, "lat", lat);
      // console.log(BMap); // just console.log(BMap)
      // console.log(map); // just console.log(map)
    },
    initGeo() {
      connect.$on("cityGeoOk", data => {
        this.$set(this.center, "lng", data[0]);
        this.$set(this.center, "lat", data[1]);
      });
    },
    selectZone(item, index) {
      if (item.level === "district") {
        this.zoneIndex = index;
        this.zoneBoundary = `${this.posCity}${item.name}`; // 行政区名字，只供参考
        this.showBoundary = true;
      }
    },
    cancelZone(item, index) {
      if (item.level === "district") {
        this.zoneIndex = "";
        this.zoneBoundary = "";
        this.showBoundary = false;
      }
    },
    syncCenterAndZoom(e) {
      // zone与area的分界线
      const ZOOMBOUNDARY1 = 14;
      // area与estate的分界线
      const ZOOMBOUNDARY2 = 15;
      this.zoom = e.target.getZoom();
      this.showZone = this.zoom < ZOOMBOUNDARY1;
      this.showArea = this.zoom >= ZOOMBOUNDARY1 && this.zoom < ZOOMBOUNDARY2;
      this.showEstate = this.zoom >= ZOOMBOUNDARY2;
      if (!this.showZone) {
        this.showBoundary = false;
      }
      // console.log(this.zoom);
      // console.log(this.showZone);
      // console.log(this.showArea);
    },
    clickZoneOrArea(item, index) {
      this.zoom += 1;
      // console.log(item);
      this.$set(this.center, "lng", item.lng);
      this.$set(this.center, "lat", item.lat);
      // console.log("clickZoneOrArea");
    }
  }
};
</script>

<style lang="scss">
#bm-view {
  height: 850px;
}
#map-header-wrapper {
  position: fixed;
  top: 100px;
  left: 50px;
}
#map-filter-wrapper {
  position: fixed;
  top: 100px;
  left: 550px;
}
</style>
