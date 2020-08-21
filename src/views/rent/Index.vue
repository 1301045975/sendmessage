<template>
  <div>
    <newheader></newheader>
    <div class="cheader">
      <div style="width: 60%;margin: 0 auto;line-height: 100px">
        <el-row>
          <el-col
                  :span="3"
                  style="font-size: 28px;cursor: pointer;color: #00ae66;font-weight: bold"
          >万云互联</el-col>
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
            <span @click="send('/businessHouse')" style="color: #00ae66;">客服热线：110</span>
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
        <label style="font-weight: bold">区域</label>
        <el-checkbox :indeterminate="isIndeterminate4" v-model="checkAll4" @change="handleCheckAllChange4" style="margin-left:10px;margin-right:10px">全部</el-checkbox>
        <el-checkbox-group v-model="checkedDists" @change="handleCheckedDistsChange" style="display: inline;margin-left:10px;margin-right:7px">
          <el-checkbox v-for="dist in dists" :label="dist" :key="dist">{{dist}}</el-checkbox>
        </el-checkbox-group>
      </el-row>

      <el-row class="crow">
        <label style="font-weight: bold">租金</label>
        <el-checkbox :indeterminate="isIndeterminate3" v-model="checkAll3" @change="handleCheckAllChange3" style="margin-left:10px;margin-right:10px">全部</el-checkbox>
        <el-checkbox-group v-model="checkedRents" @change="handleCheckedRentsChange" style="display: inline;margin-left:10px;margin-right:7px">
          <el-checkbox v-for="rent in rents" :label="rent" :key="rent">{{rent}}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-row class="crow">
        <label style="font-weight: bold">售价</label>
        <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2" style="margin-left:10px;margin-right:10px">全部</el-checkbox>
        <el-checkbox-group v-model="checkedPrices" @change="handleCheckedPricesChange" style="display: inline;margin-left:10px;margin-right:7px">
          <el-checkbox v-for="price in prices" :label="price" :key="price">{{price}}</el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-row class="crow">
        <label style="font-weight: bold">房型</label>
        <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1" style="margin-left:10px;margin-right:10px">全部</el-checkbox>
        <el-checkbox-group v-model="checkedRts" @change="handleCheckedRtsChange" style="display: inline;margin-left:10px;margin-right:7px">
          <el-checkbox v-for="rt in rts" :label="rt" :key="rt">{{rt}}</el-checkbox>
        </el-checkbox-group>
      </el-row>

      <el-row class="crow">
        <label style="font-weight: bold">面积</label>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" style="margin-left:10px;margin-right:10px">全部</el-checkbox>
        <el-checkbox-group v-model="checkedAreas" @change="handleCheckedAreasChange" style="display: inline;margin-left:10px;margin-right:7px">
          <el-checkbox v-for="area in areas" :label="area" :key="area">{{area}}</el-checkbox>
        </el-checkbox-group>
      </el-row>

      <div class="more">
        <div class="ok101">
          <label style="font-weight: bold;font-family: 华文楷体">更多</label>
        </div>

        <div class="ok102" >
          <el-select v-model="more" collapse-tags multiple placeholder="付款方式" style="width:140px">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>

          </el-select>
        </div>
        <div class="ok103">
          <el-select v-model="more1" collapse-tags multiple placeholder="楼层" style="width:140px">
            <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div class="ok104">
          <el-select v-model="more2" collapse-tags multiple placeholder="朝向" style="width:140px">
            <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div class="ok105">
          <el-select v-model="more3" collapse-tags multiple placeholder="装修" style="width:140px">
            <el-option
                    v-for="item in options3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="ok106">
          <el-select v-model="more4" collapse-tags multiple placeholder="配置" style="width:140px">
            <el-option
                    v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
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
        <h2>共找到{{total}}套可租房源</h2>
      </el-row>

      <!--      <el-divider></el-divider>-->

      <!--信息详情页-->
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
                <el-image :src="item.image[0]" style="height: 100%;"></el-image>
              </el-row>
            </el-col>
            <el-col :span="16">
              <el-row>
                <h2>{{item.house_title}}</h2>
              </el-row>
              <el-row class="crow">
                <span>{{item.house_desc}}</span>
              </el-row>
              <el-row class="crow">
                <span>{{item.rent_way}}|</span>
                <span>{{item.type}}|</span>
                <span>{{item.orientation}}|</span>
                <span>{{item.city}}|{{item.county}}|{{item.address}}|</span>
              </el-row>
              <el-row class="crow">
                <span>0关注</span>
              </el-row>
            </el-col>
            <el-col :span="4" style="height: 100%;">
              <span style="color:red;font-weight: bold;font-size: 28px">{{item.rent}}元/月</span>
              <br />
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
  import newheader from "@/components/newheader";
  import cfooter from "@/components/cfooter";
  import renthouseApi from "@/api/resource";
  const AreaOptions = ['小于50㎡','50-70㎡','70-90㎡','90-120㎡','120-140㎡','140-200㎡','200-300㎡','大于300㎡'];
  const RtOptions=['一室','二室','三室','四室','五室及以上'];
  const PriceOptions=['200万以下','200-250万','250-300万','300-400万','400-500万'];
  const RentOptions=['小于500¥/M','500-1000','1000-2000','2000-3000','3000-5000','5000-8000','大于8000'];
  const DistOptions=['高新','成华','高新西区','金牛','锦江','龙泉驿','郫都','青羊','双流','天府新区','天府新区南区','温江','武侯','新都'];
  export default {
    name: "index",
    components: {
      newheader: newheader,
      cfooter: cfooter
    },
    data() {
      return {
        testImage:
                "http://117.51.142.27:9003/5eb404d9-76d8-4048-ad69-24ef1243fa67.jpg",
        searchContent: "",
        activeIndex: "1",
        // 绑定数据
        list: [{
          id:1,
          house_title:"郫都区犀浦镇校园路812号季柳园整租套二",
          image:["http://pic.68fc.com/Photo/sy/Property/1804111117251951B36B953477049458/180411114149EDE91F4122BDE36180C2.jpg"],
          house_desc:"干净卫生没有",
          rent_way:"整租",
          type:"地铁楼下",
          orientation:"坐东朝西",
          city:"成都市",
          county:"郫都区犀浦镇",
          address:"校园路812号季柳园5栋一单元4楼2号",
          rent:2000,
        }],
        options:[
          {
            value:'押一付一',
            lable:'1',
          },
          {
            value:'押一付三',
            lable:'2',
          },
          {
            value:'半年付',
            lable:'3',
          },
          {
            value:'一年一付',
            lable:'4',
          },
          {
            value:'免押金月付',
            lable:'5',
          },
        ],
        more:[],
        options1:[
          {
            value:'低区',
            lable:'1',
          },
          {
            value:'中区',
            lable:'2',
          },
          {
            value:'高区',
            lable:'3',
          },
        ],
        more1:[],
        options2:[
          {
            value:'朝南',
            lable:'1',
          },
          {
            value:'朝北',
            lable:'2',
          },
          {
            value:'朝中',
            lable:'3',
          },
          {
            value:'朝东',
            lable:'4',
          },
          {
            value:'朝西',
            lable:'5',
          },
          {
            value:'东西',
            lable:'6',
          },
          {
            value:'南北',
            lable:'7',
          },
          {
            value:'东南',
            lable:'8',
          },
          {
            value:'东北',
            lable:'9',
          },
          {
            value:'西南',
            lable:'10',
          },
          {
            value:'西北',
            lable:'11',
          },
        ],
        more2:[],
        options3:[
          {
            value:'精装',
            lable:'1',
          },
          {
            value:'中装',
            lable:'2',
          },
          {
            value:'简装',
            lable:'3',
          },
          {
            value:'清水',
            lable:'4',
          },
        ],
        more3:[],
        options4:[
          {
            value:'空房',
            lable:'1',
          },
          {
            value:'精装全配',
            lable:'2',
          },
        ],
        more4:[],
        total: 1, // 总记录数
        currentPage: 1, // 当前页
        pageSize: 10, // 每页大小
        searchMap: {} ,// 查询条件

        checkAll: false,
        checkAll1: false,
        checkAll2: false,
        checkAll3: false,
        checkAll4: false,
        checkedAreas:[],
        checkedRts:[],
        checkedPrices:[],
        checkedRents:[],
        checkedDists:[],
        rts:RtOptions,
        areas: AreaOptions,
        prices:PriceOptions,
        rents:RentOptions,
        dists:DistOptions,
        isIndeterminate: true,
        isIndeterminate1: true,
        isIndeterminate2: true,
        isIndeterminate3: true,
        isIndeterminate4: true,
      };
    },
    created() {
      if(this.$route.params.content){
        this.searchMap = {
          "house_title":this.$route.params.content
        }
      }
      this.fetchData();
    },

    methods: {
      handleCheckAllChange(val) {
        this.checkedAreas = val ? AreaOptions:[];
        this.isIndeterminate = false;
      },
      handleCheckedAreasChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.areas.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.areas.length;
      },

      handleCheckAllChange1(val) {
        this.checkedRts = val ? RtOptions:[];
        this.isIndeterminate1 = false;
      },
      handleCheckedRtsChange(value) {
        let checkedCount = value.length;
        this.checkAll1 = checkedCount === this.rts.length;
        this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.rts.length;
      },

      handleCheckAllChange2(val) {
        this.checkedPrices = val ? PriceOptions:[];
        this.isIndeterminate2 = false;
      },
      handleCheckedPricesChange(value) {
        let checkedCount = value.length;
        this.checkAll2 = checkedCount === this.prices.length;
        this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.prices.length;
      },

      handleCheckAllChange3(val) {
        this.checkedRents = val ? RentOptions:[];
        this.isIndeterminate3 = false;
      },
      handleCheckedRentsChange(value) {
        let checkedCount = value.length;
        this.checkAll3 = checkedCount === this.rents.length;
        this.isIndeterminate3 = checkedCount > 0 && checkedCount < this.rents.length;
      },

      handleCheckAllChange4(val) {
        this.checkedDists = val ?DistOptions:[];
        this.isIndeterminate4 = false;
      },
      handleCheckedDistsChange(value) {
        let checkedCount = value.length;
        this.checkAll4 = checkedCount === this.dists.length;
        this.isIndeterminate4 = checkedCount > 0 && checkedCount < this.dists.length;
      },





      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      fetchData() {
        renthouseApi
                .search(this.currentPage, this.pageSize, this.searchMap)
                .then(response => {
                  this.list = response.data.rows;
                  this.total = response.data.total;
                });
      },
      info(id) {
        this.$router.push('/rentHouse/info/'+id)
      },
      searchHouse(){
        this.searchMap = {
          "house_title":this.searchContent
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
  .ok101{
    display: inline;
  }
  .ok102{
    display: inline;
  }
  .ok103{
    display: inline;
  }
  .ok104{
    display: inline;
  }
  .ok105{
    display: inline;
  }
  .ok106{
    display: inline;
  }
</style>
