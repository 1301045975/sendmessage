<template>
    <div style="width: 100%;">
        <el-container class="cbody" style="text-align: center">
            <div style="margin-top: 80px;margin-bottom: 80px">
                <h1>短信跟进平台</h1>
            </div>
            <div style="margin: 0 auto;width: 400px;height: auto;background-color: white;text-align: center">
                <el-row v-show="loginShow" style="margin-left: 30px;margin-right:30px ">
                    <el-row style="display:flex; align-items:center; ">
                        <el-col>
                            <h2 style="color: #000">账号密码登录</h2>
                        </el-col>
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
                            <el-button style="width: 100px"
                                       type="success"
                                       :loading="loading"
                                       @click.native.prevent="handleLogin"
                                       class="cbtn-bg"
                            >立即登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                    <el-row style="line-height: 30px;color: #376699;font-size: 14px;display: flex;justify-content: space-between">
                        <span style="cursor: pointer" @click="tabForm(2)">立即注册</span>
                    </el-row>

                </el-row>
                <el-row v-show="registerShow" style="margin-left: 30px;margin-right:30px ">
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
                        <!--                        <el-form-item label prop="groups">-->
                        <!--                            <el-select v-model="selected" placeholder="请选择分组">-->
                        <!--                                <el-option-->
                        <!--                                        v-for="item in options"-->
                        <!--                                        :key="item.value"-->
                        <!--                                        :label="item.label"-->
                        <!--                                        :value="item.value">-->
                        <!--                                </el-option>-->
                        <!--                            </el-select>-->
                        <!--                        </el-form-item>-->
                        <el-form-item>
                            <el-button
                                    style="width: 100px"
                                    type="success"
                                    :loading="loading"
                                    @click.native.prevent="handleRegis"
                                    class="cbtn-bg"
                            >立即注册
                            </el-button>
                        </el-form-item>
                    </el-form>
                    <el-row style="line-height: 30px;color: #376699;font-size: 14px;display: flex;justify-content: space-between">
                        <span style="cursor: pointer" @click="tabForm(1)">已有账号？登录</span>
                    </el-row>
                </el-row>

                <el-row v-show="forgetShow" style="margin-left: 30px;margin-right:30px ">
                    <el-row>
                        <h2 style="color: #000">重置密码</h2>
                    </el-row>
                    <el-form autocomplete="on" :model="forgetForm" :rules="formRules" ref="forgetForm">
                        <el-form-item label prop="telephone">
                            <el-input type="text" v-model="forgetForm.telephone" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item label prop="password">
                            <el-input
                                    type="password"
                                    v-model="forgetForm.password"
                                    @keyup.enter.native="handleForget"
                                    placeholder="请输入密码"
                            ></el-input>
                        </el-form-item>

                        <el-form-item label prop="password3">
                            <el-input
                                    type="password"
                                    v-model="foo.password3"
                                    @keyup.enter.native="handleForget"
                                    placeholder="确认密码"
                            ></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button
                                    style="width: 100px"
                                    type="success"
                                    :loading="loading"
                                    @click.native.prevent="handleForget"
                                    class="cbtn-bg"
                            >立即重置
                            </el-button>
                        </el-form-item>
                    </el-form>
                    <el-row style="line-height: 30px;color: #376699;font-size: 14px;display: flex;justify-content: space-between">
                        <span style="cursor: pointer" @click="tabForm(1)">已有账号？登录</span>
                        <span style="float: right;cursor: pointer" @click="tabForm(2)">注册账号</span>
                    </el-row>
                </el-row>
            </div>
        </el-container>
    </div>
</template>

<script>
    import {validate11PhoneNum, validatePassword} from "@/utils/validate";
    import qs from 'qs'

    export default {
        props: {
            width: {
                type: String,
                default: "480px"
            },
            height: {
                type: String,
                default: "480px"
            }
        },
        data() {
            const isValidate11PhoneNum = (rule, value, callback) => {
                if (!validate11PhoneNum(value)) {
                    callback(new Error("请输入合法的电话号码"));
                } else {
                    callback();
                }
            };
            const isValidatePass = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入密码"));
                } else if (!validatePassword(value)) {
                    callback(new Error("密码必须包含字母和数字，且长度不能小于6位"));
                } else {
                    callback();
                }
            };

            return {
                groupId: '',
                innernetIp: "",
                loginForm: {
                    telephone: "",
                    password: "",
                    result: ""
                },
                registerForm: {
                    telephone: "",
                    password: "",
                    authCode: "",
                },
                options: [{
                    value: '1',
                    label: '组1'
                }, {
                    value: '2',
                    label: '组2'
                }, {
                    value: '3',
                    label: '组3'
                }, {
                    value: '4',
                    label: '组4'
                }, {
                    value: '5',
                    label: '组5'
                }, {
                    value: '6',
                    label: '组6'
                }, {
                    value: '7',
                    label: '组7'
                }, {
                    value: '8',
                    label: '组8'
                }, {
                    value: '9',
                    label: '组9'
                }, {
                    value: '10',
                    label: '组10'
                }],
                selected: '',
                forgetForm: {
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
                    ]
                },
                loading: false,
                dialog: {
                    show: false,
                    title: "登录"
                },
                loginShow: true,
                registerShow: false,
                forgetShow: false,
                foo: {
                    password2: "",
                    password3: ""
                },
                intervalHandler: "",
                canSendAuthCode: true
            };
        },
        computed: {
            //
        },
        mounted() {
            this.innernetIp = process.env.VUE_APP_INNERNET_IP;
        },
        methods: {
            tabForm(id) {
                if (id === 1) {
                    this.dialog.title = "登录";
                    this.forgetShow = false;
                    this.registerShow = false;
                    this.loginShow = true;
                }
                if (id === 2) {
                    this.dialog.title = "注册";
                    this.forgetShow = false;
                    this.loginShow = false;
                    this.registerShow = true;
                }
            },
            handleRegis() {
                if (this.telephone === '') {
                    alert('用户名不能为空')
                    return
                }
                if (this.password === '') {
                    alert('密码不能为空')
                    return
                }

                var url = process.env.VUE_APP_URL+'register'
                //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
                this.$axios.post(url, qs.stringify({
                    telephone: this.registerForm.telephone,
                    password: this.registerForm.password,
                    groupId: this.selected
                }))
                    // axios({
                    //    url:'http://localhost:8083/login',
                    //    method:'post',
                    //    data: {
                    //      telephone: this.telephone,
                    //      password: this.password
                    //    }
                    //    }
                    //  )
                    .then(res => {
                        if (res.data.mydata === '注册成功') {
                            alert("注册成功");
                            this.loginForm.telephone = this.registerForm.telephone;
                            this.loginForm.password = this.registerForm.password;
                            this.tabForm(1);
                        } else {
                            alert("注册失败");
                            this.result = res.data.mydata
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            handleLogin() {
                if (this.loginForm.telephone === '') {
                    alert('用户名不能为空')
                    return
                }
                if (this.loginForm.password === '') {
                    alert('密码不能为空')
                    return
                }
                var url = process.env.VUE_APP_URL+'login'
                //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
                this.$axios.post(url, qs.stringify({
                    telephone: this.loginForm.telephone,
                    password: this.loginForm.password
                }))
                    .then(res => {
                        if (res.data.mydata === '管理员登录') {
                            this.$router.push({
                                path: "/detail",
                                name: "detail",
                            });
                        } else {
                            if (res.data.mydata !== '登录成功') {
                                alert(res.data.mydata + "hhhh")
                            }
                        }

                        if (res.data.mydata === '登录成功') {
                            this.$router.push({
                                path: "/detail",
                                name: "detail",
                            });
                            // this.$router.replace({path: '/detail'})
                        } else {
                            if (res.data.mydata !== '管理员登录') {
                                alert(res.data.mydata+"ggg")
                            }
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    };
</script>

<style lang="scss" scoped>
    .cbody {
        background-image: url("../../assets/img/bg.jpg");
        width: 100%;
        height: 800px;
        padding-top: 30px;
        background-position: center 0;
        background-attachment: fixed;
        display: block;
        position: relative;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

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
