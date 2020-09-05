<template>
  <div class="map-house-list">
    <div class="title">
      共100个可选项
      <!-- 下拉更多 -->
      <div class="showMoreInfo" @click="showMore" >

        <i v-if="showList==0" class="el-icon-arrow-down"></i>
        <i v-else class="el-icon-arrow-up show-hand"></i>
      </div>
    </div>
    <div v-if="showList==1">
      <!-- 基本信息 -->
      <div class="base-info">
        <span class="info-name">{{estates.estateName}}</span>
        <span class="info-subinfo">塔楼 板楼 塔板结合 | 共30栋 15139户 | 2008年建成  <span style="color: red;font-size:1.4em;">6万</span></span>
      </div>
      <!-- 详细信息 -->
      <div class="house-list">
        <div>

        </div>
        <div>
          <ol>
            <li class="card-list" v-for="(x, index) in [1,2,3,4,5, 1, 1, 1]"
              :key="index"
            >
            <span>{{x}}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showList: 0
    };
  },
  props: ["ifShow","estates","eststeList"],

  watch: {
    estates(newValue, old){
      console.log(newValue);
    },
    ifShow(newValue, old) {
      console.log(newValue);
      if (newValue == 1) {
        this.showList = 1;
      }
    } 
  },

  methods: {
    showMore() {
      this.showList = this.showList ^ 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.map-house-list {
  width: 400px;
  padding: 5px;
  border-radius: 2px;
  background-color: #fff;
  -webkit-transition: top 0.5s; 
}
.title {
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  line-height: 2em;
  font-size: 0.9em;;
  border-bottom: 1px solid #f0f0f0;
}
.showMoreInfo {
  height:25px;
  // color: red;
  width: 25px;
  i{
    &:hover{
      cursor: pointer;
    }
  }
}

.base-info {
  height: 3em;
  display: flex;
  flex-direction: column;
    border-bottom: 1px solid #f0f0f0;
  padding: 0.7em 1em 0;
}

.house-list {
  height: 15em;
}
.info-name{
  font-size:1.1em;
  line-height: 0.9em;
}
.info-subinfo{
  color: gray;
  padding-top: 0.7em;
  font-size: 0.7em;
}
.card-list{
  height: 2.5em;
  background-color:red;
}
</style>