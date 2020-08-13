<template>
  <div class="main-container">
    <el-row :gutter="0">
      <el-col :span="6">
        <el-popover placement="top-start" title="" width="500" trigger="hover" content="这是价格过滤器">
          <div>
            <label for="">价格（万）</label>
            <div>
              <el-checkbox-group v-model="checkListPrice">
                <span style="display:inline-block; margin:20px 20px">
                  <el-checkbox label="0-40" style="width:80px;">40以下</el-checkbox>
                  <el-checkbox label="40-60" style="width:80px;">40-60</el-checkbox>
                  <el-checkbox label="60-80" style="width:80px;">60-80</el-checkbox>
                  <el-checkbox label="80-100" style="width:80px;">80-100</el-checkbox>
                </span>
                <span style="display:inline-block; margin:20px 20px">
                  <el-checkbox label="100-150" style="width:80px;">100-150</el-checkbox>
                  <el-checkbox label="150-200" style="width:80px;">150-200</el-checkbox>
                  <el-checkbox label="200-300" style="width:80px;">200-300</el-checkbox>
                  <el-checkbox label="300-999" style="width:80px;">300以上</el-checkbox>
                </span>
              </el-checkbox-group>
            </div>
            <div style="margin-top:20px">
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
            价格
            <i class="el-icon-caret-bottom"></i>
          </el-button>
        </el-popover>
      </el-col>
      <el-col :span="6">
        <el-popover placement="top-start" title="" width="500" trigger="hover" content="这是房型过滤器。">
          <div>
            <label for="">房型</label>
            <div>
              <el-checkbox-group v-model="checkListHouseType">
                <span style="display:block; margin:20px 20px">
                  <el-checkbox label="oneRoom" style="margin-right:60px">一室</el-checkbox>
                  <el-checkbox label="twoRoom" style="margin-right:60px">二室</el-checkbox>
                  <el-checkbox label="threeRoom" style="margin-right:60px">三室</el-checkbox>
                  <el-checkbox label="fourRoom" style="margin-right:60px">四室</el-checkbox>
                </span>
                <span style="display:block; margin:20px 20px">
                  <el-checkbox label="moreRoom">四室以上</el-checkbox>
                </span>
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
        <el-popover placement="top-start" title="" width="500" trigger="hover" content="这是面积过滤器。">
          <div>
            <label for="">面积</label>
            <div>
              <el-checkbox-group v-model="checkListArea">
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
        <el-popover
          placement="top-start"
          title=""
          width="500"
          trigger="hover"
          content="这里是更多过滤器。"
        >
          <div style="height:400px;">
            <el-scrollbar style="height:100%">
              <label for>房源特色</label>
              <div>
                <el-checkbox-group v-model="checkListHouseFeature">
                  <span style="display:inline-block; margin:20px 20px">
                    <el-checkbox label="必看好房">必看好房</el-checkbox>
                    <el-checkbox label="满五年">满五年</el-checkbox>
                    <el-checkbox label="满两年">满两年</el-checkbox>
                    <el-checkbox label="近地铁">近地铁</el-checkbox>
                  </span>
                  <span style="display:inline-block; margin:20px 20px">
                    <el-checkbox label="VR房源">VR房源</el-checkbox>
                    <el-checkbox label="VR看装修">VR看装修</el-checkbox>
                    <el-checkbox label="7日新上">7日新上</el-checkbox>
                    <el-checkbox label="随时看房">随时看房</el-checkbox>
                  </span>
                </el-checkbox-group>
              </div>
              <label for>朝向</label>
              <div>
                <el-checkbox-group v-model="checkList">
                  <span style="display:inline-block; margin:20px 20px">
                    <el-checkbox label="复选框 A">复选框 A</el-checkbox>
                    <el-checkbox label="复选框 B">复选框 B</el-checkbox>
                    <el-checkbox label="复选框 C">复选框 C</el-checkbox>
                    <el-checkbox label="复选框 D">复选框 D</el-checkbox>
                  </span>
                  <span style="display:inline-block; margin:20px 20px">
                    <el-checkbox label="复选框 E">复选框 E</el-checkbox>
                    <el-checkbox label="复选框 F">复选框 F</el-checkbox>
                    <el-checkbox label="复选框 G">复选框 G</el-checkbox>
                    <el-checkbox label="复选框 H">复选框 H</el-checkbox>
                  </span>
                </el-checkbox-group>
              </div>
              <label for>楼层</label>
              <div>
                <el-checkbox-group v-model="checkList">
                  <span style="display:inline-block; margin:20px 20px">
                    <el-checkbox label="复选框 A">复选框 A</el-checkbox>
                    <el-checkbox label="复选框 B">复选框 B</el-checkbox>
                    <el-checkbox label="复选框 C">复选框 C</el-checkbox>
                    <el-checkbox label="复选框 D">复选框 D</el-checkbox>
                  </span>
                  <span style="display:inline-block; margin:20px 20px">
                    <el-checkbox label="复选框 E">复选框 E</el-checkbox>
                    <el-checkbox label="复选框 F">复选框 F</el-checkbox>
                    <el-checkbox label="复选框 G">复选框 G</el-checkbox>
                    <el-checkbox label="复选框 H">复选框 H</el-checkbox>
                  </span>
                </el-checkbox-group>
              </div>
              <label for>楼龄</label>
              <div>
                <el-checkbox-group v-model="checkList">
                  <span style="display:inline-block; margin:20px 20px">
                    <el-checkbox label="复选框 A">复选框 A</el-checkbox>
                    <el-checkbox label="复选框 B">复选框 B</el-checkbox>
                    <el-checkbox label="复选框 C">复选框 C</el-checkbox>
                    <el-checkbox label="复选框 D">复选框 D</el-checkbox>
                  </span>
                  <span style="display:inline-block; margin:20px 20px">
                    <el-checkbox label="复选框 E">复选框 E</el-checkbox>
                    <el-checkbox label="复选框 F">复选框 F</el-checkbox>
                    <el-checkbox label="复选框 G">复选框 G</el-checkbox>
                    <el-checkbox label="复选框 H">复选框 H</el-checkbox>
                  </span>
                </el-checkbox-group>
              </div>
              <label for>用途</label>
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
            </el-scrollbar>
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
export default {
  name: "MapFilter",
  components: {},
  props: ["text", "position", "active"],
  watch: {},
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
      // checkList: ["复选框 A", "复选框E"],
      // checkList: ["复选框 A", "复选框E"],
      formPrice: {
        lowPrice: "",
        highPrice: ""
      },
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 350px;
  // height: 40px;
  padding: 5px;
  background-color: white;
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
