<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png"
           alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.imooc.com/u/1343480"
         target="_blank">网站首页</a><span>|</span>
      <a href="https://coding.imooc.com/class/113.html"
         target="_blank">联系我们</a><span>|</span>
      <a href="https://coding.imooc.com/class/236.html"
         target="_blank">关于我们</a><span>|</span>
      <a href="https://coding.imooc.com/class/343.html"
         target="_blank">加入我们</a><span>|</span>
      <a href="https://coding.imooc.com/class/343.html"
         target="_blank">房产联盟</a>
    </div>
    <div class="copyright">Copyright ©2019 <span class="domain">成都万云互联科技有限公司</span> All Rights Reserved.</div>
  </div>
</template>
<script>
export default {
  name: 'NavFooter'
}
</script>
<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
      text-decoration: none;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>
