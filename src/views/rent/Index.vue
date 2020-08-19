<template>
  <div>
    <my-header></my-header>
    <div class="cheader">
      <div style="width: 60%;margin: 0 auto;line-height: 100px">
        <el-row>
          <el-col
            :span="3"
            style="font-size: 28px;cursor: pointer;color: #00ae66;font-weight: bold"
          >万径房产</el-col>
          <el-col :span="1" :offset="2" style="cursor: pointer">
            <span @click="send('/newHouse')">在售</span>
          </el-col>
          <el-col :span="1" style="cursor: pointer">
            <span @click="send('/rentHouse')">小区</span>
          </el-col>
          <el-col :span="2" style="cursor: pointer">
            <span @click="send('/businessHouse')">地图找房</span>
          </el-col>
          <el-col :span="4" :offset="4" style="cursor: pointer;color: #00ae66;float: right;">
            <span @click="send('/businessHouse')" style="color: #00ae66;">客服热线234242343</span>
          </el-col>
        </el-row>
      </div>
      <div style="padding-top: 30px">
        <el-row class="csearch" type="flex" justify="center">
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
        <label>售价</label>
        <el-checkbox label="200万以下" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="200-250" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="250-300" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="300-400" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="400-500" true-label="1" false-label="0"></el-checkbox>
      </el-row>
      <el-row class="crow">
        <label>房型</label>
        <el-checkbox label="一室" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="二室" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="三室" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="四室" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="五室及以上" true-label="1" false-label="0"></el-checkbox>
      </el-row>
      <el-row class="crow">
        <label>面积</label>
        <el-checkbox label="50㎡以下" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="50㎡-70㎡" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="70㎡-90㎡" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="90㎡-110㎡" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="110㎡-130㎡" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="130㎡-150㎡" true-label="1" false-label="0"></el-checkbox>
        <el-checkbox label="150㎡以上" true-label="1" false-label="0"></el-checkbox>
      </el-row>
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
      <el-row style="width:100%">
        <el-col style="width:85%;float:left">
          <el-row
            :gutter="20"
            style="height: 200px;padding-top:20px;cursor:pointer;border-bottom: 1px #DCDFE6 solid"
          >
            <el-col :span="4" style="height: 100%;">
              <el-row style="height: 90%;">
                <el-image src="https://1321654.oss-cn-beijing.aliyuncs.com/1586262198682.jpg" style="height: 100%;"></el-image>
              </el-row>
            </el-col>
            <el-col :span="16">
              <el-row>
                <h2>{{"title"}}</h2>
              </el-row>
              <el-row class="crow">
                <span>{{"desc"}}</span>
              </el-row>
              <el-row class="crow">
                <span>{{"type"}}|</span>
                <span>{{"area"}}|</span>
                <span>{{"orientation"}}|</span>
                <span>{{"floor"}}|</span>
              </el-row>
              <el-row class="crow">
                <span>0关注</span>
              </el-row>
            </el-col>
            <el-col :span="4" style="height: 100%;">
              <span style="color:red;font-weight: bold;font-size: 28px">{{"price"}}万</span>
              <br />
              <span style="line-height: 30px">单价：暂无</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col style="width:10%;float:right">
          <el-button type="primary" class="cbtn">试试地图找房</el-button>
        </el-col>
      </el-row>
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

export default {
  name: "Rent",
  components: {
    MyHeader,
    MyFooter
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
}

.cbtn {
  border: none;
  border-radius: 0px;
}
</style>
