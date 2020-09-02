<template>
    <div>
        <my-header></my-header>
        <div class="cheader">
            <div class="box-body">
                <el-row>
                    <el-col :span="16">
                        <p>这是标题：软件园 会龙公园旁 客厅带阳台大套二 位置安静</p>
                        <p>这是提示：123</p>
                    </el-col>
                    <el-col :offset="4" :span="4">
                        <el-button class="favor-house" size="medium">关注房源</el-button>
                        <br />
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
                            <img class="img-main" :src="imgUrl" />
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
                "https://image1.ljcdn.com/110000-inspection/pc1_vcEpfzgJg_1.jpg.710x400.jpg",
                "https://image1.ljcdn.com/110000-inspection/pc0_hTQIjDmR6_1.jpg.710x400.jpg",
                "https://image1.ljcdn.com/110000-inspection/pc0_rKiKXKOg7_1.jpg.710x400.jpg",
                "https://image1.ljcdn.com/110000-inspection/pc1_vcEpfzgJg_1.jpg.710x400.jpg",
                "https://image1.ljcdn.com/110000-inspection/pc0_hTQIjDmR6_1.jpg.710x400.jpg",
                "https://image1.ljcdn.com/110000-inspection/pc0_rKiKXKOg7_1.jpg.710x400.jpg",
                "https://image1.ljcdn.com/110000-inspection/pc1_vcEpfzgJg_1.jpg.710x400.jpg",
                "https://image1.ljcdn.com/110000-inspection/pc0_hTQIjDmR6_1.jpg.710x400.jpg",
                "https://image1.ljcdn.com/110000-inspection/pc0_rKiKXKOg7_1.jpg.710x400.jpg"
            ]
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