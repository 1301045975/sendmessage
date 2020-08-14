<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">VShop商城</a>
          <a href="javascript:;">VR体验</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">Username</a>
          <a href="javascript:;">登录</a>
          <a href="javascript:;">退出</a>
          <a href="javascript:;">我的订单</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>
            购物车
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "NavHeader",
  data() {},
  // computed可以解决延迟问题
  computed: {},
  filters: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/base.scss";
@import "./../../assets/scss/mixin.scss";
@import "./../../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
        text-decoration: none;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        margin-right: 0px;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
