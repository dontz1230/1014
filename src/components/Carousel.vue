<template>
    <div>
        <carousel :per-page="1" :autoplay="true" :loop="true">
            <slide v-for="(slide,index) in slider" :key="index">
                <div :style="{'background':`url(${slide.bg})`}"
                     class="slider">
                    <div class="slider-content">
                        <vue-typer :text='`${slide.msg}`'  caret-animation='smooth'></vue-typer>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import slide01 from '../assets/img/slide01.jpg'
import slide02 from '../assets/img/slide02.jpg'
import slide03 from '../assets/img/slide03.jpg'
import { VueTyper } from 'vue-typer'
export default {
    data(){
        return {
            slider:[
                {
                    msg:'12asasascsacascascacac3',
                    bg:slide01
                },
                {
                    msg:'12ascsacascasc3',
                    bg:slide02
                },
                {
                    msg:'12ascascsacsacac3',
                    bg:slide03
                }
                
            ]
        }
    },
    components:{
        Carousel,
        Slide,
        VueTyper
    }
}
</script>
<style lang="scss">
    * {
        padding:0;
        margin:0;
    }
    .slider {
        height: 90vh;
        width: auto;
        background-size: cover!important;
        background-repeat: no-repeat!important;
        position: relative;
        padding:0;

        > .slider-content {
            // writing-mode: vertical-lr;
            font-size: 2rem;
    }}

    
</style>