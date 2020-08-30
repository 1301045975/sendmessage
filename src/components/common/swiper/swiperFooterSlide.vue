<style>
    .wh_footer_slide {
        -ms-flex-negative: 0;
        flex-shrink: 0;
        z-index: 10;
        min-height: 32px;
    }

    .wh_footer_slide img {
        display: block;
    }
</style>
<template>
    <div class="wh_footer_slide" @click="clickSlide">
        <slot/>
    </div>
</template>
<script>
    export default {
        methods: {
            clickSlide() {
                this.$emit('click')
            }
        }
    }
</script>