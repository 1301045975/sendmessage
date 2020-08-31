<template>
    <section :class="className" class="wh_footer_content">
        <div class="wh_footer_swiper_root">
            <div class="wh_pre_btn">
                <slot name="prevBtn"></slot>
            </div>
            <div class="wh_next_btn">
                <slot name="nextBtn"></slot>
            </div>
            <div class="wh_footer_swiper_items">
                <slot />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "swiperFooter",
    data() {
        return {
            slidesLength: 1,
            // 所有的图片
            slideDom: null,
            // 每张图片的大小
            imgWidth: 0,
            // 视野像素大小
            eyeWidth: 0,
            // 视野中所能容下的图片总数
            eyeNumImg: 0,
            className: "",
            dom: {},
            // 当前展示的是哪张图片
            index: 0,
            // 第几张图片为中间的图片
            // left | mid | right
            // 由此可以算出left = mid - 1
            // right = eyeNumImg - mid
            mid: 0,
            left: 0,
            right: 0,
            timer1: '',
        };
    },
    props: {
        //滑动所需要的时间
        autoPlay: {
            default: true
        },
        //一次滑动需要走多久
        duration: {
            default: 500
        },
        //两次滑动间隔的时间
        interval: {
            default: 2500
        }
    },
    mounted() {
        this.className = `wh_footer_swiper_${Math.random().toFixed(3) * 1000}`;
        // dom可能还没有更新，所以用setTimeout
        setTimeout(() => {
            // 初始化
            this.starDom();
            if (this.autoPlay) {
                this.setTime();
            }
        }, 50);
    },
    methods: {
        prevSlide() {
            this.index--;
            this.wh();
        },
        nextSlide() {
            this.index++;
            this.wh();
        },
        slideTo(index) {
            this.index = index;
            this.wh();
        },
        wh(type) {
            if (this.eyeNumImg < 2) return;
            if (this.autoPlay) {
                this.setTime();
            }
            this.index = (this.index + this.slidesLength) % this.slidesLength;
            this.dom.transition =
                type == "touch" ? "250ms" : this.duration + "ms";
            // console.log('index: ' + this.index);
            // console.log('left: ' + this.left);
            // console.log('right: ' + this.right);
            // console.log('eyeNumImg: ' + this.eyeNumImg);
            // 需要判断平移方式
            let right = this.slidesLength - this.index - 1;
            let delta = 0;
            // 可以将选中的图片放在中间(mid处)
            if (this.index >= this.left && right >= this.right) {
                delta = this.index - this.left;
            } else if (this.index >= this.left) {
                // 选中图片在right处
                delta = this.slidesLength - this.eyeNumImg;
            } else {
                // 选中图片在left处
                delta = 0;
            }
            delta = delta >= 0 ? delta : 0;
            this.setTransform(delta * this.imgWidth * -1);
            this.$emit('slideToIndex', this.index);
        },
        setTransform(num) {
            this.dom.transform = `translate3d(${num}px, 0px, 0px)`;
            this.dom["-webkit-transform"] = `translate3d(${num}px, 0px, 0px)`;
            this.dom["-ms-transform"] = `translate3d(${num}px, 0px, 0px)`;
        },
        starDom() {
            this.slideDom = document
                .querySelector("." + this.className)
                .getElementsByClassName("wh_footer_slide");
            this.slidesLength = this.slideDom.length;

            let prevBtnWidth = document
                .querySelector("." + this.className)
                .getElementsByClassName("wh_pre_btn");
            if (prevBtnWidth.length > 0 && prevBtnWidth[0].firstChild)
                prevBtnWidth = prevBtnWidth[0].firstChild.getBoundingClientRect()
                    .width;
            else prevBtnWidth = 0;
            if (this.slidesLength > 1) {
                // offsetWidth属性将会 round(四舍五入)为一个整数。
                // https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth
                // this.width = document.querySelector('.' + this.className).offsetWidth
                this.imgWidth = this.slideDom[0].getBoundingClientRect().width;
                this.eyeWidth =
                    document
                        .querySelector("." + this.className)
                        .getBoundingClientRect().width -
                    prevBtnWidth * 2;
                this.eyeNumImg = Math.floor(this.eyeWidth / this.imgWidth);
                this.mid = Math.floor((this.eyeNumImg + 1) / 2);
                this.left = this.mid - 1;
                this.right = this.eyeNumImg - this.mid;
                this.dom = document
                    .querySelector("." + this.className)
                    .getElementsByClassName("wh_footer_swiper_items")[0].style;
            }
        },
        setTime() {
            window.clearTimeout(this.timer1);
            this.timer1 = window.setTimeout(() => {
                if (this.autoPlay) {
                    this.index++;
                    this.wh();
                } else {
                    window.clearTimeout(this.timer1);
                }
            }, this.interval);
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

.wh_footer_swiper_root {
    display: inline-block;
}

.wh_footer_swiper_items {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -moz-transition-duration: 0s linear;
    -webkit-transition-duration: 0s linear;
    -o-transition-duration: 0s linear;
    transition-duration: 0s linear;
    margin: 0 2.5em 0 2.5em;
}
</style>