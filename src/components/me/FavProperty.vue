<template>
  <div>
    <!-- 表格 -->
    <el-table :data="tableData" :height="containerHeight*0.8" border style="width: 100%">
      <el-table-column prop="ufpId" label="ufpId" width="180"></el-table-column>
      <el-table-column prop="ufpProId" label="ufpProId" width="180"></el-table-column>
      <el-table-column prop="ufpUsrId" label="ufpUsrId"></el-table-column>
      <el-table-column prop="ufpCtyCode" label="ufpCtyCode"></el-table-column>
      <el-table-column prop="ufpCreateDate" label="ufpCreateDate"></el-table-column>
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
import { getFavProperty } from "@/api/me";

export default {
  name: "FavProperty",
  mounted() {
    // mounted阶段无法vuex中拿到其中存储的值
    // console.log(this.mobile);
    // this.getTableData();
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
      getFavProperty(formData)
        .then(res => {
          if (res.code == 200) {
            let data = res.data;
            this.totalRows = data.total;
            this.tableData = data.list;
          } else {
            this.$message.error("数据获取失败");
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
