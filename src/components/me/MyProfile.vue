<template>
  <div class="main-container" v-loading="loading" :text="loadingText">
    <el-tabs>
      <el-tab-pane label="上传头像">
        <el-card class="box-card">
          <el-upload
            class="avatar-uploader"
            :headers="imgUploadHeaders"
            :action="imgUploadUrl"
            :data="{telephone: mobile}"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-card>
      </el-tab-pane>
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
      <el-tab-pane label="修改密码">
        <el-card class="box-card">
          <el-form
            ref="pwdForm"
            status-icon
            :model="pwdForm"
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="旧密码" prop="oldPwd">
              <el-input placeholder="请输入旧密码" v-model="pwdForm.oldPwd" type="password"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPwd">
              <el-input placeholder="请输入新密码" v-model="pwdForm.newPwd" type="password"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="checkPwd">
              <el-input placeholder="请再次输入新密码" v-model="pwdForm.checkPwd" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('pwdForm')">立即修改</el-button>
              <el-button @click="resetForm('pwdForm')">重置</el-button>
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
    let validateOldPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    let validateNewPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!validatePassword(value)) {
        callback(new Error("密码必须包含字母和数字，且长度不能小于6位"));
      } else if (this.pwdForm.oldPwd === this.pwdForm.newPwd) {
        callback(new Error("新旧密码一致"));
      } else {
        callback();
      }
    };
    let validateCheckPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.pwdForm.newPwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
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
      pwdForm: {
        oldPwd: "",
        newPwd: "",
        checkPwd: "",
        telephone: ""
      },
      rules: {
        oldPwd: [{ validator: validateOldPwd, trigger: "blur" }],
        newPwd: [{ validator: validateNewPwd, trigger: "blur" }],
        checkPwd: [{ validator: validateCheckPwd, trigger: "blur" }]
      },
      loading: false,
      loadingText: "正在加载，请稍后..."
    };
  },
  computed: {
    ...mapGetters(["name", "imgurl", "mobile"])
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      // console.log(this.imageUrl);
      this.$message.success("上传成功");
      // 重新拉去用户信息
      this.refreshUserInfo();
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是JPG或PNG格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过2MB!");
      }
      return isJPG && isLt2M;
    },
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
      if (formName === "pwdForm") {
        // console.log("pwd");
        this.$refs[formName].validate(valid => {
          if (valid) {
            // 字段校验通过，向后台发送请求
            this.loading = true;
            this.pwdForm.telephone = this.mobile;
            updatePwd(this.pwdForm)
              .then(res => {
                let data = res.data;
                if (data.code === 200) {
                  this.$message.success("修改成功");
                  this.resetForm(formName);
                  // this.refreshUserInfo();
                } else {
                  this.$message.error("修改失败");
                }
              })
              .catch(err => {
                console.log(err);
              })
              .finally(() => {
                this.loading = false;
              });
          } else {
            console.log("validate failed...");
            return false;
          }
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
