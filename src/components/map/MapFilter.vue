<template>
  <div class="main-container">
    <el-row :gutter="0">
      <el-col :span="6">
        <el-popover placement="top-start" title width="500" trigger="hover" content="这是价格过滤器">
          <div>
            <label for>
              <strong>价格（万）</strong>
            </label>
            <div style="padding-top:20px">
              <!-- <el-checkbox-group v-model="checkListPrice">
                <span style="display:inline-block; margin:20px 20px">
                  <el-checkbox label="0-40" style="width:80px;margin-bottom:20px">40以下</el-checkbox>
                </span>
              </el-checkbox-group>-->
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
              <el-divider></el-divider>
              <el-form :inline="true" :model="formPrice">
                <el-form-item label>
                  <el-input
                    v-model="formPrice.lowPrice"
                    placeholder
                    style="width:100px;margin-left:20px"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <label>-</label>
                </el-form-item>
                <el-form-item label>
                  <el-input v-model="formPrice.lowPrice" placeholder style="width:100px"></el-input>
                </el-form-item>
                <el-form-item>
                  <label>（万）</label>
                </el-form-item>
              </el-form>
            </div>
            <div>
              <el-row :gutter="20" style="margin-left:10px">
                <el-col :span="4" style="padding-left:3px">
                  <el-button size="medium">重置</el-button>
                </el-col>
                <el-col :span="4" :offset="8">
                  <el-button size="medium">取消</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button size="medium" type="primary">确定</el-button>
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
        <el-popover placement="top-start" title width="500" trigger="hover" content="这是房型过滤器。">
          <div>
            <label for>
              <strong>房型</strong>
            </label>
            <div style="margin-top:20px">
              <!-- <el-checkbox-group v-model="checkListHouseType">
                <span style="display:block; margin:20px 20px">
                  <el-checkbox label="oneRoom" style="margin-right:60px">一室</el-checkbox>
                  <el-checkbox label="twoRoom" style="margin-right:60px">二室</el-checkbox>
                  <el-checkbox label="threeRoom" style="margin-right:60px">三室</el-checkbox>
                  <el-checkbox label="fourRoom" style="margin-right:60px">四室</el-checkbox>
                </span>
                <span style="display:block; margin:20px 20px">
                  <el-checkbox label="moreRoom">四室以上</el-checkbox>
                </span>
              </el-checkbox-group>-->
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
                  <el-button size="medium">重置</el-button>
                </el-col>
                <el-col :span="4" :offset="8">
                  <el-button size="medium">取消</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button size="medium" type="primary">确定</el-button>
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
        <el-popover placement="top-start" title width="500" trigger="hover" content="这是面积过滤器。">
          <div>
            <label for>
              <strong>面积</strong>
            </label>
            <div style="margin-top:20px">
              <!-- <el-checkbox-group v-model="checkListArea">
                <span style="display:block; margin:20px 20px">
                  <el-checkbox label="0-50" style="width:80px;">50以下</el-checkbox>
                  <el-checkbox label="50-70" style="width:80px;">50-70</el-checkbox>
                  <el-checkbox label="70-90" style="width:80px;">70-90</el-checkbox>
                  <el-checkbox label="90-110" style="width:80px;">90-110</el-checkbox>
                </span>
                <span style="display:block; margin:20px 20px">
                  <el-checkbox label="110-130" style="width:80px;">110-130</el-checkbox>
                  <el-checkbox label="130-150" style="width:80px;">130-150</el-checkbox>
                  <el-checkbox label="150-200" style="width:80px;">150-200</el-checkbox>
                  <el-checkbox label="200-999" style="width:80px;">200以上</el-checkbox>
                </span>
              </el-checkbox-group>-->
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
                  <el-button size="medium">重置</el-button>
                </el-col>
                <el-col :span="4" :offset="8">
                  <el-button size="medium">取消</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button size="medium" type="primary">确定</el-button>
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
        <el-popover placement="top-start" title width="500" trigger="hover" content="这里是更多过滤器。">
          <div style="height:400px;">
            <el-scrollbar style="height:100%">
              <label for>
                <strong>房源特色</strong>
              </label>
              <div style="margin-bottom:10px;padding:10px 0">
                <el-checkbox-group v-model="checkListHouseFeature">
                  <span style="display:inline-block; margin:10px 20px">
                    <el-checkbox label="必看好房" style="width:80px;">必看好房</el-checkbox>
                    <el-checkbox label="满五年" style="width:80px;">满五年</el-checkbox>
                    <el-checkbox label="满两年" style="width:80px;">满两年</el-checkbox>
                    <el-checkbox label="近地铁" style="width:80px;">近地铁</el-checkbox>
                  </span>
                  <span style="display:inline-block; margin:10px 20px">
                    <el-checkbox label="VR房源" style="width:80px;">VR房源</el-checkbox>
                    <el-checkbox label="VR看装修" style="width:80px;">VR看装修</el-checkbox>
                    <el-checkbox label="7日新上" style="width:80px;">7日新上</el-checkbox>
                    <el-checkbox label="随时看房" style="width:80px;">随时看房</el-checkbox>
                  </span>
                </el-checkbox-group>
              </div>
              <label for>
                <strong>朝向</strong>
              </label>
              <div style="margin-bottom:10px;padding:10px 0">
                <el-checkbox-group v-model="checkListHouseDirection">
                  <span style="display:inline-block; margin:10px 20px">
                    <el-checkbox label="南北" style="width:80px;">南北</el-checkbox>
                    <el-checkbox label="朝南" style="width:80px;">朝南</el-checkbox>
                    <el-checkbox label="朝东" style="width:80px;">朝东</el-checkbox>
                    <el-checkbox label="朝北" style="width:80px;">朝北</el-checkbox>
                  </span>
                  <span style="display:inline-block; margin:10px 20px">
                    <el-checkbox label="朝西" style="width:80px;">朝西</el-checkbox>
                  </span>
                </el-checkbox-group>
              </div>
              <label for>
                <strong>楼层</strong>
              </label>
              <div style="margin-bottom:10px;padding:10px 0">
                <el-checkbox-group v-model="checkListHouseFloor">
                  <span style="display:inline-block; margin:10px 20px">
                    <el-checkbox label="低楼层" style="width:80px;">低楼层</el-checkbox>
                    <el-checkbox label="中楼层" style="width:80px;">中楼层</el-checkbox>
                    <el-checkbox label="高楼层" style="width:80px;">高楼层</el-checkbox>
                  </span>
                </el-checkbox-group>
              </div>
              <label for>
                <strong>楼龄</strong>
              </label>
              <div style="margin-bottom:10px;padding:10px 0">
                <el-checkbox-group v-model="checkList">
                  <span style="display:inline-block; margin:10px 20px">
                    <el-checkbox label="5年以内" style="width:80px;">5年以内</el-checkbox>
                    <el-checkbox label="10年以内" style="width:80px;">10年以内</el-checkbox>
                    <el-checkbox label="15年以内" style="width:80px;">15年以内</el-checkbox>
                    <el-checkbox label="20年以内" style="width:80px;">20年以内</el-checkbox>
                  </span>
                  <span style="display:inline-block; margin:10px 20px">
                    <el-checkbox label="20年以上" style="width:80px;">20年以上</el-checkbox>
                  </span>
                </el-checkbox-group>
              </div>
              <label for>
                <strong>用途</strong>
              </label>
              <div style="margin-bottom:10px;padding:10px 0">
                <el-checkbox-group v-model="checkListHousePurpose">
                  <span style="display:inline-block; margin:10px 20px">
                    <el-checkbox label="普通住宅" style="width:80px;">普通住宅</el-checkbox>
                    <el-checkbox label="商业类" style="width:80px;">商业类</el-checkbox>
                    <el-checkbox label="别墅" style="width:80px;">别墅</el-checkbox>
                    <el-checkbox label="四合院" style="width:80px;">四合院</el-checkbox>
                  </span>
                  <span style="display:inline-block; margin:10px 20px">
                    <el-checkbox label="车位" style="width:80px;">车位</el-checkbox>
                    <el-checkbox label="其他" style="width:80px;">其他</el-checkbox>
                  </span>
                </el-checkbox-group>
              </div>
              <label for>
                <strong>电梯</strong>
              </label>
              <div style="margin-bottom:10px;padding:10px 0">
                <el-checkbox-group v-model="checkListHouseElevator">
                  <span style="display:inline-block; margin:10px 20px">
                    <el-checkbox label="有电梯" style="width:80px;">有电梯</el-checkbox>
                    <el-checkbox label="无电梯" style="width:80px;">无电梯</el-checkbox>
                  </span>
                </el-checkbox-group>
              </div>
            </el-scrollbar>
            <div style="margin:20px">
              <el-row :gutter="20" style="margin-left:10px">
                <el-col :span="4">
                  <el-button size="medium">重置</el-button>
                </el-col>
                <el-col :span="4" :offset="8">
                  <el-button size="medium">取消</el-button>
                </el-col>
                <el-col :span="4">
                  <el-button size="medium" type="primary">确定</el-button>
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
  created() {
    // 获取筛选条件范围数据
    this.fetchCityConfig("510100");
  },
  data() {
    return {
      visible: false,
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
      filterRowsName: ["售价", "面积", "房型"],
      filterRowsRight: [[], [], []],
      filterRowsChecked: [[], [], []],
      formPrice: {
        lowPrice: "",
        highPrice: ""
      }
    };
  },
  methods: {
    // 解析range字符串
    rangeParse(rangeStr, unitType) {
      unitType = unitType ? unitType : "";
      let ranges = rangeStr.split(",");
      let ret = new Array(ranges.length);
      ranges.forEach((item, i) => {
        ret[i] = {};
        ret[i].display = item + unitType;
        let reNum = /\d+/g;
        let res = item.match(reNum);
        let minValue = 0,
          maxValue = 99999999;
        if (res) {
          res = res.map(val => parseInt(val));
          if (res.length > 1) (minValue = res[0]), (maxValue = res[1]);
          else if (item.startsWith("小")) maxValue = res[0];
          else minValue = res[0];
        }
        ret[i].label = {
          minValue: minValue,
          maxValue: maxValue
        };
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
    }
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 350px;
  // height: 40px;
  padding: 5px;
  background-color: white;
  text-align: center;
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
