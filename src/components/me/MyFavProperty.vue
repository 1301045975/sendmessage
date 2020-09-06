<template>
  <div>
    <!-- 表格 -->
    <el-table :data="propertyInfoArray" :height="containerHeight*0.8" border style="width: 100%">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="location" label="位置"></el-table-column>
      <el-table-column prop="countFT" label="室厅"></el-table-column>
      <el-table-column prop="houseArea" label="面积"></el-table-column>
      <el-table-column prop="salePrice" label="售价"></el-table-column>
      <el-table-column prop="rentPrice" label="租价"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            plain
            round
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页符 -->
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
  name: "MyFavProperty",
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
      containerHeight: 600,
      // 分页
      pageNum: 1,
      pageSize: 10,
      totalRecords: 0,
      tableData: [
        {
          title: "3室2厅，宽敞，靠近交大",
          location: "郫都-犀浦",
          ts: "3室2厅",
          area: "80m²",
          price: "120万元"
        },
        {
          title: "3室2厅，宽敞，靠近交大",
          location: "郫都-犀浦",
          ts: "3室2厅",
          area: "80m²",
          price: "8000元/月"
        }
      ],
      propertyInfoArray: [],
    };
  },
  computed: {
    ...mapGetters(["name", "imgurl", "mobile", "roles"])
  },
  filters: {
    formatTime(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
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
            if (data) {
              data.list.forEach((item, i) => {
                let propertyInfo = {};
                // 默认封面图片
                propertyInfo.coverImg = item.proCoverUrl
                  ? item.proCoverUrl
                  : this.defaultImg;
                // 详细页面链接
                propertyInfo.detailUrl = "#";
                // 标题
                propertyInfo.title = item.proTitle;
                // 位置
                propertyInfo.location = item.proDistrict + "-" + item.proArea;
                // x室y厅
                propertyInfo.countFT = item.proTitle.split("，")[0];
                // 面积
                propertyInfo.houseArea = item.proSquare + "m²";
                // 朝向
                propertyInfo.direction = item.proDirection;
                // 装修
                propertyInfo.decoration = item.proDecoration;
                // 楼层
                propertyInfo.floor =
                  item.proFloor + "(共" + item.proFloorAll + "层)";
                propertyInfo.completeYear = item.proCompleteYear + "建";
                propertyInfo.houseType = item.proType;
                propertyInfo.isSupportVR = true;
                propertyInfo.isAllowView = true;
                propertyInfo.isOverFiveYears = false;
                propertyInfo.salePrice = item.proPrice + item.proPriceType;
                propertyInfo.rentPrice = item.proRentPrice + item.proRentPriceType;
                propertyInfo.proId = item.proId;
                // console.log(str2Date(item.proCreateDate));
                this.propertyInfoArray.push(propertyInfo);
              });
            }
            this.loading = false;
            // console.log(this.propertyInfoArray);
          }
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
        cityCode: '510100'
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
    }
  }
};
</script>

<style scoped>
.mg_top {
  margin-top: 15px;
}
</style>
