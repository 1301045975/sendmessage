<template>
  <div class="map-house-list">
    <!-- 详细信息 -->
    <div class="house-list">
      <!-- 列表显示结果 -->
      <div class="list-info" v-if="propertyInfoArray.length > 0">
        <ul>
          <li v-for="(item, index) in propertyInfoArray" :key="index">
            <img
              :src="item.proCoverUrl==null?defaultImg:item.proCoverUrl"
              @click="toDetail(item.proId)"
            />
            <div class="list-right-info" @click="toDetail(item.proId)">
              <span class="main-info">{{item.proTitle}} {{item.proArea}} {{item.proDistrict}}</span>
              <span
                class="sub-info"
              >{{item.proCountF}}室{{item.proCountT}}厅{{item.proCountW}}卫/{{item.proSquare}}m²/{{item.proDirection}}/{{item.proEstateName}}</span>
              <span class="price">
                <span class="total-price">{{item.proPrice}}{{item.proPriceType}}</span>
                {{item.proUnitPriceitem}}{{item.proUnitPriceType}}
              </span>
            </div>
            <div>
              <el-button size="mini" type="danger" plain round @click="handleDelete(index, item)">删除</el-button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <el-pagination
      @size-change="getTableData"
      @current-change="getTableData"
      :append-to-body="false"
      :current-page.sync="pageNum"
      :page-size.sync="pageSize"
      :page-sizes="[10,20,30]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalRecords"
    ></el-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { formatDate } from "@/utils/date";
import { getFavProperties, deleteFavPropertyV2 } from "@/api/me";

export default {
  name: "FavProperty",
  mounted() {
    // mounted阶段无法vuex中拿到其中存储的值
    // console.log(this.mobile);
    if (typeof this.mobile == "undefined" || this.mobile == "") {
      // console.log("null");
    } else {
      this.getTableData();
    }
  },
  update() {
    console.log(this.mobile);
  },
  watch: {
    // mobile发生变化是，此函数会执行
    mobile(newValue, oldValue) {
      // console.log("mobile change");
      if (typeof newValue == "undefined" || newValue == "") {
        // console.log("null");
      } else {
        this.getTableData();
      }
    }
  },
  data() {
    return {
      defaultImg: require("../../assets/img/noimg.jpg"),
      // 分页
      pageNum: 1,
      pageSize: 10,
      totalRecords: 0,
      propertyInfoArray: []
    };
  },
  computed: {
    ...mapGetters(["name", "imgurl", "mobile", "roles"])
  },
  methods: {
    handleSizeChange() {
      // console.log("handleSizeChange");
      this.getTableData();
    },
    handleCurrentChange() {
      // console.log("handleCurrentChange");
      this.getTableData();
    },
    getTableData() {
      let formData = {
        telephone: this.mobile,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      console.log(formData);
      getFavProperties(formData)
        .then(response => {
          if (response.code == 200) {
            let data = response.data;
            // 设置数据
            this.totalRecords = data.total;
            // 先清空
            this.propertyInfoArray.splice(0, this.propertyInfoArray.length);
            if (data.list) {
              data.list.forEach((item, i) => {
                this.propertyInfoArray.push(item);
              });
            }
          }
          // console.log(this.propertyInfoArray);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleDelete(index, row) {
      // console.log(index);
      // console.log(row);
      // console.log(row.ufpId);
      let formData = {
        propertyId: row.proId,
        telephone: this.mobile,
        cityCode: "510100"
      };
      // console.log(formData);
      deleteFavPropertyV2(formData)
        .then(res => {
          if (res.code == 200) {
            this.$message.success("删除成功");
            // 重新加载数据
            this.getTableData();
          } else {
            this.$message.error("删除失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    toDetail(proid) {
      console.log(proid + " toDetail");
      this.$router.push({
        path: "/old/detail",
        query: {
          proId: proid
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.map-house-list {
  z-index: 99;
  width: 40em;
  padding: 0.4em;
  border-radius: 0.2em;
  background-color: #fff;
  -webkit-transition: top 0.5s;
}
.showMoreInfo {
  i {
    &:hover {
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
  // height: 25em;
  .list-picker {
  }
  .list-info {
    // overflow-y: auto;
    // max-height: 25em;
    display: flex;
    flex-direction: column;
    padding: 0 0.7em;
    ul {
      padding: 0px;
    }
    li {
      display: flex;
      flex-direction: row;
      padding: 0.5em 0;
      list-style-type: none;
      height: 5em;
      background-color: #fff;
      border-bottom: 1px solid #f0f0f0;
      overflow: hidden;
      img {
        height: 5em;
        width: 7em;
      }
      .list-right-info {
        display: flex;
        flex-direction: column;
        padding-left: 0.9em;
        justify-content: space-between;
        .main-info {
          flex-wrap: nowrap;
          font-size: 1em;
          font-weight: bold;
        }
        .sub-info {
          font-size: 0.4em;
        }
        .price {
          font-size: 0.8em;
          color: gray;
        }
        .total-price {
          font-size: 1.2em;
          color: red;
        }
      }
    }
  }
}
.info-name {
  font-size: 1.1em;
  line-height: 0.9em;
}
.info-subinfo {
  color: gray;
  padding-top: 0.7em;
  font-size: 0.7em;
}
</style>
