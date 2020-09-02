<template>
  <div>
    <my-header></my-header>
    <div class="cheader">
      <div style="padding-top: 30px">
        <el-row class="csearch" type="flex" justify="center">
          <el-col
            :span="2"
            style="font-size: 28px;cursor: pointer;color: #00ae66;font-weight: bold"
          >{{ companyName }}</el-col>
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
    <div class="box-body">
      <!-- 区域 -->
      <el-row class="crow" v-for="areas in areasArray" :key="'areasArray' + areas.level">
        <label class="box-item4em">{{areas.level == 1 ? "区域：" : ""}}</label>
        <div class="crow-right">
          <el-link
            v-for="(area, j) in areas.data"
            :key="'areas' + j"
            @click="handleAreaClick(areas.level, area.id)"
            :class="area.id == areaIdSelected ? 'box-item4em link-active' : 'box-item4em'"
          >{{area.name}}</el-link>
        </div>
      </el-row>
      <!-- 范围 -->
      <el-row class="crow" v-for="(name, i) in filterRowsName" :key="'filterRowsName' + i">
        <label class="box-item4em">{{name.displayName}}：</label>
        <div class="crow-right">
          <el-checkbox-group v-model="filterRowsChecked[i]">
            <el-checkbox
              class="box-item6em"
              v-for="(range, j) in filterRowsRight[i]"
              :label="range.label"
              :key="'filterRowName' + j"
            >{{range.display}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-row>
      <!-- 更多 -->
      <el-row class="crow">
        <label class="box-item4em">更多：</label>
        <div class="crow-right">
          <el-select
            multiple
            collapse-tags
            class="box-item8em"
            v-for="(more, i) in moreFilterValues"
            v-model="moreFilterSelected[i]"
            :key="'moreFilterValues' + i"
            :placeholder="moreFilterName[i].displayName"
          >
            <el-option
              v-for="(item, j) in more"
              :key="'more' + j"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-row>
    </div>
    <div class="box-body" v-loading="loading">
      <!-- 排序 -->
      <el-menu default-active="0" class="el-menu-demo" mode="horizontal" @select="handleOrderBy">
        <el-menu-item
          v-for="(item, i) in orderBy"
          :key="'orderBy'+i"
          :index="i+''"
        >{{item.displayName}}</el-menu-item>
      </el-menu>
      <el-row>
        <h2>共找到{{totalRecords}}套成都二手房</h2>
      </el-row>
      <el-divider></el-divider>
      <div v-if="!loading">
        <old-house-item
          v-for="(propertyInfo, i) in propertyInfoArray"
          :key="'propertyInfoArray' + i"
          :propertyInfo="propertyInfo"
          @click.native="toDetail(propertyInfo.id)"
        ></old-house-item>
      </div>

      <el-pagination
        @size-change="fetchData"
        @current-change="fetchData"
        :current-page.sync="pageNum"
        :page-size.sync="pageSize"
        :page-sizes="[10,20,30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalRecords"
      ></el-pagination>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script type="text/javascript">
import oldHouseApi from "@/api/oldhouse";
import informationApi from "@/api/information";
// import BMap from "BMap";
import { mapGetters } from "vuex";
import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";
import HouseItem from "@/components/rent/HouseItem.vue";
import OldHouseItem from "@/components/old/OldHouseItem.vue";
import { str2Date, dateDiff, calculateLastUpdate } from "@/utils/date";

export default {
  name: "Old",
  components: {
    MyHeader,
    MyFooter,
    HouseItem,
    OldHouseItem
  },
  computed: {
    // ...mapGetters(["name", "uid"]);
  },
  created() {
    // 获取区域数据
    this.fetchAreaData(0, "510100");
    // 获取筛选条件范围数据
    this.fetchCityConfig("510100");
    // 更多数据
    this.initialMoreFilterData();
  },
  data() {
    return {
      companyName: "",
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
      searchContent: "",
      // 分页
      pageNum: 1,
      pageSize: 10,
      totalRecords: 0,
      // 区域
      areasArray: [],
      areaLvSelected: -1,
      areaIdSelected: -1,
      // 范围
      filterRowsName: [
        { displayName: "售价", paramName: "saleRanges" },
        { displayName: "面积", paramName: "houseAreaRanges" },
        { displayName: "房型", paramName: "countFRanges" }
      ],
      filterRowsRight: [[], [], []],
      filterRowsChecked: [[], [], []],
      // 更多
      moreFilterName: [
        { displayName: "建造年代", paramName: "completeYearRanges" },
        { displayName: "房屋类型", paramName: "houseTypes" },
        { displayName: "楼层", paramName: "floors" },
        { displayName: "朝向", paramName: "directions" },
        { displayName: "装修", paramName: "decorations" }
      ],
      moreFilterValues: [[], [], [], [], []],
      moreFilterSelected: [[], [], [], [], []],
      // 排序
      orderBy: [
        { displayName: "默认排序", paramName: null },
        { displayName: "最新发布", paramName: "sortByLatest" },
        { displayName: "房屋总价", paramName: "sortBySoldPrice" },
        { displayName: "房屋单价", paramName: "sortByUnitPrice" },
        { displayName: "房屋面积", paramName: "sortByHouseArea" }
      ],
      orderByIndex: 0,
      orderFlag: 0,
      propertyInfoArray: [],
      defaultImg: require("../../assets/img/noimg.jpg"),
      loading: true
    };
  },
  mounted() {
    this.companyName = process.env.VUE_APP_COMPANY_NAME;
    // 获取路由参数
    this.searchContent = this.$route.params.searchContent;
    console.log(this.$route.params);
    console.log(this.searchContent);
    // 查询房源数据
    this.searchHouse();
  },
  methods: {
    toDetail(proId) {
      this.$router.push({
        path: '/old/detail',
        query: {
          proId: proId
        }
      })
    },
    searchHouse() {
      this.loading = true;
      let cityPinYin = "chengdu";
      let searchParam = {};
      // 关键词
      if (this.searchContent) {
        searchParam.keyWords = this.searchContent;
      }
      // 区域Id
      if (this.areaIdSelected > 0) {
        searchParam.areaId = this.areaIdSelected;
        searchParam.areaLevel = this.areaLvSelected;
      }
      // 范围
      this.filterRowsName.forEach((item, index) => {
        if (this.filterRowsChecked[index].length > 0)
          searchParam[item.paramName] = this.filterRowsChecked[index];
      });
      // 更多
      this.moreFilterName.forEach((item, index) => {
        if (this.moreFilterSelected[index].length > 0)
          searchParam[item.paramName] = this.moreFilterSelected[index];
      });
      // 排序
      if (this.orderBy[this.orderByIndex].paramName) {
        this.orderFlag += 1;
        searchParam[this.orderBy[this.orderByIndex].paramName] =
          this.orderFlag % 2;
      }
      // 一些特殊处理
      if (searchParam["completeYearRanges"]) {
        searchParam["completeYearRanges"] = searchParam[
          "completeYearRanges"
        ].map((item, index) => {
          let range = this.extractNum(item);
          let crrYear = new Date().getFullYear();
          return {
            minValue: Math.max(0, crrYear - range.maxValue),
            maxValue: crrYear - range.minValue
          };
        });
      }
      oldHouseApi
        .search(cityPinYin, this.pageNum, this.pageSize, searchParam)
        .then(response => {
          if (response.code == 200) {
            let data = response.data;
            // 设置数据
            this.totalRecords = data.total;
            // 先清空
            this.propertyInfoArray.splice(0, this.propertyInfoArray.length);
            if (data) {
              data.list.forEach((item, i) => {
                let propertyInfo = {};
                // 默认封面图片
                propertyInfo.id = item.proId;
                propertyInfo.coverImg = item.proCoverUrl
                  ? item.proCoverUrl
                  : this.defaultImg;
                // 详细页面链接
                propertyInfo.detailUrl = "#";
                // 标题
                propertyInfo.title = item.proTitle;
                // 位置
                propertyInfo.location = item.proDistrict + "-" + item.proArea;
                // x室y厅
                propertyInfo.countFT = item.proTitle.split("，")[0];
                // 面积
                propertyInfo.houseArea = item.proSquare + "m²";
                // 朝向
                propertyInfo.direction = item.proDirection;
                // 装修
                propertyInfo.decoration = item.proDecoration;
                // 楼层
                propertyInfo.floor =
                  item.proFloor + "(共" + item.proFloorAll + "层)";
                propertyInfo.completeYear = item.proCompleteYear + "建";
                propertyInfo.houseType = item.proType;
                propertyInfo.numFav = Math.round(Math.random() * 1000) + "关注";
                propertyInfo.lastUpdate = calculateLastUpdate(
                  str2Date(item.proModDate)
                );
                propertyInfo.isSupportVR = true;
                propertyInfo.isAllowView = true;
                propertyInfo.isOverFiveYears = false;
                propertyInfo.allPrice = item.proPrice + item.proPriceType;
                propertyInfo.unitPrice =
                  "单价：" + item.proUnitPrice + item.proUnitPriceType;
                // console.log(str2Date(item.proCreateDate));
                this.propertyInfoArray.push(propertyInfo);
              });
            }
            // console.log(this.propertyInfoArray);
            this.loading = false;
          }
        });
    },
    handleOrderBy(key, keyPath) {
      this.loading = true;
      this.orderByIndex = parseInt(key);
      this.searchHouse();
    },
    fetchData() {
      //
    },
    // 记录点击区域的level和areaId
    handleAreaClick(level, areaId) {
      this.areaLvSelected = level;
      this.areaIdSelected = areaId;
      if (level > 0 && level < 3 && areaId > 0) {
        // 加载下一级
        this.fetchAreaData(level, areaId);
      }
    },
    // 如果level == 0，表示pCodeOrPId为父Code
    // 如果level >= 1，表示pCodeOrPId为父Id
    fetchAreaData(level, pCodeOrPId) {
      let requestFun = oldHouseApi.getByPAreaCode;
      if (level > 0) requestFun = oldHouseApi.getByPAreaId;
      requestFun("chengdu", pCodeOrPId).then(response => {
        let data = response.data;
        if (response.code == 200) {
          if (!data) return;
          let areas = data.map(item => {
            return {
              id: item.areId,
              name: item.areName
            };
          });
          if (level == 0) {
            areas.splice(0, 0, {
              id: -1,
              name: "全部"
            });
          }
          this.areasArray.splice(level, 10, {
            data: areas,
            level: level + 1
          });
        }
      });
    },
    extractNum(rangeItem) {
      let item = rangeItem;
      let reNum = /\d+/g;
      let res = item.match(reNum);
      let minValue = 0,
        maxValue = 99999999;
      if (res) {
        res = res.map(val => parseInt(val));
        if (res.length > 1) (minValue = res[0]), (maxValue = res[1]);
        else if (item.startsWith("小")) maxValue = res[0];
        else if (item.startsWith("大")) minValue = res[0];
        else minValue = maxValue = res[0];
        return {
          maxValue,
          minValue
        };
      }
      return null;
    },
    // 解析range字符串
    rangeParse(rangeStr, unitType) {
      unitType = unitType ? unitType : "";
      let ranges = rangeStr.split(",");
      let ret = new Array(ranges.length);
      ranges.forEach((item, i) => {
        ret[i] = {};
        ret[i].display = item + unitType;
        let rangeItem = this.extractNum(item);
        if (rangeItem) ret[i].label = rangeItem;
      });
      return ret;
    },
    // 获取城市配置信息
    fetchCityConfig(cityCode) {
      oldHouseApi.getByCityCode(cityCode).then(response => {
        if (response.code == 200 && response.data) {
          let data = response.data;
          // 三个范围
          let dd = ["ctySaleRange", "ctyHouseArea", "ctyHouseType"];
          let unitTypes = ["万", "m²", ""];
          dd.forEach((item, index) => {
            this.filterRowsRight.splice(
              index,
              1,
              this.rangeParse(data[item], unitTypes[index])
            );
          });
        }
      });
    },
    // 初始化更多里的值
    initialMoreFilterData() {
      this.moreFilterValues = [
        [
          {
            label: "5年以内",
            value: "0-5"
          },
          {
            label: "10年以内",
            value: "0-10"
          },
          {
            label: "15年以内",
            value: "0-15"
          },
          {
            label: "20年以内",
            value: "0-20"
          },
          {
            label: "大于20年",
            value: "20-99999999"
          }
        ],
        [
          {
            label: "板房",
            value: "板房"
          },
          {
            label: "砖房",
            value: "砖房"
          },
          {
            label: "裙楼",
            value: "裙楼"
          },
          {
            label: "排房",
            value: "排房"
          },
          {
            label: "多层",
            value: "多层"
          },
          {
            label: "高层",
            value: "高层"
          },
          {
            label: "小高层",
            value: "小高层"
          },
          {
            label: "四合院",
            value: "四合院"
          },
          {
            label: "多层复式",
            value: "多层复式"
          },
          {
            label: "高层复式",
            value: "高层复式"
          },
          {
            label: "多层跃式",
            value: "多层跃式"
          },
          {
            label: "高层跃式",
            value: "高层跃式"
          },
          {
            label: "独立别墅",
            value: "独立别墅"
          },
          {
            label: "联体别墅",
            value: "联体别墅"
          },
          {
            label: "双拼别墅",
            value: "双拼别墅"
          }
        ],
        [
          {
            label: "低区",
            value: "低区"
          },
          {
            label: "中区",
            value: "中区"
          },
          {
            label: "高区",
            value: "高区"
          }
        ],
        [
          {
            label: "朝南",
            value: "南"
          },
          {
            label: "朝北",
            value: "北"
          },
          {
            label: "朝中",
            value: "中"
          },
          {
            label: "朝东",
            value: "东"
          },
          {
            label: "东西",
            value: "东西"
          },
          {
            label: "南北",
            value: "南北"
          },
          {
            label: "东南",
            value: "东南"
          },
          {
            label: "东北",
            value: "东北"
          },
          {
            label: "西南",
            value: "西南"
          },
          {
            label: "西北",
            value: "西北"
          }
        ],
        [
          {
            label: "精装",
            value: "精装"
          },
          {
            label: "中装",
            value: "中装"
          },
          {
            label: "简装",
            value: "简装"
          },
          {
            label: "清水",
            value: "清水"
          }
        ]
      ];
    }
  }
};
</script>

<style scoped>
.link-active {
  color: blue;
}

.margin6em {
  margin-right: 2em;
}

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
  display: flex;
  flex-direction: row;
}

.crow-right {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.cbtn {
  border: none;
  border-radius: 0px;
}

.box-mg-right2em {
  margin-right: 2em;
}

.box-item6em {
  width: 6em;
  margin-right: 2em;
}
.box-item8em {
  width: 10em;
  margin-right: 2em;
}
.box-item4em {
  width: 4em;
  margin-right: 0.8em;
}
.box-body {
  width: 60%;
  margin: 0 auto;
  padding: 20px;
}
</style>
