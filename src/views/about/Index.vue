<template>
  <div class="about">
    <my-header></my-header>
    <div>
      <h1>68好房简介</h1>
      <p>
        本公司的全称为成都万云互联科技有限公司，成立于2016年，是一家专业从事软件开发和销售一体的高科技企业，旗下的房产管理系统（下方介绍的产品）是我们的创始人王红军博士带领20于名计算机硕士封闭式开发2年，其核心的使命是解决房产中介的网络平台费高、员工成本高、客户买房佣金高等三高瓶颈。我们的口号是：不追求高额回报，只求社会价值，做实事！
        产品介绍
      </p>
      <p>我们的68房产管理软件主要由三个部分组成，即内部管理ERP系统、经纪人内网APP与企业网站。</p>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";

export default {
  name: "About",
  components: {
    MyHeader,
    MyFooter
  }
};
</script>
