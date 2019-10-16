<template>
    <div>
        <div class="foods-container">

            <div class="tabs">
                <btn :clickevent="allmenu" :customClass="focusAll">全部菜單</btn>
                <btn :clickevent="pork" :customClass="focusPork">豬排系列</btn>
                <btn :clickevent="chicken" :customClass="focusChick">雞肉系列</btn>
                <btn :clickevent="fish" :customClass="focusFish">養生鮭魚</btn>
            </div>

        
                    <div class="menu-container">
                       
                        <div v-for="(dish,index) in filteredmenu" :key="index" class="single-food">                          
                            <img :src="dish.url" class="food-img">
                                <div class="food-info">
                                    <div class="food-text">
                                        <span>{{ dish.title}}</span>
                                    </div>
                                    <h5 class="food-value">
                                        <span class="food-price">{{ dish.price }}</span>元
                                    </h5>
                                </div>
                        </div>
                        
                        
                        
                       
                    </div>
                
        

        </div>
    </div>
</template>

<script>
import food01 from '../assets/img/foods/salmon.png'
import food02 from '../assets/img/foods/chickleg.png'
import food03 from '../assets/img/foods/deepfried.png'
import food04 from '../assets/img/foods/panfried.png'
import food05 from '../assets/img/foods/nuggets.png'
import food06 from '../assets/img/foods/tofu.png'
import food07 from '../assets/img/foods/cheese.png'

export default {
    
    data(){
        return {
            foodstate:'',
            test:true,
            menu:[
                {
                    url: food01,
                    title: '香煎鮭魚飯',
                    price: '160',
                    label: 'fish'
                },
                {
                    url: food02,
                    title: '古早味煎雞腿',
                    price: '160',
                    label: 'chick'
                },
                {
                    url: food03,
                    title: '酥炸豬排飯',
                    price: '130',
                    label: 'pork'
                },
                {
                    url: food04,
                    title: '香煎豬排飯',
                    price: '130',
                    label: 'pork'
                },
                {
                    url: food05,
                    title: '酥炸椒鹽雞飯',
                    price: '160',
                    label: 'chick'
                },
                {
                    url: food06,
                    title: '油豆腐雞肉飯',
                    price: '160',
                    label: 'chick'
                },
                {
                    url: food07,
                    title: '藍帶起司豬排飯',
                    price: '160',
                    label: 'pork'
                }
                
            ]
        }
    },
    computed:{
        filteredmenu(){
            if(this.foodstate === 'pork') {
                return this.menu.filter((one) => one.label === 'pork')
            } else if(this.foodstate === 'chick')  {
                return this.menu.filter((one) => one.label === 'chick')
            } else if(this.foodstate === 'fish') {
                return this.menu.filter((one) => one.label === 'fish')
            } else { return this.menu } 
        },
        
        focusAll(){
            if(this.foodstate === ''){
                return 'activebtn'
            }
        },
        focusPork(){
            if(this.foodstate === 'pork'){
                return 'activebtn'
            }
        },
        focusFish(){
            if(this.foodstate === 'fish'){
                return 'activebtn'
            }
        },
        focusChick(){
            if(this.foodstate === 'chick'){
                return 'activebtn'
            }
        }
    },
    methods:{
        chicken(){
            this.foodstate = 'chick'
        },
        pork(){
            this.foodstate = 'pork'
        },
        fish(){
            this.foodstate = 'fish'
        },
        allmenu(){
            this.foodstate = ''
        }
    }
}

</script>

<style lang="scss">
    .activebtn {
            background: rgb(82, 119, 78);  
            color: white !important;
        
    }

    .foods-container {
        width: calc(100% - 40px);
        max-width: 1200px;
        margin: auto;
        margin-bottom:100px;
        position: relative;

        > .tabs {
            display: flex;
            justify-content: space-around;
            margin-bottom: 40px;
        }

        > .menu-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;

        > .single-food {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align:center;

            > .food-img {
                width:350px;
                filter: drop-shadow(5px 5px 5px rgb(0, 0, 0,0.2));
                margin-bottom: 20px;
            }

            > .food-info {
                > .food-text {
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                > .food-value {
                    margin-top: 10px;
                    font-size: 1.2rem;
                }
            }
        }
    }

}

/* mobile edition */
@media screen and (max-width: 768px){
    .foods-container {
        width: calc(100% - 40px);

        > .tabs {
            display: flex;
            justify-content: space-between;
            margin-bottom: 40px;

            .tab-btn {
                width:auto;
                height:100px;
                height:auto;
                font-size: 0.8rem;
                border-radius: 1000px;
                text-align: center;
                padding: 10px;
                
            }
        }

        > .menu-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;

        > .single-food {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align:center;

            > .food-img {
                height:30vh;
                width:auto;
                filter: drop-shadow(5px 5px 5px rgb(0, 0, 0,0.2));
                margin-bottom: 20px;
            }

            > .food-info {
                > .food-text {
                    font-size: 1rem;
                    font-weight: bold;
                }
                > .food-value {
                    margin-top: 10px;
                    font-size: 1rem;
                }
            }
        }
    }

}
}
/* 1200 */
@media (max-width: 1200px) and (min-width: 768px) {
    .foods-container {
        width: calc(100% - 40px);
        max-width: 1200px;
        margin: auto;
        margin-bottom:100px;
        position: relative;

        > .tabs {
            display: flex;
            justify-content: space-around;
            margin-bottom: 40px;
        }

        > .menu-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

        > .single-food {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align:center;

            > .food-img {
                width:300px;
                filter: drop-shadow(5px 5px 5px rgb(0, 0, 0,0.2));
                margin-bottom: 20px;
            }

            > .food-info {
                > .food-text {
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                > .food-value {
                    margin-top: 10px;
                    font-size: 1.2rem;
                }
            }
        }
    }}}




</style>