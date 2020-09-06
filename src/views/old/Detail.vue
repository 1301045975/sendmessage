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
                    <el-button type="success" class="cbtn-bg">开始找房</el-button>
                </el-row>
            </div>
        </div>

        <el-container>
            <el-main style="margin-left: 150px;">
                <el-row>
                    <h1>{{property.proTitle}}</h1>
                </el-row>
                <el-row>
                    <span style="color:#606266;line-height: 30px;">房源维护时间：2020-08-26 </span><br>
                    <span style="color:#606266">房源编号：BJ2419320526553497600 </span>
                </el-row>
                <!--经纪人详情页                    -->
                <el-row style="margin-top: 20px;" :gutter="50">
                    <el-col :span="13" >
                        <div style="width:100%" >
                            <!--                                <el-image :src="src" style="width: 100%;height: 100%"></el-image>-->
                            <el-carousel :interval="4000" type="card"  height="400px">
                                <el-carousel-item
                                        v-for="(item,index) in imgs"
                                        :key="index">
                                    <img class="lunbo" :src="item.src" style="position:relative">
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-col>

                    <el-col :span="10"  height="400px" >
                        <div style ="width:100%">
                            <el-row>
                                <el-col>
                                    <span style="font-weight: bold;font-size: 30px;color: red">{{this.property.proPrice + this.property.proPriceType}}</span>
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
                                    <span style="color: #606266;line-height: 26px;">房屋朝向：<span>{{this.property.proDirection}}</span></span>
                                </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row >
                                <el-col :span="6">
                                    <el-image style="width: 80px;height: 80px;border-radius: 50%" :src="src"></el-image>
                                </el-col>
                                <el-col :span="12">
                                    <el-row><h3>{{this.property.proCompanyName}}</h3></el-row>
                                    <el-row>链家经纪人</el-row>
                                    <el-row>电话：18281828</el-row>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24">
                                    <el-button type="success" size="medium">在线咨询</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>

                <el-divider></el-divider>
                <div style="position: relative">
                    <el-menu
                            :default-active="activeIndex1"
                            class="el-menu-demo"
                            mode="horizontal"
                            @select="handleSelect"
                            background-color="#f5f5f5"
                            text-color="#101d37"
                            active-text-color="red">
                        <el-menu-item index="1">房屋信息</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">房源描述</template>
                            <el-menu-item index="2-1">交通出行</el-menu-item>
                            <el-menu-item index="2-2">周边配套</el-menu-item>
                            <el-menu-item index="2-3">朝向坐标</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3">费用详情</el-menu-item>
                        <el-menu-item index="4">推荐经纪人</el-menu-item>
                        <el-menu-item index="5">地址和交通</el-menu-item>
                        <el-menu-item index="6">房产计算器</el-menu-item>
                        <el-button type="primary round" icon="el-icon-phone" style="margin-top:10px;margin-left: 30px">电话咨询</el-button>
                        <el-button type="primary round" icon="el-icon-user-solid" style="position: relative">预约看房</el-button>
                    </el-menu>

                </div>
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
                            <el-button type="primary" icon="el-icon-user-solid" size="normal">预约看房</el-button>
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
                <el-divider></el-divider>
                <el-row>
                    <h2>房产计算器</h2>
                    <calculator_tool></calculator_tool>


                </el-row>
                <el-divider></el-divider>
                <el-row>
                    <h2>周边配套</h2>
                    <around class="around"/>
                </el-row>
                <el-divider></el-divider>
                <el-row>
                    <h2>推荐二手房</h2>
                    <Recommend :recomProperty="recomProperty"/>
                </el-row>
            </el-main>
        </el-container>
        <my-footer></my-footer>
    </div>
</template>

<script>
import houseApi from "@/api/house";
import oldHouseApi from "@/api/oldhouse";
import searchHouse from "@/views/old/Index"
import calculator_tool from "@/components/calculator_tool";


import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";
import Around from "@/components/Around";
import Recommend from "@/components/Recommend";

import {
    Swiper,
    Slide,
    SwiperFooter,
    SwiperFooterSlide
} from "@/components/common/swiper";
import cost from "../../api/cost";

export default {
    name: "OldDetail",
    components: {
        MyHeader,
        MyFooter,
        Swiper,
        Slide,
        SwiperFooter,
        SwiperFooterSlide,
        Around,
        Recommend,
        calculator_tool
    },
    data() {
        return {
            proId: -1,
            searchContent: "",
            recomProperty: [],
            imgs:[
                {src: require("../../assets/img/bg-app.jpg")},
                {src: require("../../assets/img/banner.jpg")},
                {src: require("../../assets/img/bg-login.jpg")},
                {src: require("../../assets/img/bannerV2.jpg")},
                {src: require("../../assets/img/bg-login.jpg")},
            ],
            src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            activeIndex2:'1',
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            property: {
                proTitle: ''
            },
            activeName: 'first',
            loading: true
        };
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            this.proId = this.$route.query.proId;
            houseApi.getProDetail(this.proId, "chengdu").then(res => {
                this.property.proTitle = res.data.proTitle;
                this.property.proAddr = res.data.proAddr;
                this.property.proArea = res.data.proArea;
                this.property.proCompanyName = res.data.proCompanyName;
                this.property.proCompleteYear = res.data.proCompleteYear;
                this.property.proDirection = res.data.proDirection;
                this.property.proDistrict = res.data.proDistrict;
                this.property.proEstateName = res.data.proEstateName;
                this.property.proLat = res.data.proLat;
                this.property.proLng = res.data.proLng;
                this.property.proPrice = res.data.proPrice;
                this.property.proPriceType = res.data.proPriceType;
            }).catch(err => {
                console.log(err)
            });
            oldHouseApi.getRecommend("出售", "chengdu", 1, 4).then(res => {
                this.recomProperty = res.data.list;
            }).catch(err => {
                console.log(err)
            })
            // this.property = property;
        },
        handlePrevSlide() {
            this.$refs.swiper.prevSlide();
            this.$refs.swiperFooter.prevSlide();
        },
        handleNextSlide() {
            this.$refs.swiper.nextSlide();
            this.$refs.swiperFooter.nextSlide();
        },
        hanleSlideTo(index) {
            this.$refs.swiper.slideTo(index);
            this.$refs.swiperFooter.slideTo(index);
            
        },
        handleSlideToIndex(index){
            this.$refs.swiper.slideTo(index);
            this.imgActiveIndex = index;
        }
    }
};
</script>

<style scoped>
.favor-house {
    height: 4em;
}
.cheader {
    width: 100%;
    height: 100px;
    background: #f5f5f6;
}
.csearch {
    width: 100%;
}
.box-body {
    width: 60%;
    margin: 0 auto;
    padding: 20px;
}
.title {
    font-size: 2em;
}
.img-main {
    height: 100%;
    width: 100%;
}
.img-footer,
.prev-btn,
.next-btn {
    height: 5em;
    width: 8em;
    margin: 0.5em 0.5em 0 0;
    cursor: pointer;
}
.prev-btn {
    position: absolute;
    float: left;
    left: 0;
    display: block;
    width: 2em;
    cursor: pointer;
    color: #fff;
    background-color: #333;
    margin: 0.5em 0 0 0;
    z-index: 199;
}

.next-btn {
    position: absolute;
    float: right;
    right: 0;
    display: block;
    width: 2em;
    cursor: pointer;
    color: #fff;
    background-color: #333;
    margin: 0.5em 0 0 0;
    z-index: 199;
}

.img-active {
    border: 1px solid red;
}
</style>