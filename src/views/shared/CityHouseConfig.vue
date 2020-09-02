<template>
  <div>
    <!-- 搜索框，按钮 -->
    <el-row :gutter="8" style="margin-top:6px; margin-bottom:6px">
      <el-col :span="6">
        <el-input v-model="searchName"
                  size="small"
                  placeholder="输入城市搜索"/>
      </el-col>
      <el-col :span="18">
        <el-button type="primary" size="small" icon="el-icon-search" @click="startSearch()">搜索
        </el-button>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="handleBtnAddOrUpdate(1)">
          添加
        </el-button>
        <el-button type="primary" size="small" icon="el-icon-edit" @click="handleBtnAddOrUpdate(0)">
          编辑
        </el-button>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="handleBtnAddOrUpdate(2)">
          复制
        </el-button>
        <el-button type="primary" size="small" icon="el-icon-refresh" @click="getTableData()">刷新
        </el-button>
        <el-button type="danger" size="small" icon="el-icon-delete" @click="handleBtnDelete()">删除
        </el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData"
              border
              highlight-current-row
              v-loading="loading"
              :height="containerHeight*0.8"
              @current-change="handleRowChanged">
      <el-table-column type="index"
                       width="50">
      </el-table-column>
      <el-table-column prop="cityName"
                       label="城市"
                       width="120">
      </el-table-column>
      <el-table-column prop="saleRange"
                       label="售价范围（万）">
      </el-table-column>
      <el-table-column prop="rentRange"
                       label="租金范围（元）">
      </el-table-column>
      <el-table-column prop="houseArea"
                       label="面积范围（m²）">
      </el-table-column>
      <el-table-column prop="houseType"
                       label="房型">
      </el-table-column>
    </el-table>
    <!-- 分页符 -->
    <div class="block">
      <el-pagination :page-sizes="[10, 20, 50, 100]"
                     :page-size="pageSize"
                     :current-page.sync="pageIndex"
                     layout="total, sizes, prev, pager, next"
                     :total="totalRows"
                     @size-change="handleSizeChange()"
                     @current-change="handleCurrentChange()">
      </el-pagination>
    </div>
    <!-- 添加弹出框 -->
    <el-dialog :title="dialogTitle"
               :visible.sync="dialogVisible">
      <el-row>
        <el-col :offset="2" :span="12">
          <el-input v-model="newCityHouseConfig.cityName" placeholder="城市名，如成都">
            <template slot="prepend">
              城市名
            </template>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="mg_top">
        <el-col :offset="2" :span="20">
          <el-input v-model="newCityHouseConfig.saleRange"
                    placeholder="售价范围（万），空格分隔，如：小于50 50-100 大于100">
            <template slot="prepend">
              售价范围（万）
            </template>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="mg_top">
        <el-col :offset="2" :span="20">
          <el-input v-model="newCityHouseConfig.rentRange"
                    placeholder="租金范围（元），空格分隔，如：小于500 500-1000 大于1000">
            <template slot="prepend">
              租金范围（元）
            </template>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="mg_top">
        <el-col :offset="2" :span="20">
          <el-input v-model="newCityHouseConfig.houseArea"
                    placeholder="面积范围（m²），空格分隔，如：小于40 40-80 大于80">
            <template slot="prepend">
              面积范围（m²）
            </template>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="mg_top">
        <el-col :offset="2" :span="12">
          <el-input v-model="newCityHouseConfig.houseType" placeholder="房型，空格分隔，几室，如：1室 2室 3室 大于3室">
            <template slot="prepend">
              房型
            </template>
          </el-input>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button v-show="dialogBtnAddVis" type="primary"
                   @click="addOrUpdateCityHouseConfig(1)">确 定
        </el-button>
        <el-button v-show="!dialogBtnAddVis" type="primary"
                   @click="addOrUpdateCityHouseConfig(0)">更 新
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "CityHouseConfig",
    data() {
      return {
        containerHeight: 600,
        admin: true,
        tableData: [],
        loading: false,
        searchName: '',
        dialogVisible: false,
        dialogBtnAddVis: true,
        dialogTitle: '添加城市房价配置',
        newCityHouseConfig: {
          cityName: '',
          saleRange: '',
          rentRange: '',
          houseArea: '',
          houseType: ''
        },
        editCityHouseConfig: {
          cityName: '',
          saleRange: '',
          rentRange: '',
          houseArea: '',
          houseType: ''
        },
        pageIndex: 1,
        pageSize: 10,
        selectedRow: null,
        totalRows: 0
      }
    },
    methods: {
      startSearch: function () {

      },
      getTableData: function (cityName = null) {

      },
      handleBtnAddOrUpdate: function (optType) {
        if (optType === 1) {
          this.dialogTitle = "添加城市房价配置";
          this.dialogBtnAddVis = true;
          for (let key in this.newCityHouseConfig) this.newCityHouseConfig[key] = '';
        } else if (optType === 0) { // 编辑
          if (this.selectedRow == null) return this.$message('请先选择要修改的行');
          this.dialogBtnAddVis = false;
          this.dialogTitle = "更新城市房价配置";
          for (let key in this.selectedRow) this.newCityHouseConfig[key] = this.selectedRow[key];
        } else if (optType === 2) { // 复制
          if (this.selectedRow == null) return this.$message('请先选择要复制的行');
          this.dialogBtnAddVis = true;
          this.dialogTitle = "添加城市房价配置";
          for (let key in this.selectedRow) this.newCityHouseConfig[key] = this.selectedRow[key];
        } else {
          return this.$message('optType有误');
        }
        this.dialogVisible = true;
      },
      handleBtnDelete: function () {
      },
      addOrUpdateCityHouseConfig: function (optType) {

      },
      checkCityHouseConfig: function (jsonData, callback) {
      },
      handleRowChanged: function (crrRow, oldRow) {
      },
      handleSizeChange: function () {
      },
      handleCurrentChange: function () {
      },
      handleClick: function () {
      }
    }
  }
</script>

<style scoped>
  .mg_top {
    margin-top: 15px;
  }
</style>
