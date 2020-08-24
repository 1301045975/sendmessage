<template>
  <bm-overlay ref="customOverlay" class="zone" pane="labelPane" @draw="draw">
    <div>
      <p>{{ text.estateName }}</p>
      <p>{{ text.houseCnt }}套</p>
    </div>
  </bm-overlay>
</template>

<script>
import BmOverlay from "vue-baidu-map/components/overlays/Overlay.vue";

export default {
  name: "EstateOverlay",
  components: {
    BmOverlay
  },
  props: ["text", "position", "active"],
  watch: {
    position: {
      handler() {
        this.$refs.customOverlay.reload();
      },
      deep: true
    }
  },
  methods: {
    draw({ el, BMap, map }) {
      const { lng, lat } = this.position;
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat));
      el.style.left = pixel.x - 42 + "px";
      el.style.top = pixel.y - 42 + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
.zone {
  transition: background-color 0.15s ease-in-out;
  display: flex;
  align-items: center;
  width: 84px;
  height: 84px;
  background-color: rgba(58, 126, 255, 0.9);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  font-size: 12px;
  text-align: center;
  padding: 10px;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 4px #999;
  box-sizing: border-box;

  &:hover {
    z-index: 1;
    background-color: rgba(240, 65, 52, 0.9);
    color: #fff;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    justify-content: space-between;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      text-align: center;
      line-height: 16px;
    }
  }
}
</style>
