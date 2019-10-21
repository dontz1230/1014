<template>
    <div>
        <div class="slider-container">
            <div class="slide-mask">
                <img :src="require('../assets/img/slide00.png')" alt="">
            </div>

            <div class="sticker01">
                <img :src="require('../assets/img/boss01.png')" alt="">
            </div>

            <div class="sticker02">
                <img :src="require('../assets/img/boss02.png')" alt="">
            </div>
            
            <carousel :per-page="1" :autoplay="true" :loop="true">
                <slide v-for="(slide,index) in slider" :key="index" class="slide-box">
                    <div :style="{'background':`url(${slide.bg})`}"
                        class="slider">
                        <!-- <div class="slider-content">
                            <vue-typer :text='`${slide.msg}`'  caret-animation='smooth'></vue-typer>
                        </div> -->
                    </div>
                </slide>
            </carousel>
        </div>
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
                    msg:'油豆腐雞肉飯',
                    bg:slide01
                },
                {
                    msg:'牛肉麵',
                    bg:slide02
                },
                {
                    msg:'搬新家囉！',
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

    .sticker01 {
        position: absolute;
        bottom:0;
        left:0;
        z-index:3;
        width:300px;

        > img {
            width: 100%
        }
    }

    .sticker02 {
        position: absolute;
        bottom:0;
        right:0;
        z-index:3;
        width:300px;

        > img {
            width: 100%
        }
    }

    .slider-container {
        position: relative;
        height: 80vh;
        overflow: hidden;
        width:100%;
        background: #b6d679;
    }

    .slide-mask {
        overflow: hidden;
        position: absolute;
        top:0;
        z-index:1;
        height: 80vh;
        &::before {
                content: '歡迎來到：田園美食屋';
                font-size: 2rem;
                width: 400px;
                text-align: center;
                position: absolute;
                color:white;
                text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.76);
                top:50%;
                right:calc(50% - 200px);
                z-index:1;
            }
        
        > img {      
            height: 80vh;
            min-height:100%;
            position: relative;
            
            
        }
    }
    .slider {
        overflow: hidden;
        height: 80vh;
        width: 100%;
        background-size: cover!important;
        background-repeat: no-repeat!important;
        position: relative;
        padding:0;
        margin: auto;

        > .slider-content {
            // writing-mode: vertical-lr;
            bottom:40vh;
            position: absolute;
            font-size: 2rem;
    }
    
        
    }

    @media (max-width:768px){
        .slider-container {
         height: 50vh; 
        overflow: hidden;
        width:100%;
        background: #b6d679;
    }

    .slide-mask {
        overflow: hidden; 
        height: 50vh;      
        z-index:1; 

        &::before {
                content: '歡迎來到：田園美食屋';
                font-size: 1.5rem;
                width: 300px;
                position: absolute;
                text-align: center;
                color:white;
                text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.76);
                top:50%;
                right:calc(50vw - 150px);
                z-index:1;
            }
        > img {   
            transform: scale(1);
        }
    }
    .slider {
        overflow: hidden;
        position: relative;
         
        height: 50vh;  
        background-position: center;
        background-size: cover!important;
        background-repeat: no-repeat!important;
        padding:0;
        margin: auto;

        > .slider-content {
            // writing-mode: vertical-lr;
            font-size: 2rem;
    }}

        .sticker01 {
        left:-10vw;
        width:50vw;
    }

        .sticker02 {
            width:50vw;
        }
    }

    
</style>