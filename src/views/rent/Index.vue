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
        <el-col :span="1">
          <div style="padding-top:4px">
            <label>区域</label>
          </div>
        </el-col>
        <el-col :span="23">
          <el-row>
            <div>
              <el-button type="text">全部</el-button>
              <el-button type="text">成华</el-button>
              <el-button type="text">金牛</el-button>
              <el-button type="text">锦江</el-button>
              <el-button type="text">青羊</el-button>
              <el-button type="text">郫都</el-button>
              <el-button type="text">双流</el-button>
              <el-button type="text">温江</el-button>
              <el-button type="text">新都</el-button>
              <el-button type="text">武侯</el-button>
            </div>
          </el-row>
          <el-row v-show="false">
            <el-button type="text">200-999</el-button>
            <el-button type="text">200-250</el-button>
            <el-button type="text">250-300</el-button>
            <el-button type="text">300-400</el-button>
            <el-button type="text">400-500</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text">文字按钮</el-button>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="crow">
        <el-col :span="1">
          <div style="padding-top:5px">
            <label>售价</label>
          </div>
        </el-col>
        <el-col :span="23">
          <el-button type="text">全部</el-button>
          <el-button type="text">小于40万</el-button>
          <el-button type="text">40-50万</el-button>
          <el-button type="text">50-200万</el-button>
          <el-button type="text">大于200万</el-button>
        </el-col>
      </el-row>
      <el-row class="crow">
        <el-col :span="1">
          <div style="padding-top:4px">
            <label>面积</label>
          </div>
        </el-col>
        <el-col :span="23">
          <el-button type="text">小于50</el-button>
          <el-button type="text">50-100</el-button>
          <el-button type="text">大于100</el-button>
        </el-col>
      </el-row>
      <el-row class="crow">
        <el-col :span="1">
          <div style="padding-top:4px">
            <label>房型</label>
          </div>
        </el-col>
        <el-col :span="23">
          <el-button type="text">1室</el-button>
          <el-button type="text">2室</el-button>
          <el-button type="text">大于2室</el-button>
        </el-col>
      </el-row>
      <el-row class="crow">
        <el-col :span="1">
          <label>更多</label>
        </el-col>
        <el-col :span="23">
          <el-select
            v-model="value"
            placeholder="请选择"
            size="small"
            style="width:100px;margin-right:10px;"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="value"
            placeholder="请选择"
            size="small"
            style="width:100px;margin-right:10px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="value"
            placeholder="请选择"
            size="small"
            style="width:100px;margin-right:10px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="value"
            placeholder="请选择"
            size="small"
            style="width:100px;margin-right:10px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
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
  name: "Rent",
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
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
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
