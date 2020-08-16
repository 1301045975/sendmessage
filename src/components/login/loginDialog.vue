<template>
<el-dialog :title="dialog.title" :visible.sync="dialog.show">
    <el-row v-show="loginShow">
      <el-row>
        <h2 style="color: #000">账号密码登录</h2>
      </el-row>
      <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm">
        <el-form-item label="" prop="username">
          <el-input type="text" v-model="loginForm.username" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="password" v-model="loginForm.password" @keyup.enter.native="handleLogin"
                    placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" :loading="loading" @click.native.prevent="handleLogin" class="cbtn-bg">立即登录
          </el-button>
        </el-form-item>
      </el-form>
      <el-row style="line-height: 30px;color: #376699;font-size: 14px">
        <span style="cursor: pointer" @click="tabForm(2)">立即注册</span>
        <span style="float: right;cursor: pointer" @click="forget">忘记密码</span>
      </el-row>
      <el-row style="text-align: center;color: #999999;font-size: 12px;line-height: 50px">
        <span style="cursor: pointer">我已阅读并接受 《军军房产用户服务协议》及 《军军房产隐私政策》</span>
      </el-row>
    </el-row>
    <el-row v-show="!loginShow">
      <el-row>
        <h2 style="color: #000">欢迎注册</h2>
      </el-row>
      <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm">
        <el-form-item label="" prop="username">
          <el-input type="text" v-model="loginForm.username" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="password" v-model="loginForm.password" @keyup.enter.native="handleRegis"
                    placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" :loading="loading" @click.native.prevent="handleRegis" class="cbtn-bg">立即注册
          </el-button>
        </el-form-item>
      </el-form>
      <el-row style="line-height: 30px;color: #376699;font-size: 14px">
        <span style="cursor: pointer" @click="tabForm(1)">已有账号？登录</span>
        <span style="float: right;cursor: pointer" @click="forget">忘记密码</span>
      </el-row>
      <el-row style="text-align: center;color: #999999;font-size: 12px;line-height: 50px">
        <span style="cursor: pointer">我已阅读并接受 《军军房产用户服务协议》及 《军军房产隐私政策》</span>
      </el-row>
    </el-row>
</el-dialog>
</template>

<script>
import userApi from "@/api/user";
import {validate11PhoneNum} from '@/utils/validate';

export default {
  name: "loginDialog",
  components: {
  },
  data(){
      const isValidate11PhoneNum = (rule, value, callback) => {
          if(!validate11PhoneNum(value)){
              callback(new Error('请输入合法的手机号'));
          }else{
              callback();
          }
      };
      const isValidatePass = (rule, value, callback) => {
        if (value.length < 3) {
          callback(new Error('密码不能小于3位'))
        } else {
          callback()
        }
      };

      return {
          loginForm:{
              username: '',
              password: ''
          },
          loginRules:{
              username:[{required: true, trigger: 'blur', validator: isValidate11PhoneNum}],
              password:[{required: true, trigger: 'blur', validator: isValidatePass}]
          },
          loading: false,
          dialog:{
              show: false,
              title: '登陆'
          },
          loginShow: true,

      };
  },
  computed:{
      //
  },
  methods:{
      handleLogin(){
          this.$refs.loginForm.validate(valid => {
              if(valid){
                  this.loading = true;
              }else{
                  console.log('validate failed...');
                  return false;
              }
          })
      },
      handleRegister(){
          this.$refs.loginForm.validate(valid => {
              if(valid){
                  this.loading = true;
              }else{
                  console.log('validate failed...');
                  return false;
              }
          })
      },
      resetForm(formName) {
          this.$refs[formName].resetFields();
      },
      tabForm(id) {
          if (id === 1) {
              this.dialog.title = '登陆';
              this.loginShow = true;
          }
          if (id === 2) {
              this.dialog.title = '注册';
              this.loginShow = false
          }
      },
      forget(){
          alert('忘记密码');
      },
      indexShow(){
          this.$router.push({path:'/'});
      },
      showDialog(showFlg){
          this.dialog.show = showFlg;
      }
  }
}
</script>



<style scoped>
  .bg {
    background-image: url("../../assets/img/bg-login.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 700px;
    color: #E9EEF3;
    padding-top: 150px;
  }

  .el-form-item__label {
    color: #000000;
  }

  .el-form-item__label {
    color: #E9EEF3;
  }

  .cbtn-bg {
    width: 100%;
    height: 40px;
    font-size: 14px;
    background: #00ae66;
    border: none;
    border-radius: 0px
  }
</style>