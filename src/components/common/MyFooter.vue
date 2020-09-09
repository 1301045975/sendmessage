<template>
  <div class="cfooter">
    <div style="width: 60%;margin: 0 auto">
      <el-row style="color: #fff;line-height: 80px">
        <span>关于军军</span>
        <span>联系我们</span>
        <span>加入我们</span>
        <span>隐私声明</span>
        <span>网站地图</span>
        <span>友情链接</span>
        <!-- 2020/09/02 没有客服电话，此项内容注释 -->
        <!-- <span style="float: right;color: #7dcfa0;">官方客服 4008123123</span> -->
      </el-row>
      <el-row>
        <span
          class="content"
        >四川军军信息咨询有限公司 | 网络经营许可证 蜀ICP备16057509号-2 | © Copyright©2010-2020 军军网 junjunhouse.com 版权所有 | 营业执照</span>
        <br />
        <span class="content">违法和不良信息举报电话：028-61834237 违法和不良信息举报邮箱：1770973601@qq.com</span>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter"
};
</script>

<style scoped>
.cfooter {
  width: 100%;
  padding-bottom: 20px;
  background: url("./../../assets/img/footer-bg.jpg");
}
span {
  padding: 10px;
}
.content {
  color: #888c8e;
  line-height: 30px;
  font-size: 12px;
}
</style>
