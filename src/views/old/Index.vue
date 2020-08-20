<template>
  <div>
    <my-header></my-header>
    <div class="cheader">
      <div style="padding-top: 30px">
        <el-row class="csearch" type="flex" justify="center">
          <el-col
            :span="2"
            style="font-size: 28px;cursor: pointer;color: #00ae66;font-weight: bold"
          >军军房产</el-col>
          <el-col :span="8">
            <el-input
              placeholder="请输入内容"
              v-model="searchContent"
              class="input"
              style="border-radius: 0px"
            ></el-input>
          </el-col>
          <el-button type="success" class="cbtn-bg" @click="searchHouse">开始找房</el-button>
        </el-row>
      </div>
    </div>
    <div style="width: 60%;margin: 0 auto;padding: 20px">
      <el-row class="crow">
        <label>区域：</label>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="全部"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="成华"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="成华"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="高新"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="高新西"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="金牛"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="锦江"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="龙泉驿"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="郫都"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="青羊"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="双流"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="天府新区"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="天府新区南区"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="温江"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="武侯"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="新都"
          true-label="1"
          false-label="0"
        ></el-checkbox>
      </el-row>
      <el-row class="crow">
        <label>售价：</label>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="全部"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="小于40万"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="40-50万"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="50-60万"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="60-80万"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="80-100万"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="100-120万"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="120-150万"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="150-200万"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="大于200万"
          true-label="1"
          false-label="0"
        ></el-checkbox>
      </el-row>
      <el-row class="crow">
        <label>面积：</label>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="全部"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="小于50m²"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="50-70m²"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="70-90m²"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="90-120m²"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="120-140m²"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="140-200m²"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="200-300m²"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="大于300m²"
          true-label="1"
          false-label="0"
        ></el-checkbox>
      </el-row>
      <el-row class="crow">
        <label>房型：</label>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="全部"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="1室"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="2室"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="3室"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="4室"
          true-label="1"
          false-label="0"
        ></el-checkbox>
        <el-checkbox
          style=" margin-left: 3px;margin-right: 3px;"
          label="大于4室"
          true-label="1"
          false-label="0"
        ></el-checkbox>
      </el-row>

      <div class="crow">
        <label>更多：</label>
        <dropdown_year style="margin-left: 10px;display: inline"></dropdown_year>
        <dropdown_type style="margin-left: 10px;display: inline"></dropdown_type>
        <dropdown_floor style="margin-left: 10px;display: inline"></dropdown_floor>
        <dropdown_direction style="margin-left: 10px;display: inline"></dropdown_direction>
        <dropdown_build style="margin-left: 10px;display: inline"></dropdown_build>
      </div>
    </div>
    <div style="width: 60%;margin: 0 auto;padding: 20px">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">默认排序</el-menu-item>
        <el-menu-item index="3">最新发布</el-menu-item>
        <el-menu-item index="4">房屋总价</el-menu-item>
        <el-menu-item index="5">房屋单价</el-menu-item>
        <el-menu-item index="6">房屋面积</el-menu-item>
      </el-menu>
      <el-row>
        <h2>共找到{{123}}套太原二手房</h2>
      </el-row>
      <el-divider></el-divider>
      <house-item></house-item>
      <house-item></house-item>
      <house-item></house-item>
      <house-item></house-item>
      <house-item></house-item>
      <house-item></house-item>
      <el-pagination
        @size-change="fetchData"
        @current-change="fetchData"
        :current-page.sync="currentPage"
        :page-sizes="[5,10,20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script type="text/javascript">
import cheader from "@/components/newheader";
import oldHouseApi from "@/api/oldhouse";
import informationApi from "@/api/information";
import requestApi from "@/api/request";
// import BMap from "BMap";
import { mapGetters } from "vuex";
import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";
import HouseItem from "@/components/rent/HouseItem.vue";

export default {
  name: "Old",
  components: {
    MyHeader,
    MyFooter,
    HouseItem
  },
  computed: {
    ...mapGetters(["name", "uid"])
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      pojo: {},
      agent: {},
      agents: [],
      activeIndex: "/oldHouse/info",
      centerDialogVisible: false,
      messageAgent: {},
      messagePojo: {
        toId: "",
        msg: ""
      },
      websocket: null,
      data: "",
      content: "",
      requestHouseFlag: false,
      request: {
        house_id: ""
      },

      loginRules: {
        bname: [
          { required: true, message: "请输入联系人姓名", trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请输入长度为11位的手机号",
            trigger: "blur"
          }
        ],
        request_date: [
          { required: true, message: "请输入看房时间", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    console.log(this.$route.params.id);
  }
};
</script>

<style scoped>
.cheader {
  width: 100%;
  height: 100px;
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
}

.cbtn {
  border: none;
  border-radius: 0px;
}
</style>
