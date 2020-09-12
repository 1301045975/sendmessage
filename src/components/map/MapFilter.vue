<template>
  <div class="main-container">
    <el-row :gutter="0">
      <el-col :span="6">
        <el-popover
          placement="top-start"
          title
          width="450"
          trigger="hover"
          content="这是价格过滤器"
          :append-to-body="false"
          v-model="visible[0]"
        >
          <div>
            <label>
              <strong>价格（万）</strong>
            </label>
            <div style="padding-top:20px">
              <el-checkbox-group v-model="filterRowsChecked[0]">
                <el-checkbox
                  class="box-item6em"
                  style="width:80px;margin-bottom:20px"
                  v-for="(range, j) in filterRowsRight[0]"
                  :label="range.label"
                  :key="'filterRowName' + j"
                >{{range.display}}</el-checkbox>
              </el-checkbox-group>
            </div>
            <div style="margin-top:10px">
              <!-- 价格区间注释 -->
              <!-- <el-divider></el-divider>
              <div class="form-price">
                <el-input v-model="formPrice.lowPrice" placeholder class="form-price-input"></el-input>
                <label>-</label>
                <el-input v-model="formPrice.highPrice" placeholder class="form-price-input"></el-input>
                <label style="font-size:16px">（万）</label>
              </div> -->
              <el-divider></el-divider>
            </div>
            <div>
              <el-row :gutter="20" style="margin-left:10px">
                <el-col :span="4" style="padding-left:3px">
                  <el-button size="medium" @click="resetCheckBox(0)">重置</el-button>
                </el-col>
                <el-col :span="4" :offset="8">
                  <el-button size="medium" @click="cancelBtu(0)">取消</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button size="medium" type="primary" @click="searchHouse">确定</el-button>
                </el-col>
              </el-row>
            </div>
          </div>
          <el-button type="text" slot="reference">
            价格
            <i class="el-icon-caret-bottom"></i>
          </el-button>
        </el-popover>
      </el-col>
      <el-col :span="6">
        <el-popover
          placement="top-start"
          title
          width="450"
          trigger="hover"
          content="这是面积过滤器"
          :append-to-body="false"
          v-model="visible[1]"
        >
          <div>
            <label for>
              <strong>面积</strong>
            </label>
            <div style="margin-top:20px">
              <el-checkbox-group v-model="filterRowsChecked[1]">
                <el-checkbox
                  class="box-item6em"
                  style="width:80px;margin-bottom:20px"
                  v-for="(range, j) in filterRowsRight[1]"
                  :label="range.label"
                  :key="'filterRowName' + j"
                >{{range.display}}</el-checkbox>
              </el-checkbox-group>
            </div>
            <div>
              <el-row :gutter="20" style="margin-left:10px">
                <el-col :span="4">
                  <el-button size="medium" @click="resetCheckBox(1)">重置</el-button>
                </el-col>
                <el-col :span="4" :offset="8">
                  <el-button size="medium" @click="cancelBtu(1)">取消</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button size="medium" type="primary" @click="searchHouse">确定</el-button>
                </el-col>
              </el-row>
            </div>
          </div>
          <el-button type="text" slot="reference">
            面积
            <i class="el-icon-caret-bottom"></i>
          </el-button>
        </el-popover>
      </el-col>
      <el-col :span="6">
        <el-popover
          placement="top-start"
          title
          width="450"
          trigger="hover"
          content="这是房型过滤器"
          :append-to-body="false"
          v-model="visible[2]"
        >
          <div>
            <label for>
              <strong>房型</strong>
            </label>
            <div style="margin-top:20px">
              <el-checkbox-group v-model="filterRowsChecked[2]">
                <el-checkbox
                  class="box-item6em"
                  style="width:80px;margin-bottom:20px"
                  v-for="(range, j) in filterRowsRight[2]"
                  :label="range.label"
                  :key="'filterRowName' + j"
                >{{range.display}}</el-checkbox>
              </el-checkbox-group>
            </div>
            <div>
              <el-row :gutter="20" style="margin-left:10px">
                <el-col :span="4">
                  <el-button size="medium" @click="resetCheckBox(2)">重置</el-button>
                </el-col>
                <el-col :span="4" :offset="8">
                  <el-button size="medium" @click="cancelBtu(2)">取消</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button size="medium" type="primary" @click="searchHouse">确定</el-button>
                </el-col>
              </el-row>
            </div>
          </div>
          <el-button type="text" slot="reference">
            房型
            <i class="el-icon-caret-bottom"></i>
          </el-button>
        </el-popover>
      </el-col>
      <el-col :span="6">
        <el-popover
          placement="top-start"
          title
          width="450"
          trigger="hover"
          content="这里是更多过滤器"
          :append-to-body="false"
          v-model="visible[3]"
        >
          <div style="height:400px;">
            <el-scrollbar style="height:100%">
              <div v-for="(more, i) in moreFilterValues" :key="'moreFilterValues' + i">
                <label for>
                  <strong>{{ moreFilterName[i].displayName }}</strong>
                </label>
                <div style="margin-bottom:10px;padding:10px 0">
                  <el-checkbox-group v-model="moreFilterSelected[i]">
                    <el-checkbox
                      v-for="(item, j) in more"
                      :key="'more' + j"
                      :label="item.label"
                      :value="item.value"
                      style="width:80px;margin-top:10px;margin-bottom:10px"
                    >{{item.label}}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>
            </el-scrollbar>
            <div style="margin:20px">
              <el-row :gutter="20" style="margin-left:10px">
                <el-col :span="4">
                  <el-button size="medium" @click="resetMore()">重置</el-button>
                </el-col>
                <el-col :span="4" :offset="8">
                  <el-button size="medium" @click="cancelBtu(3)">取消</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button size="medium" type="primary" @click="searchHouse">确定</el-button>
                </el-col>
              </el-row>
            </div>
          </div>
          <el-button type="text" slot="reference">
            更多
            <i class="el-icon-caret-bottom"></i>
          </el-button>
        </el-popover>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import oldHouseApi from "@/api/oldhouse";

export default {
  name: "MapFilter",
  components: {},
  props: ["text", "position", "active"],
  computed: {},
  created() {
    // 获取筛选条件范围数据
    this.fetchCityConfig("510100");
    // 更多数据
    this.initialMoreFilterData();
  },
  data() {
    return {
      visible4: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible: [false, false, false, false],
      input: "",
      checkList: ["复选框 A", "复选框E"],
      checkListPrice: [],
      checkListHouseType: [],
      checkListArea: [],
      checkListHouseFeature: [],
      checkListHouseDirection: [],
      checkListHouseFloor: [],
      checkListHouseAge: [],
      checkListHousePurpose: [],
      checkListHouseElevator: [],
      formPrice: {
        lowPrice: "",
        highPrice: ""
      },

      companyName: "",
      center: { lng: 0, lat: 0 },
      zoom: 3,
      pojo: {},
      agent: {},
      agents: [],
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
  methods: {
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
    //重置选项
    resetCheckBox(id) {
      this.$set(this.filterRowsChecked, id, []);
      this.searchHouse();
    },
    //重置更多
    resetMore() {
      for (let i = 0; i < this.moreFilterSelected.length; i++) {
        this.$set(this.moreFilterSelected, i, []);
      }
      this.searchHouse();
    },
    cancelBtu(id) {
      this.$set(this.visible, id, false);
    },
    //确认
    confirmBtu(id) {
      this.$set(this.visible, id, false);
    },
    //更多确认
    confirmMoreBtu() {
      this.$set(this.visible, 3, false);
    },
    searchHouse() {
      this.loading = true;
      let cityPinYin = "chengdu";
      let searchParam = {};
      // 范围
      this.filterRowsName.forEach((item, index) => {
        if (this.filterRowsChecked[index].length > 0)
          searchParam[item.paramName] = this.filterRowsChecked[index];
      });
      // 更多
      // this.moreFilterName.forEach((item, index) => {
      //   if (this.moreFilterSelectedParams[index].length > 0)
      //     searchParam[item.paramName] = this.moreFilterSelectedParams[index];
      // });
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
      // console.log(searchParam);
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
      // console.log(searchParam);
      for (let i = 0; i <= 3; i++) {
        this.cancelBtu(i);
      }
      this.$emit("transmitParamEvent", searchParam);
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
            label: "低层",
            value: "低层"
          },
          {
            label: "中层",
            value: "中层"
          },
          {
            label: "高层",
            value: "高层"
          }
        ],
        [
          {
            label: "朝南",
            value: "朝南"
          },
          {
            label: "朝北",
            value: "朝北"
          },
          {
            label: "朝东",
            value: "朝东"
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

<style lang="scss" scoped>
.form-price {
  height: 50px;
  width: 300px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  justify-content: space-between;
}
.form-price-input {
  width: 100px;
  text-align: center;
}
.main-container {
  width: 22em;
  // height: 40px;
  padding: 0.4em;
  background-color: white;
  text-align: center;
  z-index: 100;
}
#logo {
  background-color: white;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>

<style lang="scss">
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
