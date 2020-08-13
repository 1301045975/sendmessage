<template>
  <div class="main-container">
    <el-row :gutter="0">
      <el-col :span="6">
        <el-popover placement="top-start" title="" width="400" trigger="click" content="热门城市">
          <div>
            <label for="">热门城市</label>
            <span style="display:block; margin:10px 0">
              <el-button type="text" slot="reference" style="margin: 10px 20px">北京</el-button>
              <el-button type="text" slot="reference" style="margin: 10px 20px">上海</el-button>
              <el-button type="text" slot="reference" style="margin: 10px 20px">广州</el-button>
              <el-button type="text" slot="reference" style="margin: 10px 20px">深圳</el-button>
              <el-button type="text" slot="reference" style="margin: 10px 20px">成都</el-button>
            </span>
          </div>
          <el-button type="text" slot="reference">
            <i class="el-icon-location-outline"></i>成都
            <i class="el-icon-caret-bottom"></i>
          </el-button>
        </el-popover>
      </el-col>
      <el-col :span="6">
        <el-popover
          placement="bottom"
          width="150"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <div>
            <el-radio v-model="radioType" label="二手房">二手房</el-radio>
            <br />
            <br />
            <el-radio v-model="radioType" label="租房">租房</el-radio>
          </div>
          <el-button type="text" slot="reference">
            {{ radioType }}
            <i class="el-icon-caret-bottom"></i>
          </el-button>
        </el-popover>
      </el-col>
      <el-col :span="12">
        <el-input v-model="input" placeholder="输入您的目标地点">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MapHeader",
  components: {},
  props: ["text", "position", "active"],
  watch: {},
  data() {
    return {
      visible: false,
      input: "",
      radioType: "二手房",
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
  width: 400px;
  padding: 5px;
  border-radius: 2px;
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
</style>
