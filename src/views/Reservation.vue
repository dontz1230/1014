<template>
    <div>
        <div class="parallax">
            <div class="reserve-text">
                <h1>不如現在就訂位！</h1>
                <br>
                <h1>吃田園總是要排隊？</h1>
            </div>
        </div>

        <div class="reserve-box">
            <div class="reserve-content">
           <title-text>線上訂位</title-text>
            <form @submit.prevent="makeReserve" class="reserve-form">
                <div class="input-area">
                    <p>用餐人數</p>
                    <select v-model="reserve.people">
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>

                <div class="input-area">
                    <p>用餐日期</p>
                    <input type="date" v-model="reserve.date">
                </div>

                <div class="input-area">
                    <p>用餐時段</p>
                    <select v-model="reserve.time">
                        <option value="17:00">17:00</option>
                        <option value="17:50">17:50</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:20">19:20</option>
                    </select>
                </div>

                <div class="input-area">
                    <p>貴賓姓名</p>
                    <input type="text" v-model="reserve.name">
                </div>

                <div class="input-area">
                    <p>手機號碼</p>
                    <input type="tel" v-model="reserve.phone">
                </div>

                <div class="reserve-display" >
                    <span v-if="reserve.people"> {{ reserve.people }} 人</span>
                    <span v-if="reserve.date"> {{ reserve.date }} </span>
                    <span v-if="reserve.time"> {{ reserve.time }} </span>
                 </div>

                <button type="submit" class="">馬上訂位</button>
            </form>

            
         </div>
        </div>

        <title-text>我們在這</title-text>
        <my-map></my-map>

        
    </div>
</template>

<script>
import myMap from '../components/Map.vue'

export default {
    components:{
        myMap
    },
    data(){
        return {
            reserve:{
                date:'',
                people:'',
                time:'',
                name:'',
                phone:''
            }
        }
    },
    methods:{
        makeReserve(){
            alert('訂位成功');
            this.reserve.people = null;
            this.reserve.time = null
            this.reserve.date = null
        }
    }
    
}
</script>
<style lang="scss">

    

    .parallax {
        background-image: url('../assets/img/reservation/reservebg.jpg');
        min-height: 500px; 
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index:-1;
        display: flex;
        justify-content: center;
        align-items: center;

        > .reserve-text {
            z-index:3;
            writing-mode: vertical-lr;
            text-orientation: mixed;
            animation: textAnime 3s infinite ease-out;

            > h1 {
                color:white;
                text-shadow: -2px 2px 2px rgba(0,0,0,0.5);
            }
        }
    }

    .reserve-box {
        z-index:4;
        position: relative;
        background-color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 0 40px 0;
        margin: 0;
        
       > .reserve-content { 
           
           width: 100%;

           > .reserve-form {
            display: flex;
            margin: 0 auto;
            flex-direction: column;
            align-items: center;
            width: 300px;
            text-align: center;

            > button {
                border :none;
                width: 100%;
                margin-top: 15px;
                padding: 10px;
                border-radius: 30px;
                cursor: pointer;
                background: rgb(82, 119, 78);
                color: white;
                transition: 0.2s ease-in-out;

            &:hover {
                background: rgb(255, 103, 103);
                color:white;
                transform: scale(1.05);
            }
            }
            
            > .input-area {
                min-width: 200px;
                width: 300px;
                margin: auto;
                padding: 10px 0;
                display: flex;
            flex-direction: column;

                > select, input {
                    width: 100%;
                    height: 2rem;
                    border: 1px solid rgb(187, 187, 187);
                    border-radius: 30px;
                    padding: 5px;
                    width: 100%;
                }
            }
        }}
    }
</style>