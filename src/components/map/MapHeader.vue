<template>
  <div class="main-container">
    <div class="headerChoice">
      <el-popover
        placement="top-start"
        title
        width="400"
        trigger="click"
        content="热门城市"
        :append-to-body="false"
        :disabled="true"
      >
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
    </div>
    <div class="headerChoice">
      <el-popover placement="bottom" width="150" trigger="click" content :append-to-body="false">
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
    </div>
    <div style="width:200px; height:24px">
      <el-input class="myinput" v-model="input" placeholder="输入您的目标地点">
        <el-button
          slot="append"
          icon="el-icon-search"
        ></el-button>
      </el-input>
    </div>
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
    this.getCurCity("510100");
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

<style >
.main-container {
  margin: 0;
  border: 0;
  width: 380px;
  font-size: 14px;
  /* height: 48px; */
  line-height: 24px;
  padding: 12px 16px;
  border-radius: 5px;
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center;
  z-index: 100;
}
.headerChoice {
  width: 70px;
  padding-left: 10px;
  font-size: 14px;
  cursor: pointer;
}
#logo {
  background-color: white;
}
.el-button {
  height: 24px;
  padding: 0;
}
.el-input {
  height: 24px;
  padding: 0;
}
.span {
  display: flex;
  align-items: center;
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
.myinput {
  display: inline-block;
  border: 0;
  margin: 0;
   width: 200px;
  float: left;
  font-size: 12px ;
  padding: 0;
  line-height: 24px ;
  height: 24px;
  display: flex;
  border:1px solid gray;  
}

.myinput .el-input__inner {
  border: 0;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
}
</style>
