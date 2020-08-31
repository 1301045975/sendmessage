<template>
  <div>
    <!-- 表格 -->
    <el-table :data="tableData" :height="containerHeight*0.8" border style="width: 100%">
      <el-table-column prop="ufeId" label="ufeId" width="180"></el-table-column>
      <el-table-column prop="ufeEstId" label="ufeEstId" width="180"></el-table-column>
      <el-table-column prop="ufeUsrId" label="ufeUsrId"></el-table-column>
      <el-table-column prop="ufeCtyCode" label="ufeCtyCode"></el-table-column>
      <el-table-column label="ufeCreateDate">
        <template slot-scope="scope">{{scope.row.ufeCreateDate | formatTime}}</template>
      </el-table-column>
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
    <div class="block">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        :current-page.sync="pageIndex"
        layout="total, sizes, prev, pager, next"
        :total="totalRows"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { formatDate } from "@/utils/date";
import { getFavEstate, deleteFavEstate } from "@/api/me";

export default {
  name: "FavEstate",
  mounted() {
    // mounted阶段无法vuex中拿到其中存储的值
    // console.log(this.mobile);
    this.getTableData();
  },
  update() {
    console.log(this.mobile);
  },
  watch: {
    // mobile发生变化是，此函数会执行
    mobile(oldValue, newValue) {
      this.getTableData();
    }
  },
  data() {
    return {
      containerHeight: 600,
      pageIndex: 1,
      pageSize: 10,
      totalRows: 10,
      tableData: []
    };
  },
  computed: {
    ...mapGetters(["name", "imgurl", "mobile"])
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
        pageNum: this.pageIndex,
        pageSize: this.pageSize
      };
      // console.log(formData);
      getFavEstate(formData)
        .then(res => {
          if (res.code == 200) {
            let data = res.data;
            this.totalRows = data.total;
            // data.list.forEach((item, index) => {
            //   item.ufeCreateDate = item.ufeCreateDate.substring(0, 25) + '8' + item.ufeCreateDate.substring(26);
            //   console.log(item.ufeCreateDate);
            //   console.log(formatDate(new Date(item.ufeCreateDate), "yyyy-MM-dd hh:mm:ss"));
            // })
            this.tableData = data.list;
          } else {
            this.$message.error("数据获取失败");
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
        favEstateId: row.ufeId
      };
      // console.log(formData);
      deleteFavEstate(formData)
        .then(res => {
          if (res.code == 200) {
            this.$message.success("删除成功");
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
