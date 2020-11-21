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
<!--                        <el-menu-item  ><a @click="exit()">退出系统</a></el-menu-item >-->
<!--                    </div>-->
                    <el-menu-item style="position: absolute;right: 10px"><a @click="exit()">退出系统</a></el-menu-item >
                </el-menu>


                <el-row style="margin-left: 100px;margin-top:10px">
                    <el-col>
                        <el-select v-model="message_select" placeholder="请选择是否已发送短信" style="margin-right: 20px">
                            <el-option
                                    v-for="item in options0"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="dialog_select" placeholder="请选择是否已拨号" style="margin-right: 20px">
                            <el-option
                                    v-for="item in options1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="use_select" placeholder="请选择是否愿意使用我们的软件"
                                   style="margin-right: 20px;width: 260px">
                            <el-option
                                    v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input style="margin-left:10px;width: 300px" placeholder="请输入姓名、号码或备注"
                                  v-model="anotherCon"></el-input>
                        <el-button style="margin-left: 6px" icon="el-icon-search" @click="getBrokerList()"
                                   type="primary">查询</el-button>

                    </el-col>


                    <div style="margin-top: 50px;">
                        <el-col style="">
                            <div>
                                <el-table :data="brokerList" stripe style="border: 1px solid lightblue;width: 1160px;height: 100%">
                                    <!-- prop为tableData对象中的属性名 -->
                                    <el-table-column v-if="false" align="center" label="id" prop="id">
                                    </el-table-column>
                                    <el-table-column align="center" label="姓名" prop="brokerName">

                                    </el-table-column>
                                    <el-table-column align="center" label="号码" prop="brokerMobile"></el-table-column>
                                    <el-table-column align="center" label="是否已发送短信"
                                                     prop="brokerMessage">
                                        <template slot-scope="scope">
                                            {{scope.row.brokerMessage == 0 ? '未发送' : '已发送'}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column align="center" label="是否已拨号"
                                                     prop="brokerDialog">
                                        <template slot-scope="scope">
                                            {{scope.row.brokerDialog == 0 ? '未拨打' : (scope.row.brokerDialog == 1 ? '拨打未接':'拨打成功') }}
                                        </template>
                                    </el-table-column>
                                    <el-table-column align="center" label="是否愿意使用我们的软件"
                                                     prop="brokerUse">
                                        <template slot-scope="scope">
                                            {{scope.row.brokerUse == 0 ? '不愿意' : (scope.row.brokerUse == 1 ? '愿意':(scope.row.brokerUse == 2 ? '考虑中':'其他')) }}
                                        </template>
                                    </el-table-column>
                                    <el-table-column align="center" label="备注" prop="brokerRemark"></el-table-column>
                                    <el-table-column align="center">
                                        <template slot-scope="scope">
                                            <!-- handleEdit和handleDelete两个函数需要在vue实例的method中定义 -->
                                            <el-button icon="el-icon-edit" size="mini" type="primary"
                                                       @click="handleEdit(scope.$index, scope.row)">编辑
                                            </el-button>
                                        </template>
                                    </el-table-column>
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


        <el-dialog title="编辑经纪人信息" width="500px" style="width: auto" :visible="editagentForm" :modal-append-to-body='false' @close='quit()'>
            <el-form ref="editsForm" :model="editsForm" label-width="180px" label-position="left">
                <el-form-item label="姓名">
                    <el-input  style="width: auto" v-model="editsForm.agent_name" max-length="10"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input style="width: auto" v-model="editsForm.agent_phone" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="是否已发送短信">
                    <el-select v-model="editsForm.agent_send" placeholder="请选择是否已发送短信" style="margin-right: 20px">
                        <el-option
                                v-for="item in options3"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否已拨号">
                    <el-select v-model="editsForm.agent_dial" placeholder="请选择是否已拨号" style="margin-right: 20px">
                        <el-option
                                v-for="item in options4"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否愿意使用我们的软件">
                    <el-select v-model="editsForm.agent_use" placeholder="请选择是否愿意使用我们的软件"
                               style="margin-right: 20px;width: 260px">
                        <el-option
                                v-for="item in options5"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" style="width: auto;" v-model="editsForm.agent_remarks"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="brokerEdit()">确定</el-button>
                    <el-button @click="quit()">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import qs from "qs";

    export default {
        inject:['reload'],
        name: 'app',
        data() {
            return {
                isRouterAlive:true,
                editagentForm:false,
                brokerList: [],
                data_total:'',
                message_select: '',
                dialog_select: '',
                use_select: '',
                dialog_send:'',
                dialog_dial:'',
                dialog_use:'',
                anotherCon: '',
                currentPage:'1',
                pagesize:'10',
                options0: [{
                    value: '0',
                    label: '(未发送)'
                }, {
                    value: '1',
                    label: '(已发送)'
                }],
                options1: [{
                    value: '0',
                    label: '(未拨号)'
                }, {
                    value: '1',
                    label: '(拨号未接)'
                }, {
                    value: '2',
                    label: '(拨号成功)'
                }],
                options2: [{
                    value: '0',
                    label: '(不愿意)'
                }, {
                    value: '1',
                    label: '(愿意)'
                }, {
                    value: '2',
                    label: '(考虑中)'
                }, {
                    value: '3',
                    label: '(其他)'
                }],
                options3: [{
                    value: '0',
                    label: '(未发送)'
                }, {
                    value: '1',
                    label: '(已发送)'
                }],
                options4: [{
                    value: '0',
                    label: '(未拨号)'
                }, {
                    value: '1',
                    label: '(拨号未接)'
                }, {
                    value: '2',
                    label: '(拨号成功)'
                }],
                options5: [{
                    value: '0',
                    label: '(不愿意)'
                }, {
                    value: '1',
                    label: '(愿意)'
                }, {
                    value: '2',
                    label: '(考虑中)'
                }, {
                    value: '3',
                    label: '(其他)'
                }],
                editsForm:{
                    agent_name:'',
                    agent_phone:'',
                    agent_send:"",
                    agent_dial:'',
                    agent_use:'',
                    agent_remarks:''
                }
            }
        },
        mounted() {

        },
        created() {
            this.getAllCount();
            // var reg = new RegExp('\\d+')
            // this.currentPage = reg.exec(window.sessionStorage.getItem("currentPage"));
            // if(this.currentPage == null)
            // {
            //     this.currentPage = 1;
            // }
            this.getAllBrokers();
        },
        watch:{

        },
        methods: {
            //分页用到的一些方法
            handleSizeChange(size) {
                this.pagesize = size;
                if(this.message_select.length == 0 && this.dialog_select.length == 0 && this.use_select == 0 && this.anotherCon.length == 0){
                    this.getAllBrokers()
                }else{
                    this.getBrokerList()
                }
            },
            // 编辑框退出
            quit(){
                this.editagentForm = false;
            },
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage;
                if(this.message_select.length == 0 && this.dialog_select.length == 0 && this.use_select == 0 && this.anotherCon.length == 0){
                    this.getAllBrokers()
                }else{
                    this.getBrokerList()
                }
            },
            handleEdit(index,row){
                this.editsForm.agent_name = this.brokerList[index].brokerName
                this.editsForm.agent_dial = this.brokerList[index].brokerDialog
                this.editsForm.agent_phone = this.brokerList[index].brokerMobile
                this.editsForm.agent_send = this.brokerList[index].brokerMessage
                this.editsForm.agent_use = this.brokerList[index].brokerUse
                this.editsForm.agent_remarks = this.brokerList[index].brokerRemark
                this.editagentForm = true; //编辑信息模态框显示
            },
            //程序退出
            exit() {
                sessionStorage.removeItem("currentPage");
                this.$router.replace({path: '/'})
            },
            //修改经纪人
            brokerEdit(){
                var url = process.env.VUE_APP_URL+'update';
                var that = this;
                //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
                this.$axios.post(url, qs.stringify({
                    brokerMessage: this.editsForm.agent_send,
                    brokerDialog: this.editsForm.agent_dial,
                    brokerUse: this.editsForm.agent_use,
                    brokerRemark: this.editsForm.agent_remarks,
                    brokerMobile: this.editsForm.agent_phone
                })).then(res => {
                    this.quit()
                    var url = process.env.VUE_APP_URL+'selectAll';
                    var that = this;
                    //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
                    this.$axios.post(url, qs.stringify({
                        currentPage: that.currentPage,
                        pagesize: that.pagesize
                    })).then(res => {
                        window.sessionStorage.setItem("currentPage",JSON.stringify(this.currentPage))
                        if(this.message_select.length == 0 && this.dialog_select.length == 0 && this.use_select == 0 && this.anotherCon.length == 0){
                            this.getAllBrokers()
                        }else{
                            this.getBrokerList()
                        }
                    }).catch(error => {
                        alert(error)
                    });
                }).catch(error => {
                    alert(error)
                });
            },
            getBrokerList() {
                this.getSelectCount();
                var url = process.env.VUE_APP_URL+'select';
                var that = this;
                //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
                this.$axios.post(url, qs.stringify({
                    message_select: this.message_select,
                    dialog_select: this.dialog_select,
                    use_select: this.use_select,
                    other_con: this.anotherCon,
                    currentPage: this.currentPage,
                    pagesize: this.pagesize
                })).then(res => {
                    that.brokerList = res.data.selectBrokers;
                }).catch(error => {
                    alert(error)
                });
            },
            getAllBrokers() {
                var url = process.env.VUE_APP_URL+'selectAll';
                var that = this;
                //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
                this.$axios.post(url, qs.stringify({
                    currentPage: this.currentPage,
                    pagesize: this.pagesize
                })).then(res => {
                    that.brokerList = res.data.allBrokers;
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
            getAllCount() {
                var url = process.env.VUE_APP_URL+'selectCountById';
                var that = this;
                //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
                this.$axios.post(url, qs.stringify({
                })).then(res => {
                    that.data_total = res.data.count;
                }).catch(error => {
                    alert(error)
                });
            },
            getSelectCount(){
                var url = process.env.VUE_APP_URL+'selectCount';
                var that = this;
                //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
                this.$axios.post(url, qs.stringify({
                    message_select: this.message_select,
                    dialog_select: this.dialog_select,
                    use_select: this.use_select,
                    other_con: this.anotherCon
                })).then(res => {
                    that.data_total = res.data.count
                }).catch(error => {
                    alert(error)
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import url("http://unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
</style>
