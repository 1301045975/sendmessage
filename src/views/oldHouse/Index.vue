<template>
  <div>
    <newheader></newheader>
    <div class="cheader">
      <div style="width: 60%;margin: 0 auto;line-height: 100px">
        <el-row>
          <el-col
            :span="3"
            style="font-size: 28px;cursor: pointer;color: #00ae66;font-weight: bold"
          > 军军房产
          </el-col>
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
        <label>区域：</label>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="全部" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="成华" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="高新" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="高新西" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="金牛" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="锦江" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="龙泉驿" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="郫都" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="青羊" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="双流" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="天府新区" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="天府新区南区" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="温江" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="武侯" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="新都" true-label="1"
                     false-label="0"></el-checkbox>
      </el-row>
      <el-row class="crow">
        <label>售价：</label>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="全部" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="小于40万" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="40-50万" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="50-60万" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="60-80万" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="80-100万" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="100-120万" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="120-150万" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="150-200万" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="大于200万" true-label="1"
                     false-label="0"></el-checkbox>
      </el-row>
      <el-row class="crow">
        <label>面积：</label>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="全部" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="小于50m²" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="50-70m²" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="70-90m²" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="90-120m²" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="120-140m²" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="140-200m²" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="200-300m²" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="大于300m²" true-label="1"
                     false-label="0"></el-checkbox>
      </el-row>
      <el-row class="crow">
        <label>房型：</label>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="全部" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="1室" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="2室" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="3室" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="4室" true-label="1"
                     false-label="0"></el-checkbox>
        <el-checkbox style=" margin-left: 3px;margin-right: 3px;" label="大于4室" true-label="1"
                     false-label="0"></el-checkbox>
      </el-row>

      <div class="crow">
        <label>更多：</label>
        <dropdown_year style="margin-left: 10px;display: inline"></dropdown_year>
        <dropdown_type style="margin-left: 10px;display: inline"></dropdown_type>
        <dropdown_floor style="margin-left: 10px;display: inline"></dropdown_floor>
        <dropdown_direction style="margin-left: 10px;display: inline"></dropdown_direction>
        <dropdown_build style="margin-left: 10px;display: inline"></dropdown_build>
      </div>
    </div>
    <div style="width: 60%;margin: 0 auto;padding: 20px;display: block">
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
        <el-menu-item index="7" style="margin-left: 150px">
          <img src="../../assets/oldhouse/clean.png" height="20" width="20"/>
          <span>清空条件</span>
        </el-menu-item>
        <el-menu-item index="8">
          <img src="../../assets/oldhouse/save.png" height="20" width="20"/>
          <span>保存搜索</span>
        </el-menu-item>

      </el-menu>


      <el-row>
        <h2>共找到{{total}}套太原二手房</h2>
      </el-row>
      <el-divider></el-divider>
      <el-row style="width:100%">
        <el-col style="width:85%;float:left">
          <el-row
            :gutter="20"
            style="height: 200px;padding-top:20px;cursor:pointer;border-bottom: 1px #DCDFE6 solid"
            v-for="item in list"
            :key="item.id"
            @click.native="info(item.id)">
            <el-col :span="4" style="height: 100%;">
              <el-row style="height: 90%;">
                <el-image :src="item.house_image[0]" :lazy='true' style="height: 100%;"></el-image>
              </el-row>
            </el-col>
            <el-col :span="16">
              <el-row class="crow_list">
                <h2>{{item.house_title}}</h2>
              </el-row>
              <el-row style="margin-bottom: -20px">
                <span>{{item.small_area}}&nbsp;</span>
                <span>{{item.thingshi}}&nbsp;</span>
                <span>{{item.areas}}&nbsp;</span>
                <span>{{item.direction}}&nbsp; </span>
                <span>{{item.build}}&nbsp;</span>
                <span>{{item.floor}}&nbsp;</span>
              </el-row>
              <el-row style="margin-bottom: -20px">
                <span>{{item.floor_type}}&nbsp; </span>
                <span>{{item.build_time}} &nbsp;</span>
                <span>{{item.guapai_time}}&nbsp; </span>
                <span>{{item.times}}&nbsp; </span>
              </el-row>
              <el-row style="margin-bottom: -20px">
                <span><img src="../../assets/oldhouse/fresh_time.png" height="16" width="16"/>更新于: {{item.update_time}}&nbsp;&nbsp;</span>
                <span><img src="../../assets/oldhouse/company.png" height="16" width="16"/>{{item.company}}&nbsp;&nbsp;</span>
                <span><img src="../../assets/oldhouse/broker.png" height="16" width="16"/>{{item.broker}}</span>
              </el-row>
            </el-col>
            <el-col :span="4" style="height: 100%;">
              <span style="color:red;font-weight: bold;font-size: 28px">{{item.house_price}}万</span>
              <br/>
              <span style="line-height: 30px">{{item.unit_price}}<br/>单价 (元/m²)</span>
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
    <cfooter></cfooter>
  </div>
</template>

<script>
  import MyHeader from "@/components/common/MyHeader.vue";
  import MyFooter from "@/components/common/MyFooter.vue";
  import dropdown_year from "@/components/oldhouse/dropdown_year";
  import dropdown_type from "@/components/oldhouse/dropdown_type";
  import dropdown_floor from "@/components/oldhouse/dropdown_floor";
  import dropdown_direction from "@/components/oldhouse/dropdown_direction";
  import dropdown_build from "@/components/oldhouse/dropdown_build";
  import oldHouseApi from "@/api/oldhouse";

  export default {
    name: "index",
    components: {
      newheader: MyHeader,
      cfooter: MyFooter,
      dropdown_year: dropdown_year,
      dropdown_type: dropdown_type,
      dropdown_floor: dropdown_floor,
      dropdown_direction: dropdown_direction,
      dropdown_build: dropdown_build
    },
    data() {
      return {
        testImage:
          "http://117.51.142.27:9003/5eb404d9-76d8-4048-ad69-24ef1243fa67.jpg",
        activeIndex: "1",
        searchContent: "",
        list: [ {
          id: 1,
          house_title: '季柳园',
          company: '链家',
          broker: '何',
          build_time: '2016年建造',
          times: '带看 30 次',
          guapai_time: '2018-09-16',
          floor_type: '中楼层（共32层)',
          thingshi: '2室1厅',
          floor: '高层',
          small_area: '交大智能八期',
          build: '精装',
          direction: '南',
          areas: '101m²',
          update_time: '02-04-2020',
          house_image: ['https://image1.ljcdn.com/110000-inspection/pc1_1dyHlVnmw_1.jpg.296x216.jpg'],
          house_desc: '高层',
          rent_way: '整',
          house_type: '四合院',
          orientation: '东',
          area: '成都郫都区西方路',
          house_price: 100,
          unit_price: 10000
        }],
        total: 0, // 总记录数
        currentPage: 1, // 当前页
        pageSize: 10, // 每页大小
        searchMap: {} // 查询条件
      };
    },
    created() {
      if (this.$route.params.content) {
        this.searchMap = {
          "house_title": this.$route.params.content
        }
      }
      this.fetchData();
    },
    mounted() {
      console.log(this.$route.params.content)
      if (this.$route.params.content) {
        this.searchMap = {
          "house_title": this.$route.params.content
        }
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        //alert(keyPath);
      },
      fetchData() {
        oldHouseApi
          .search(this.currentPage, this.pageSize, this.searchMap)
          .then(response => {
            this.list = response.data.rows;
            this.total = response.data.total;
          });
      },
      info(id) {
        this.$router.push('/oldHouse/info/' + id)
      },
      searchHouse() {
        this.searchMap = {
          "house_title": this.searchContent
        }
        this.fetchData()
      }
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

  .crow_list {
    line-height: 0px;
  }

  .cbtn {
    border: none;
    border-radius: 0px;
  }

  span {
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    border-bottom: 2px solid transparent;
    color: #909399;
    margin-top: 0px;
  }
</style>
