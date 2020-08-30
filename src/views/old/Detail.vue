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
                        <el-button class="favor-house" size="medium">关注房源</el-button><br>
                        <p>100个人关注</p>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="box-body">
            <el-row>
                <el-col :span="16">
                    军军房产网 > 成都二手房 > 郫都区二手房 > 犀浦二手房 > 当前房源 
                </el-col>
                <el-col :span="8">房源发布机构 加入对比 分享此房源</el-col>
            </el-row>
            <el-row>
                <el-col :span="16">
                    <swiper ref="swiper" :autoPlay="true" :showIndicator="true">
                        <slide v-for="(imgUrl, index) in imgUrls" :key="'imgUrls' + index">
                            <img class="img-main" :src="imgUrl" />
                        </slide>
                    </swiper>
                    <swiper-footer ref="swiperFooter">
                        <swiper-footer-slide v-for="(imgUrl, index) in imgUrls" :key="'imgUrlsFooter' + index">
                            <img class="img-footer" :src="imgUrl" />
                        </swiper-footer-slide>
                    </swiper-footer>
                </el-col>
                <el-col :span="8">

                </el-col>
            </el-row>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyHeader from "@/components/common/MyHeader.vue";
import MyFooter from "@/components/common/MyFooter.vue";
import {Swiper, Slide, SwiperFooter, SwiperFooterSlide} from "@/components/common/swiper"

export default {
    name: "OldDetail",
    components: {
        MyHeader,
        MyFooter,
        Swiper,
        Slide,
        SwiperFooter,
        SwiperFooterSlide,
    },
    data() {
        return {
            imgUrls: ['https://image1.ljcdn.com/110000-inspection/pc1_vcEpfzgJg_1.jpg.710x400.jpg',
                    'https://image1.ljcdn.com/110000-inspection/pc0_hTQIjDmR6_1.jpg.710x400.jpg',
                    'https://image1.ljcdn.com/110000-inspection/pc0_rKiKXKOg7_1.jpg.710x400.jpg',
                    'https://image1.ljcdn.com/110000-inspection/pc1_vcEpfzgJg_1.jpg.710x400.jpg',
                    'https://image1.ljcdn.com/110000-inspection/pc0_hTQIjDmR6_1.jpg.710x400.jpg',
                    'https://image1.ljcdn.com/110000-inspection/pc0_rKiKXKOg7_1.jpg.710x400.jpg',
                    'https://image1.ljcdn.com/110000-inspection/pc1_vcEpfzgJg_1.jpg.710x400.jpg',
                    'https://image1.ljcdn.com/110000-inspection/pc0_hTQIjDmR6_1.jpg.710x400.jpg',
                    'https://image1.ljcdn.com/110000-inspection/pc0_rKiKXKOg7_1.jpg.710x400.jpg']
        };
    }
};
</script>

<style scoped>
.favor-house{
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
.title{
    font-size: 2em;
}
.img-main{
    height: 100%;
    width: 100%;
}
.img-footer{
    height: 6em;
    width: 10em;
    margin: 0.5em 0.5em 0 0;
}
</style>