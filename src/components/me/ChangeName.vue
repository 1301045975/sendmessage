<template>
  <div class="main-container" v-loading="loading" :text="loadingText">
    <el-tabs>
      <el-tab-pane label="修改昵称">
        <el-card class="box-card">
          <el-form ref="nameForm" label-width="80px" :model="nameForm">
            <el-form-item label="新昵称">
              <el-input v-model="nameForm.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('nameForm')">立即修改</el-button>
              <el-button @click="nameForm.name=''">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import store from "@/store";
import { getToken } from "@/utils/auth"; // 验权
import { mapGetters } from "vuex";
import { updateName, updatePwd } from "@/api/me";
import { validatePassword } from "@/utils/validate";
// import pwdEncoder from "@/utils/passwordEncoder"

export default {
  name: "MyProfile",
  mounted() {
    // console.log(getToken());
    // this.imgUploadHeaders = {
    //     Authorization: getToken()
    // };
  },
  data() {
    return {
      imageUrl: "",
      imgUploadUrl: process.env.VUE_APP_BASE_API_PORTAL + "/user/uploadImg",
      imgUploadHeaders: {
        Authorization: getToken()
      },
      nameForm: {
        name: "",
        telephone: ""
      },
      loading: false,
      loadingText: "正在加载，请稍后..."
    };
  },
  computed: {
    ...mapGetters(["name", "imgurl", "mobile"])
  },
  methods: {
    // 刷新用户信息
    refreshUserInfo() {
      if (getToken()) {
        store
          .dispatch("GetInfo")
          .then(res => {
            // 拉取用户信息
            this.loginOrRegis = this.name;
            this.logoutFlag = true;
          })
          .catch(err => {
            alert("获取用户信息失败");
          });
      } else {
        console.log("else");
      }
    },
    onSubmit(formName) {
      if (formName === "nameForm") {
        // console.log("name");
        this.loading = true;
        this.nameForm.telephone = this.mobile;
        // console.log(this.nameForm);
        updateName(this.nameForm)
          .then(res => {
            if (res.code === 200) {
              this.$message.success("修改成功");
              this.refreshUserInfo();
            } else {
              this.$$message.error("修改失败");
            }
          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-container {
  margin: 0 50px;
}
</style>
<style lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
