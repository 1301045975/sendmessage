<template>
  <div>
    <el-row style="width:100%; padding:20px 0;">
      <el-col style="width:100%;float:left">
        <el-row :gutter="20" style="height: 200px; cursor:pointer;border-bottom: 1px #DCDFE6 solid">
          <el-col :span="4" style="height: 100%;">
            <el-row style="height: 90%;">
              <el-image
                src="https://1321654.oss-cn-beijing.aliyuncs.com/1586262198682.jpg"
                style="height: 100%;"
              ></el-image>
            </el-row>
          </el-col>
          <el-col :span="16">
            <el-row class="crow">
              <span style="font-size:16pt">
                <strong>{{"金牛区金科北路交大智能八期101.00平米精装2室1厅1卫1阳台150.0万元"}}</strong>
              </span>
            </el-row>
            <el-row class="crow">
              <i class="el-icon-location-outline"></i>&nbsp;
              <span>{{"季柳园-犀浦"}}</span>
            </el-row>
            <el-row class="crow">
              <i class="el-icon-house"></i>&nbsp;
              <span>{{"2室1厅"}}</span> |
              <span>{{"101平米"}}</span> |
              <span>{{"南"}}</span> |
              <span>{{"精装"}}</span> |
              <span>{{"高层"}}</span> | 
              <span>{{"2020年建"}}</span> |
              <span>{{"塔版结合"}}</span>
            </el-row>
            <el-row class="crow">
              <i class="el-icon-star-off"></i>&nbsp;
              <span>64关注</span> /
              <span>4个月以前发布</span>
            </el-row>
            <el-row class="crow">
              <el-tag>VR房源</el-tag>&nbsp;
              <el-tag type="success">随时看房</el-tag>&nbsp;
              <el-tag type="danger">房本满五年</el-tag>
            </el-row>
          </el-col>
          <el-col :span="4" style="height: 100%;padding-top:40px">
            <span style="color:red;font-weight: bold;font-size: 28px">{{"150"}}万</span>
            <br />
            <span style="line-height: 30px">单价：14851.5元/m²</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import cheader from "@/components/newheader";
import oldHouseApi from "@/api/oldhouse";
import informationApi from "@/api/information";
import requestApi from "@/api/request";
// import BMap from "BMap";
import { mapGetters } from "vuex";
import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";

export default {
  name: "HouseItem",
  components: {
    MyHeader,
    MyFooter
  },
  computed: {
    ...mapGetters(["name", "uid"])
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params.id);
  }
};
</script>

<style scoped>
.cheader {
  width: 100%;
  height: 220px;
  background: #f5f5f6;
}
span {
  color: #000;
}
.csearch {
  width: 100%;
}
.cbtn-bg {
  background: #00ae66;
  border: none;
  border-radius: 0px;
}
.crow {
  line-height: 30px;
  padding-top: 2px;
}

.cbtn {
  border: none;
  border-radius: 0px;
}
</style>
