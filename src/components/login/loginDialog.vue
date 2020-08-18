<template>
    <el-dialog :title="dialog.title" :width="width" :height="height" :visible.sync="dialog.show">
        <el-row v-show="loginShow">
            <el-row>
                <h2 style="color: #000">账号密码登录</h2>
            </el-row>
            <el-form autocomplete="on" :model="loginForm" :rules="formRules" ref="loginForm">
                <el-form-item label prop="telephone">
                    <el-input type="text" v-model="loginForm.telephone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label prop="password">
                    <el-input
                        type="password"
                        v-model="loginForm.password"
                        @keyup.enter.native="handleLogin"
                        placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="success"
                        :loading="loading"
                        @click.native.prevent="handleLogin"
                        class="cbtn-bg"
                    >立即登录</el-button>
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
            <el-form autocomplete="on" :model="registerForm" :rules="formRules" ref="registerForm">
                <el-form-item label prop="telephone">
                    <el-input type="text" v-model="registerForm.telephone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label prop="password">
                    <el-input
                        type="password"
                        v-model="registerForm.password"
                        @keyup.enter.native="handleRegis"
                        placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <el-form-item label prop="password2">
                    <el-input
                        type="password"
                        v-model="foo.password2"
                        @keyup.enter.native="handleRegis"
                        placeholder="确认密码"
                    ></el-input>
                </el-form-item>
                <el-form-item label prop="authCode">
                    <el-row :gutter="16">
                        <el-col :span="16">
                            <el-input
                                type="text"
                                v-model="registerForm.authCode"
                                @keyup.enter.native="handleRegis"
                                placeholder="验证码"
                            ></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-button
                                @click="handleSendAuthCode"
                                :disabled="!canSendAuthCode"
                            >{{authCodeMsg}}</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="success"
                        :loading="loading"
                        @click.native.prevent="handleRegis"
                        class="cbtn-bg"
                    >立即注册</el-button>
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
import { register, sendAuthCode } from "@/api/login";
import { validate11PhoneNum } from "@/utils/validate";

export default {
    name: "loginDialog",
    props: {
        width: {
            type: String,
            default: "480px"
        },
        height: {
            type: String,
            default: "600px"
        }
    },
    data() {
        const isValidate11PhoneNum = (rule, value, callback) => {
            if (!validate11PhoneNum(value)) {
                callback(new Error("请输入合法的手机号"));
            } else {
                callback();
            }
        };
        const isValidatePass = (rule, value, callback) => {
            if (value.length < 3) {
                callback(new Error("密码不能小于3位"));
            } else {
                callback();
            }
        };

        const isPasswordSame = (rule, _, callback) => {
            if (
                !this.loginShow &&
                this.foo.password2 != this.registerForm.password
            ) {
                callback(new Error("两次密码不一样"));
            } else {
                callback();
            }
        };

        const isValidAuthCode = (rule, value, callback) => {
            if (value.length < 4) {
                callback(new Error("验证码长度不会小于4"));
            } else {
                callback();
            }
        };

        return {
            loginForm: {
                telephone: "",
                password: ""
            },
            registerForm: {
                telephone: "",
                password: "",
                authCode: ""
            },
            formRules: {
                telephone: [
                    {
                        required: true,
                        trigger: "blur",
                        validator: isValidate11PhoneNum
                    }
                ],
                password: [
                    {
                        required: true,
                        trigger: "blur",
                        validator: isValidatePass
                    }
                ],
                password2: [
                    {
                        required: true,
                        trigger: "blur",
                        validator: isPasswordSame
                    }
                ],
                authCode: [
                    {
                        required: true,
                        trigger: "blur",
                        validator: isValidAuthCode
                    }
                ]
            },
            loading: false,
            dialog: {
                show: false,
                title: "登陆"
            },
            loginShow: true,
            foo: {
                password2: ""
            },
            authCodeMsg: "发送验证码",
            SendAgainInitSec: 60,
            sendAgainRemainSec: 60,
            intervalHandler: "",
            canSendAuthCode: true
        };
    },
    computed: {
        //
    },
    methods: {
        handleLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.$store.dispatch('Login', this.loginForm)
                    .then(() => {
                        // 获取用户信息
                        this.$store.dispatch('GetInfo')
                        .then(() => {
                            // 通知父组件登陆成功
                            this.noticeParentComp();
                            this.showDialog(false);
                            this.loading = false;
                        })
                        .catch(() => {
                            this.loading = false;
                        })
                    })
                    .catch(() => {
                        this.loading = false;
                    });
                } else {
                    console.log("validate failed...");
                    return false;
                }
            });
        },
        handleRegis() {
            this.$refs.registerForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    register(this.registerForm)
                        .then(response => {
                            this.$message({
                                message: response.message,
                                type: response.code == 200 ? "success" : "error"
                            });
                            // 切换至登陆
                            if(response.code == 200){
                                this.loginForm.telephone = this.registerForm.telephone;
                                this.loginForm.password = this.registerForm.password;
                                this.tabForm(1);
                            }
                        })
                        .catch(err => {})
                        .finally(() => {
                            this.loading = false;
                        });
                } else {
                    console.log("validate failed...");
                    this.loading = false;
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        tabForm(id) {
            if (id === 1) {
                this.dialog.title = "登陆";
                this.loginShow = true;
            }
            if (id === 2) {
                this.dialog.title = "注册";
                this.loginShow = false;
            }
        },
        forget() {
            alert("忘记密码");
        },
        showDialog(showFlg) {
            this.dialog.show = showFlg;
        },
        handleSendAuthCode() {
            if (!validate11PhoneNum(this.registerForm.telephone)) {
                return;
            }
            // 设置不可点击
            this.authCodeMsg = this.sendAgainRemainSec + "后重新发送";
            this.canSendAuthCode = false;
            // 定时器
            this.intervalHandler = setInterval(() => {
                this.sendAgainRemainSec -= 1;
                if (this.sendAgainRemainSec < 1) {
                    clearInterval(this.intervalHandler);
                    this.sendAgainRemainSec = this.SendAgainInitSec;
                    this.authCodeMsg = "发送验证码";
                    this.canSendAuthCode = true;
                } else {
                    this.authCodeMsg = this.sendAgainRemainSec + "后重新发送";
                }
            }, 1000);

            // 调用服务器发送验证码
            sendAuthCode(this.registerForm.telephone)
                .then(response => {
                    if (response.code == 200) {
                        this.$message.success("验证码已经发送到手机");
                    } else {
                        this.$message.error(response.message);
                    }
                })
                .catch(err => {});
        },
        // 通知父组件已经登陆
        noticeParentComp(){
            this.$emit('loginSuccess');
        }
    }
};
</script>



<style scoped>
.bg {
    background-image: url("../../assets/img/bg-login.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 700px;
    color: #e9eef3;
    padding-top: 150px;
}

.el-form-item__label {
    color: #000000;
}

.el-form-item__label {
    color: #e9eef3;
}

.cbtn-bg {
    width: 100%;
    height: 40px;
    font-size: 14px;
    background: #00ae66;
    border: none;
    border-radius: 0px;
}
</style>