<template>
  <div class="main-container" v-loading="loading" :text="loadingText">
    <el-tabs>
      <el-tab-pane label="上传本地头像">
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
      <el-tab-pane label="使用系统头像">
        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" /> -->
        <el-card class="box-card">
          <div>
            <el-upload
              class="avatar-uploader"
              :headers="imgUploadHeaders"
              :action="imgUploadUrl"
              :data="{telephone: mobile}"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :auto-upload="false"
              :disabled="true"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-button
              style="margin:10px 40px; width:120px; border-radius:20px"
              @click="uploadDefault()"
            >点击上传</el-button>
          </div>
          <div
            class="default-item"
            v-for="(item, index) in defaultImg"
            :key="'defaultImg' + index"
            @click="chooseImage(index)"
          >
            <img class="default-img" :src="item" />
          </div>
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
import axios from "axios";
// import pwdEncoder from "@/utils/passwordEncoder"
import { uploadDefaultImg } from "@/api/me";
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
      loadingText: "正在加载，请稍后...",
      defaultImg: [
        require("D:/Code/gitcode/extranet-web/src/assets/myprofile/head1.jpg"),
        require("D:/Code/gitcode/extranet-web/src/assets/myprofile/head2.jpg")
      ],
      imageUrl2: "",
      defaultImg2: [
        "/static/2020/defaultImg/head1.jpg",
        "/static/2020/defaultImg/head2.jpg"
      ]
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
    //选择默认头像
    chooseImage(index) {
      this.imageUrl = this.defaultImg[index];
      this.imageUrl2 = this.defaultImg2[index];
    },
    //上传默认头像
    uploadDefault() {
      uploadDefaultImg(this.imageUrl2, this.mobile).then(res =>{
        if(res.code == 200){
          this.refreshUserInfo();
          this.$message.success("上传成功");
        } 
      })
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
  box-shadow: 0 0 6px 0 rgba(13, 4, 9, 0.2);
  border: 1px dashed #d9d9d9;
  margin: 0 10px;
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
.el-card__body {
  display: flex;
  flex-direction: row;
}
.default-item {
  height: 180px;
  width: 180px;
  box-shadow: 0 0 6px 0 rgba(13, 4, 9, 0.2);
  margin: 0 10px;
  cursor: pointer;
}
.default-img {
  height: 178px;
  width: 178px;
}
.el-tabs__content {
  // border:2px solid gray;
}
</style>
 