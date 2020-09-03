<template>
    <div>
        <my-header></my-header>
        <div class="cheader">
            <div class="box-body">
                <el-row>
                    <el-col :span="16">
                        <h2 class="main">软件园 会龙公园旁 客厅带阳台大套二 位置安静</h2>
                        <p>软件园 停车场价钱另算</p>
                    </el-col>
                    <el-col :offset="4" :span="4">
                        <el-button class="favor-house" size="medium">关注房源</el-button>
                        <br/>
                        <p>100个人关注</p>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="box-body">
            <el-row>
                <el-col :span="16">军军房产网 > 成都二手房 > 郫都区二手房 > 犀浦二手房 > 当前房源</el-col>
                <el-col :span="8">房源发布机构 加入对比 分享此房源</el-col>
            </el-row>
            <el-row>
                <el-col :span="16">
                    <swiper ref="swiper" :autoPlay="false" :showIndicator="true">
                        <slide v-for="(imgUrl, index) in imgUrls" :key="'imgUrls' + index">
                            <img class="img-main" :src="imgUrl"/>
                        </slide>
                    </swiper>
                    <swiper-footer ref="swiperFooter" :autoPlay="autoPlay" @slideToIndex="handleSlideToIndex">
                        <div slot="prevBtn" class="prev-btn" @click="handlePrevSlide">&lt;</div>
                        <swiper-footer-slide
                                v-for="(imgUrl, index) in imgUrls"
                                :key="'imgUrlsFooter' + index"
                                @click="hanleSlideTo(index)"
                        >
                            <img
                                    :class="index == imgActiveIndex ? 'img-active img-footer' : 'img-footer'"
                                    :src="imgUrl"
                            />
                        </swiper-footer-slide>
                        <div slot="nextBtn" class="next-btn" @click="handleNextSlide">&gt;</div>
                    </swiper-footer>
                    <h2>房源信息</h2>
                    <el-divider></el-divider>
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
                    <el-divider></el-divider>
                    <el-row>
                        <el-col :span="4">
                            <span>交易属性</span>
                        </el-col>
                        <el-col :span="6">
                            <el-row style="line-height: 30px;">委托时间：2018-03-08</el-row>
                            <el-row style="line-height: 30px;">房屋用途：住宅</el-row>
                            <el-row style="line-height: 30px;">产权所有：共有</el-row>
                        </el-col>
                        <el-col :span="6">
                            <el-row style="line-height: 30px;">刷新时间：17层</el-row>
                            <el-row style="line-height: 30px;">产权日期：2016-03-10</el-row>
                            <el-row style="line-height: 30px;">抵押状态：无抵押</el-row>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <h2>房源特色</h2>
                    <el-divider></el-divider>
                    <h2>税收计算器</h2>
                    <el-divider></el-divider>
                    <h2>官方认证</h2>
                    <el-divider></el-divider>
                    <h2>周边配套</h2>
                    <el-divider>
                        <!--                        <around/>-->
                    </el-divider>
                </el-col>
                <el-col :span="8">
                    <div>
                        <span> 168万 </span>
                        <span> 19001元/平米 </span>
                    </div>
                    <el-divider></el-divider>
                </el-col>
            </el-row>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import MyHeader from "@/components/common/MyHeader.vue";
    import MyFooter from "@/components/common/MyFooter.vue";
    import Around from "@/components/Around";

    import {
        Swiper,
        Slide,
        SwiperFooter,
        SwiperFooterSlide
    } from "@/components/common/swiper";

    export default {
        name: "OldDetail",
        components: {
            MyHeader,
            MyFooter,
            Swiper,
            Slide,
            SwiperFooter,
            SwiperFooterSlide,
            Around
        },
        data() {
            return {
                imgActiveIndex: 0,
                autoPlay: true,
                imgUrls: [
                    {src: require("../../assets/img/bg-app.jpg")},
                    {src: require("../../assets/img/banner.jpg")},
                    {src: require("../../assets/img/bg-login.jpg")},
                    {src: require("../../assets/img/bannerV2.jpg")},
                    {src: require("../../assets/img/bg-login.jpg")},
                ],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            };
        },


        methods: {
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
            handleSlideToIndex(index) {
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