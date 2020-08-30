<template>
    <section class="wh_footer_content">
        <div :class="className" class="wh_footer_swiper">
            <el-button @click="prevSlide">&lt;</el-button>
            <div class="wh_footer_swiper">
                <slot />
            </div>
            <el-button @click="nextSlide">&gt;</el-button>
        </div>
    </section>
</template>

<script>
export default {
    name: "swiperFooter",
    data() {
        return {
            slidesLength: 1,
            width: 0,
            className: "",
            dom: {},
            index: 1
        };
    },
    props: {},
    methods: {
        prevSlide() {
            //
        },
        nextSlide() {
            //
        }
    }
};
</script>

<style scoped>
.wh_footer_content {
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 100%;
}

.wh_footer_swiper {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -moz-transition-duration: 0s linear;
    -webkit-transition-duration: 0s linear;
    -o-transition-duration: 0s linear;
    transition-duration: 0s linear;
}
</style>