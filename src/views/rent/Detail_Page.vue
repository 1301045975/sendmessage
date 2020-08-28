<template>
    <div>
        <my-header></my-header>
        <div class="cheader">
            <div style="padding-top: 30px">
                <el-row class="csearch" type="flex" justify="center">
                    <el-col
                            :span="2"
                            style="font-size: 28px;cursor: pointer;color: #00ae66;font-weight: bold"
                    >军军房产</el-col>
                    <el-col :span="8">
                        <el-input
                                placeholder="请输入内容"
                                v-model="searchContent"
                                class="input"
                                style="border-radius: 0px"
                        ></el-input>
                    </el-col>
                    <el-button type="success" class="cbtn-bg" @click="searchHouse">开始找房</el-button>
                </el-row>
            </div>
        </div>

        <el-container>
            <el-main style="margin-left: 150px;">
                <el-row>
                    <h1>整租·帅府园 1室1厅 东/西</h1>
                </el-row>
                <el-row>
                    <span style="color:#606266;line-height: 30px;">房源维护时间：2020-08-26 </span><br>
                    <span style="color:#606266">房源编号：BJ2419320526553497600 </span>
                </el-row>
<!--经纪人详情页                    -->
                    <el-row style="margin-top: 20px;" :gutter="50">
                        <el-col :span="14" >
                            <div style="width:100%;height:400px;">
                                <el-image :src="src" style="width: 100%;height: 100%"></el-image>
                            </div>
                        </el-col>
                        <el-col :span="10" >
                            <div style ="width:100%;height:400px;">
                                <el-row>
                                    <el-col>
                                        <span style="font-weight: bold;font-size: 30px;color: red">1000元/月</span>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 20px">
                                    <el-col>
                                        <el-tag type="danger" size="mini">近地铁</el-tag>
                                        <el-tag type="warning" size="mini" style="margin-left: 3px">水电气三通</el-tag>
                                        <el-tag size="mini" style="margin-left: 3px">有物管</el-tag>
                                    </el-col>
                                </el-row>
                                <el-divider></el-divider>
                                <el-row>
                                    <el-col>
                                        <span style="color: #606266;line-height: 26px;">房型：<span>高层户型</span></span>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col>
                                        <span style="color: #606266;line-height: 26px;">所在楼层：<span>16楼</span></span>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col>
                                        <span style="color: #606266;line-height: 26px;">房屋朝向：<span>向南</span></span>
                                    </el-col>
                                </el-row>
                                <el-divider></el-divider>
                                <el-row >
                                    <el-col :span="6">
                                        <el-image style="width: 80px;height: 80px;border-radius: 50%" :src="src"></el-image>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-row><h3>程飞飞</h3></el-row>
                                        <el-row>链家经纪人</el-row>
                                        <el-row>电话：18281828</el-row>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="24">
                                        <el-button type="success" size="medium" @click="sendMessage(agent.id)">在线咨询</el-button>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
<!--房屋基本信息                    -->
                <el-row>
                    <h2>房屋信息</h2>
                    <el-row>
                        <el-col :span="4">
                            <span>基本信息</span>
                        </el-col>
                        <el-col :span="6">
                            <el-row style="line-height: 30px;">房屋户型：三居室</el-row>
                            <el-row style="line-height: 30px;">租房方式：月付</el-row>
                            <el-row style="line-height: 30px;">委托人：飞飞程</el-row>
                            <el-row style="line-height: 30px;">房屋朝向：南北</el-row>
                            <el-row style="line-height: 30px;">房屋面积：362㎡</el-row>
                            <el-row style="line-height: 30px;">配套电梯：三部</el-row>

                        </el-col>
                        <el-col :span="6">
                            <el-row style="line-height: 30px;">所在楼层：17层</el-row>
                            <el-row style="line-height: 30px;">租期：六个月</el-row>
                            <el-row style="line-height: 30px;">取暖：有</el-row>
                            <el-row style="line-height: 30px;">燃气：有</el-row>
                            <el-row style="line-height: 30px;">用电：有</el-row>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px">
                        <el-col :span="4">
                            <span>看房</span>
                        </el-col>
                        <el-col :span="6">
                            <el-button type="primary" size="normal">预约看房</el-button>
                        </el-col>

                    </el-row>
                    <el-row style="margin-top: 20px">
                        <el-col :span="4">
                            <span>配套设施</span>
                        </el-col>
                        <el-col :span="2" style="text-align: center">
                            <el-row style="line-height: 40px"><i class="el-icon-circle-check" style="font-size:32px;width: 36px;height: 36px"></i></el-row>
                            <el-row>保险</el-row>
                        </el-col>

                        <el-col :span="2" style="text-align: center">
                            <el-row style="line-height: 40px"><i class="el-icon-help" style="font-size:32px;width: 36px;height: 36px"></i></el-row>
                            <el-row>电视</el-row>
                        </el-col>
                        <el-col :span="2" style="text-align: center">
                            <el-row style="line-height: 40px"><i class="el-icon-s-custom" style="font-size:32px;width: 36px;height: 36px"></i></el-row>
                            <el-row>物管</el-row>
                        </el-col>
                        <el-col :span="2" style="text-align: center">
                            <el-row style="line-height: 40px"><i class="el-icon-plus" style="font-size:32px;width: 36px;height: 36px"></i></el-row>
                            <el-row>商超</el-row>
                        </el-col>
                        <el-col :span="2" style="text-align: center">
                            <el-row style="line-height: 40px"><i class="el-icon-map-location" style="font-size:32px;width: 36px;height: 36px"></i></el-row>
                            <el-row>地铁</el-row>
                        </el-col>
                        <el-col :span="2" style="text-align: center">
                            <el-row style="line-height: 40px"><i class="el-icon-key" style="font-size:32px;width: 36px;height: 36px"></i></el-row>
                            <el-row><span>电子门锁</span></el-row>
                        </el-col>
                    </el-row>
                </el-row>
                <el-row>


                    <h2>房源描述</h2>
                    <el-row style="margin-bottom: 20px;">
                        <el-col :span="12" style="line-height: 28px">
                            【交通出行】
                            小区距离八通线通州北苑站986m（来源于百度地图） 公交车站（1）：复兴里：317路、802路、通22路、通2路、通43路 （2）后南仓：317路、802路、809路
                        </el-col>
                    </el-row>
                    <el-row style="margin-bottom: 20px;">
                        <el-col :span="12" style="line-height: 28px">
                            【周边配套】
                            小区北侧就是万达广场、万达宝贝王，万达影城，永辉超市，建行，国泰百货，东侧是潞河医院
                        </el-col>
                    </el-row>
                </el-row>
                <el-row style="margin-bottom: 20px">


                    <h2>费用详情</h2>
                    <el-row>
                        <h4>年租价 当租期不足1年时租金可能会上浮，详询管家</h4>
                    </el-row>
                    <el-row style="line-height: 44px;">
                        <el-col :span="4">付款方式</el-col>
                        <el-col :span="4">租金 (元/月)</el-col>
                        <el-col :span="4">押金 (元)</el-col>
                        <el-col :span="4">服务费 (元)</el-col>
                        <el-col :span="4">中介费 (元)</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">季付</el-col>
                        <el-col :span="4">2200</el-col>
                        <el-col :span="4">三个月</el-col>
                        <el-col :span="4">1000</el-col>
                        <el-col :span="4">3000</el-col>
                    </el-row>
                </el-row>
                <el-row>
                    <h2>推荐经纪人</h2><span>您可以通过拨打电话或在线咨询的方式联系经纪人</span>
                    <el-row style="line-height: 44px;margin-top: 20px;">
                            <el-card shadow="never">
                                <el-row>
                                    <el-col :span="6">
                                        <el-image :src="src" :fit="fit"></el-image>
                                    </el-col>
                                    <el-col :span="6">
                                        <span style="margin-left: 80px" >王大军</span><br>
                                        <span style="margin-left: 80px">评分:9.2 | 20次评价</span><br>
                                        <span style="margin-left: 80px">182818281828</span><br>
                                        <span style="margin-left: 80px"><el-button type="success" size="normal">在线咨询</el-button></span>
                                    </el-col>
                                </el-row>
                            </el-card>
                    </el-row>

                    <el-row>
                        <h2>地址和交通</h2>
                        <el-row>
                            <baidu-map>
                            </baidu-map>
                        </el-row>
                    </el-row>
                </el-row>
            </el-main>
        </el-container>
        <my-footer style="width:100% "></my-footer>
    </div>
</template>

<script type="text/javascript">
    import cheader from "@/components/cheader";
    import MyHeader from "@/components/common/MyHeader.vue";
    import MyFooter from "@/components/common/MyFooter.vue";
    export default {
        name: "Detail_Page",
        data () {
            return {
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                center: {lng: 0, lat: 0},
                zoom: 3
            }
        },
        methods :{
            handler ({BMap, map}) {
                console.log(BMap, map)
                this.center.lng = 116.404
                this.center.lat = 39.915
                this.zoom = 15
            }
        },
        components:{
            MyHeader,
            MyFooter,
            cheader
        },
        mounted() {
            console.log(this.$route.params.id)
        },
        created() {
            var id = this.$route.params.id;
            alert(id)
        }
    }
</script>

<style scoped>
    span{
        color: #606266;
    }
</style>
