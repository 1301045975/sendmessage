<template>
  <bm-overlay
    ref="customOverlay"
    :class="isChoose===1?'zone Myactive':'zone'"
    pane="labelPane"
    @draw="draw"
  >
    <label>
      <div>
        <p>
          {{ text.estateName }} | {{ text.houseCnt }}套
          <span class="price">{{text.salePrice}}万</span>
        </p>
      </div>
    </label>
  </bm-overlay>
</template>

<script>
import BmOverlay from "vue-baidu-map/components/overlays/Overlay.vue";

export default {
  name: "EstateOverlay",
  components: {
    BmOverlay
  },
  data() {
    return {
      IsChoose: 0
    };
  },
  props: ["text", "position", "isChoose", "TheIndex"],
  watch: {
    position: {
      handler() {
        this.$refs.customOverlay.reload();
      },
      deep: true
    },
    isChoose(newValue, old) {}
  },
  mounted() {},
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
  background-color: rgba(58, 126, 255, 0.9);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  font-size: 0.7em;
  text-align: center;
  position: absolute;
  border-radius: 1.2em;
  box-shadow: 0 0 0.2em #999;
  box-sizing: border-box;
  padding: 0.02em 0.6em;

  &:hover {
    z-index: 1;
    background-color: rgba(240, 65, 52, 0.9);
    color: #fff;
  }

  div {
    display: flex;
    // flex-wrap: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space: nowrap;
    justify-content: space-between;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      text-align: center;
      line-height: 1.1em;
    }
  }
  .price {
    background-color: #fff;
    color: rgba(58, 126, 255, 0.9);
    padding: 0.3em 0.8em;
    border-radius: 1em;
  }
}
.Myactive {
  background-color: #fa5741;
}
.Myactive .price {
  color: #fa5741;
}
</style>
