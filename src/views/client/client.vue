<template>
    <div style="width: 100%;" v-if="isRouterAlive" id="app">
        <el-container>
            <div>

                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-menu-item  ><a href="/detail" target="_blank">话务平台</a></el-menu-item >
                    <el-menu-item  ><a href="/client" target="_blank">业绩统计</a></el-menu-item >
<!--                    <div style="margin-right: -150px;display: flex;justify-content: flex-end">-->
<!--                        <el-menu-item style="position: absolute;right: 10px"><a @click="exit()">退出系统</a></el-menu-item >-->
<!--                    </div>-->
                    <el-menu-item style="position: absolute;right: 10px"><a @click="exit()">退出系统</a></el-menu-item >
                    <!--                    <div style="width: 400px;margin-right: 0px">-->
                    <!--&lt;!&ndash;                            <el-button icon="el-icon-refresh" @click="refresh()">刷新</el-button>&ndash;&gt;-->
                    <!--                        <el-button icon="el-icon-switch-button" @click="exit()">退出系统</el-button>-->
                    <!--                    </div>-->
                </el-menu>


                <el-row style="margin-left: 100px;margin-top: 10px">
                    <el-col>
<!--                        <el-select v-model="message_select" placeholder="请选择业务类型" style="margin-right: 20px">-->
<!--                            <el-option-->
<!--                                    v-for="item in options0"-->
<!--                                    :key="item.value"-->
<!--                                    :label="item.label"-->
<!--                                    :value="item.value">-->
<!--                            </el-option>-->
<!--                        </el-select>-->

                        <el-input style="margin-left:10px;width: 500px" placeholder="请输入编号、姓名"
                                  v-model="anotherCon"></el-input>
                        <el-button style="margin-left: 6px" icon="el-icon-search" @click="getBrokerList()"
                                   type="primary">查询</el-button>

                    </el-col>


                    <div style="margin-top: 50px">
                        <el-col style="">
                            <div>
                                <el-table :data="performanceList" stripe style="border: 1px solid lightblue;width: 1160px;height: 100%">
                                    <!-- prop为tableData对象中的属性名 -->
                                    <el-table-column v-if="false" align="center" label="id" prop="id">
                                    </el-table-column>
                                    <el-table-column width="100" align="center" label="排名" prop="perNum">
                                        <template scope="scope">
                                            <span>{{(currentPage-1)*pagesize+ scope.$index + 1}}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column width="300" align="center" label="编号" prop="perId">
                                    </el-table-column>
                                    <el-table-column width="150" align="center" label="姓名" prop="perName">
                                    </el-table-column>
                                    <el-table-column align="center" label="短信发送" prop="perGradeMessage">
                                    </el-table-column>
                                    <el-table-column align="center" label="电话拨打" prop="perGroupTel">
                                    </el-table-column>
                                    <el-table-column align="center" label="客户下载情况" prop="perGroupAgree">
                                    </el-table-column>
                                    <el-table-column align="center" label="客户注册情况" prop="perGroupLogon">
                                    </el-table-column>
<!--                                    <el-table-column align="center" label="备注" prop="brokerRemark"></el-table-column>-->
<!--                                    <el-table-column align="center">-->
<!--                                        <template slot-scope="scope">-->
<!--                                            &lt;!&ndash; handleEdit和handleDelete两个函数需要在vue实例的method中定义 &ndash;&gt;-->
<!--                                            <el-button icon="el-icon-edit" size="mini" type="primary"-->
<!--                                                       @click="handleEdit(scope.$index, scope.row)">编辑-->
<!--                                            </el-button>-->
<!--                                        </template>-->
<!--                                    </el-table-column>-->
                                </el-table>
                            </div>
                        </el-col>

                        <el-col>
                            <div class="block">
                                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                               :current-page="currentPage" :page-sizes="[10,20,30]"
                                               :page-size="pagesize"
                                               layout="total, sizes, prev, pager, next, jumper" :total="data_total">
                                </el-pagination>
                            </div>
                        </el-col>
                    </div>
                </el-row>
            </div>
        </el-container>


<!--        <el-dialog title="编辑经纪人信息" width="500px" style="width: auto" :visible="editagentForm" :modal-append-to-body='false' @close='quit()'>-->
<!--            <el-form ref="editsForm" :model="editsForm" label-width="180px" label-position="left">-->
<!--                <el-form-item label="经纪人编号">-->
<!--                    <el-input  style="width: auto" v-model="editsForm.agent_id" disabled="disabled"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="姓名">-->
<!--                    <el-input  style="width: auto" v-model="editsForm.agent_name" max-length="10"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="业绩">-->
<!--                    <el-input style="width: auto" v-model="editsForm.agent_grade" max-length="10"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="类型">-->
<!--                    <el-input style="width: auto" v-model="editsForm.agent_type" max-length="10"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="备注">-->
<!--                    <el-input type="textarea" style="width: auto;" v-model="editsForm.agent_remarks"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item>-->
<!--                    <el-button type="primary" @click="brokerEdit()">确定</el-button>-->
<!--                    <el-button @click="quit()">取消</el-button>-->
<!--                </el-form-item>-->
<!--            </el-form>-->
<!--        </el-dialog>-->
    </div>
</template>

<script>
    import qs from "qs";
    import {performanceSelect} from "../../api/login";

    export default {
        inject:['reload'],
        name: 'app',
        data() {
            return {
                isRouterAlive:true,
                editagentForm:false,
                brokerList: [],
                performanceList: [],
                data_total: 0,
                message_select: '',
                dialog_select: '',
                use_select: '',
                dialog_send:'',
                dialog_dial:'',
                dialog_use:'',
                anotherCon: '',
                currentPage: 1,
                pagesize: 10,
                perNum: 1,

                editsForm:{
                    agent_id:'',
                    agent_name:'',
                    agent_grade:'',
                    agent_type:'',
                    // agent_phone:'',
                    // agent_send:"",
                    // agent_dial:'',
                    // agent_use:'',
                    agent_remarks:''
                }
            }
        },
        mounted() {
            this.getAllBrokers();
        },
        created() {

        },
        watch:{

        },
        methods: {
            //分页用到的一些方法
            handleSizeChange(size) {
                this.pagesize = size;
                this.getAllBrokers()
            },
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage;
                this.getAllBrokers()
            },
            //程序退出
            exit() {
                sessionStorage.removeItem("currentPage");
                this.$router.replace({path: '/'})
            },
            //修改经纪人
            getAllBrokers() {
                var url = process.env.VUE_APP_URL+'perform/getAll';
                var that = this;
                //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
                this.$axios.post(url, qs.stringify({
                    currentPage: this.currentPage,
                    pageSize: this.pagesize
                })).then(res => {
                    that.performanceList = res.data.performance;
                    that.data_total = res.data.count;
                }).catch(error => {
                    alert(error)
                });
            },
            // refresh () {
            //     this.blur()
            //     if(this.message_select.length == 0 && this.dialog_select.length == 0 && this.use_select == 0 && this.anotherCon.length == 0){
            //         this.getAllBrokers()
            //     }else{
            //         this.getBrokerList()
            //     }
            // },
        }
    }
</script>

<style lang="scss" scoped>
    @import url("http://unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
</style>
