<template>
  <div class="main-container">
    <el-tabs>
      <el-tab-pane label="上传头像">
        <el-card class="box-card">
          <el-upload
            class="avatar-uploader"
          >
            <img class="avatar" />
          </el-upload>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="修改昵称">
        <el-card class="box-card">
          <el-form ref="form" label-width="80px">
            <el-form-item label="新昵称">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="修改密码">
        <el-card class="box-card">
          <el-form ref="updatePwdform" label-width="80px">
            <el-form-item label="旧密码">
              <el-input
                placeholder="请输入旧密码"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item label="新密码">
              <el-input
                placeholder="请输入新密码"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item label="新密码">
              <el-input
                placeholder="请再次输入新密码"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">立即修改</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "MyProfile"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-container {
  margin: 0 50px;
}
</style>
