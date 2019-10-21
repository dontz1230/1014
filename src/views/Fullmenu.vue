<template>
    <div class="fullmenu-container">
        
        <section class="top">
            
            <div class="topimg">
                <img :src="require('../assets/img/fullmenu/top.jpg')" alt="">
            </div>
            <div class="toptext">
              <my-weather></my-weather>
            </div>
            <a class="scrollbtn" @click.prevent="scrolldown">
                </a>
            </section>

        <title-text>美味一覽</title-text>

        <section class="menus">
           <div class="dish" 
                v-for="(dish,index) in menu" :key="index">

               <div class="pic">
                   <img :src="dish.url" alt="">
               </div>
               <h2 class="title">
                   {{ dish.title }}
               </h2>
               <p class="desc">
                   {{ dish.desc }}
               </p>
               <div class="price">
                   {{ dish.price }}元
               </div>

           </div>
        </section>




        
    </div>
</template>

<script>
import topimg from '../assets/img/fullmenu/top.jpg'
import food01 from '../assets/img/fullmenu/salmon.jpg'
import food02 from '../assets/img/fullmenu/chickleg.jpg'
import food03 from '../assets/img/fullmenu/deepfried.jpg'
import food04 from '../assets/img/fullmenu/panfried.jpg'
import food05 from '../assets/img/fullmenu/nuggets.jpg'
import food06 from '../assets/img/fullmenu/tofu.jpg'
import food07 from '../assets/img/fullmenu/cheese.jpg'
import myWeather from '../components/Weather.vue'

export default {
    mounted(){
        const thispage = document.querySelector('.fullmenu-container');
        thispage.style.opacity = 0;
        thispage.style.transition = 'all 1s ease-in';
        setTimeout(() => {
            thispage.style.opacity = 0.8;
        },500)
    },
    components:{
        myWeather
    },
    data(){
        return {
            menu:[
                {
                    url: food01,
                    title: '香煎鮭魚飯',
                    price: '160',
                    desc: '新鮮鮭魚肉，以青蔥、辣椒、薑絲香煎。鮭魚肉絲鮮嫩細緻，兼具營養和美味。'
                },
                {
                    url: food02,
                    title: '古早味煎雞腿',
                    price: '160',
                    desc: '田園特調蒜香古早味醬汁，淋在手工去骨鮮嫩雞腿肉上。'
                },
                {
                    url: food03,
                    title: '酥炸豬排飯',
                    price: '130',
                    desc: '田園手打豬排，裹上薄博的麵衣，酥炸過後皮脆肉嫩，仍保留肉汁鮮甜。'
                },
                {
                    url: food04,
                    title: '香煎豬排飯',
                    price: '130',
                    desc: '田園手打豬排，裹上濃濃蛋汁，以香煎方式呈現。肉質軟嫩好入口。'
                },
                {
                    url: food05,
                    title: '酥炸椒鹽雞飯',
                    price: '160',
                    desc: '以手工去骨，保留雞肉最Q彈多汁的雞腿肉。輕薄麵衣酥脆而不搶戲。'
                },
                {
                    url: food06,
                    title: '油豆腐雞肉飯',
                    price: '160',
                    desc: '去骨雞腿肉浸泡在田園特製醬汁中，撒上青蔥、酥脆油豆腐。'
                },
                {
                    url: food07,
                    title: '藍帶起司豬排飯',
                    price: '160',
                    desc: '厚實的手打豬排中，夾著美味的秘密：起司。綿密的起司與豬排肉汁相輔相成。'
                }
                
            ]
        }
    }
}
</script>
<style lang="scss">

@media (min-width: 768px) {
    .fullmenu-container {

        .menus {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            max-width: 1200px;
            width: calc(100% - 40px);
            overflow: hidden;
            grid-gap:50px;
            margin:auto;
            padding:0;

            .dish {
                display: flex;
                flex-direction: column;
                align-items: center;
                .pic {
                    width:100%;
                    border-radius: 20px;

                    > img {
                        width:100%;
                        border-radius: 10px;
                        box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
                    }
                }

                .title {
                    padding: 20px 0;
                    position: relative;
                    &::before{
                        content: '';
                        position: absolute;
                        z-index: 3;
                        top:10px;
                        left:-50%;
                        width:200%;
                        height:50px;
                        border-bottom:1px dotted black;
                    }
                }

                > .desc {
                    padding: 20px 0;
                    
                }
            }
        }

        .top {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height:100vh;
            overflow: hidden;

            .topimg {
                position: relative;
                overflow: hidden;
                height: 100vh;
                width: 100%;
                    &::before {
                    content: '';
                    position: absolute;
                    z-index:2;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    background: rgba(0,0,0,0.3);
                }

            > img {
                position: absolute;
                left: -100%;
                right: -100%;
                bottom: 0;
                margin: auto;
                width: auto;
                height: auto;
                min-width: 100%;
                min-height: 100%;            
            }
        }
            }
    }
    
     .toptext {
            text-align: center;
            position: absolute;
            top:25vh;
            z-index:4;
            animation: weatherAPI 2s infinite ease;
            ;
            
        }

        @keyframes weatherAPI {
    0% { transform: scale(1); }
    50%   { transform: scale(1.1); }
    100%   { transform: scale(1); }
    }
}


/* MOBILE */

@media (max-width: 768px) {
       .fullmenu-container {

        .menus {
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 1200px;
            width: calc(100% - 40px);
            overflow: hidden;
            grid-gap:20px;
            margin:auto;
            padding:0;

            .dish {
                margin-bottom: 20px;
                .pic {

                    > img {
                       
                    }
                }

                .title {
                    
                    &::before{
                        content: '';
                        position: absolute;
                        z-index: 3;
                        top:10px;
                        left:-0%;
                        width:100%;
                        height:50px;
                        border-bottom:1px dotted black;
                    }
                }

                > .desc {
                    padding: 10px;
                }
            }
        }

        
    }
    
     .top {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height:50vh;
            overflow: hidden;

            .topimg {
                position: relative;
                overflow: hidden;
                height:100%;
                width: 100%;
                    &::before {
                    content: '';
                    position: absolute;
                    z-index:2;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    background: rgba(0,0,0,0.3);
                }

            > img {
                position: absolute;
                left: -100%;
                right: -100%;
                bottom: 0;
                margin: auto;
                width:100%;
                height:100%;           
            }
        }
            }
    }
    
     .toptext {
            text-align: center;
            position: absolute;
            height: 100%;
            width:100%;
            top:15vh;
            z-index:4;
            animation: weatherAPI 2s infinite ease;
            color:white;
            
        }

        @keyframes weatherAPI {
        0% { transform: scale(0.9); }
        50%   { transform: scale(1); }
        100%   { transform: scale(0.9); }
    }
</style>