<template>

    <div class="recommendContainer" :name="recommend">
        <el-row style="width: 100%;align-items: center;padding: 0 0 40px 40px">
            <el-col v-for="(item, i) in recomProperty" :key="i" :span=spanNumber>
                <div class="el-image" style="position: relative">
                    <img class="img-main" :src="imgUrl2.src"/>
                    <span style="height: 40px;width: 60px;color: white;background-color: #333333;position: absolute; left: 0px;top: 0px;text-align: center;line-height: 40px">150万</span>

                </div>
                <h3>{{item.proEstateName}}</h3>
                <el-row>
                    <span style="color: red">{{item.proSquare}} </span>&nbsp;
                    <span>2室一厅 </span>&nbsp;
                    <span>金科北路</span>
                </el-row>
            </el-col>
<!--            <el-col :span=spanNumber>-->
<!--                <div class="el-image" style="position: relative">-->
<!--                    <img class="img-main" :src="imgUrl2.src"/>-->
<!--                    <span style="height: 40px;width: 60px;color: white;background-color: #333333;position: absolute; left: 0px;top: 0px;text-align: center;line-height: 40px">150万</span>-->

<!--                </div>-->
<!--                <h3>交大智能八区</h3>-->
<!--                <el-row>-->
<!--                    <span style="color: red">101 ㎡</span>&nbsp;-->
<!--                    <span>2室一厅</span>&nbsp;-->
<!--                    <span>金科北路</span>-->
<!--                </el-row>-->
<!--            </el-col>-->
<!--            <el-col :span=spanNumber>-->
<!--                <div class="el-image" style="position: relative">-->
<!--                    <img class="img-main" :src="imgUrl2.src"/>-->
<!--                    <span style="height: 40px;width: 60px;color: white;background-color: #333333;position: absolute; left: 0px;top: 0px;text-align: center;line-height: 40px">150万</span>-->

<!--                </div>-->
<!--                <h3>交大智能八区</h3>-->
<!--                <el-row>-->
<!--                    <span style="color: red">101 ㎡</span>&nbsp;-->
<!--                    <span>2室一厅</span>&nbsp;-->
<!--                    <span>金科北路</span>-->
<!--                </el-row>-->
<!--            </el-col>-->
<!--            <el-col :span=spanNumber>-->
<!--                <div class="el-image" style="position: relative">-->
<!--                    <img class="img-main" :src="imgUrl2.src"/>-->
<!--                    <span style="height: 40px;width: 60px;color: white;background-color: #333333;position: absolute; left: 0px;top: 0px;text-align: center;line-height: 40px">150万</span>-->

<!--                </div>-->
<!--                <h3>交大智能八区</h3>-->
<!--                <el-row>-->
<!--                    <span style="color: red">101 ㎡</span>-->
<!--                    <span> 2室一厅</span>-->
<!--                    <span> 金科北路</span>-->
<!--                </el-row>-->
<!--            </el-col>-->
        </el-row>

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
        name: "Recommend",
        props: {
          recomProperty: Array
        },
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
                spanNumber: 6,
                imgActiveIndex: 0,
                autoPlay: true,
                imgUrl1:{src: require("../assets/img/noimg.jpg")},
                imgUrl2:{src: require("../assets/img/noimg.jpg")},
                imgUrl3:{src: require("../assets/img/noimg.jpg")},
                imgUrl4:{src: require("../assets/img/noimg.jpg")},

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



</style>