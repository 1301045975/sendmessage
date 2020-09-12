<template>
  <div class="main-container">
    <el-row :gutter="0">
      <el-col :span="4">
        <el-popover placement="top-start" title width="400" trigger="click" content="热门城市" :append-to-body="false" :disabled="true">
          <div>
            <label for>
              <strong>热门城市</strong>
            </label>
            <span style="display:block; margin:10px 0">
              <el-button type="text" slot="reference" style="margin: 10px 20px">北京</el-button>
              <el-button type="text" slot="reference" style="margin: 10px 20px">上海</el-button>
              <el-button type="text" slot="reference" style="margin: 10px 20px">广州</el-button>
              <el-button type="text" slot="reference" style="margin: 10px 20px">深圳</el-button>
              <el-button type="text" slot="reference" style="margin: 10px 20px">成都</el-button>
            </span>
          </div>
          <el-button type="text" slot="reference">
            <i class="el-icon-location-outline"></i>
            {{ curCity }}
            <i class="el-icon-caret-bottom"></i>
          </el-button>
        </el-popover>
      </el-col>
      <el-col :span="5">
        <el-popover placement="bottom" width="150" trigger="click" content="" :append-to-body="false">
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
      <el-col :span="15">
        <el-input v-model="input" placeholder="输入您的目标地点">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import oldHouseApi from "@/api/oldhouse";

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
      curCity: "成都"
    };
  },
  created() {
    this.getCurCity('510100');
  },
  methods: {
    getCurCity(cityCode) {
      oldHouseApi
        .getByCityCode(cityCode)
        .then(response => {
          if (response.code == 200 && response.data) {
            let data = response.data;
            this.curCity = data.ctyName;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 410px;
  padding: 0.4em;
  border-radius: 0.2em;
  background-color: white;
  text-align: center;
  z-index:100;
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
