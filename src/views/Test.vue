<template>
    <div>
        <div class="weather-container">
            <div class="weatherimg">
                <img v-if="sunny" :src="require('../assets/img/sun.png')">
                <img v-else :src="require('../assets/img/rain.png')">
            </div>
            <div class="weathertext">
                <div>天氣狀況：{{ weather }}</div>
                <div>
                    氣溫：
                    最低<span>{{ minTemp }}°C</span>
                    ～
                    最高<span>{{ maxTemp }}°C</span>
                </div>
                <div>
                    <span v-if="minTemp < 18">{{ greetingsCold }}</span>
                    <span v-if="maxTemp > 30">{{ greetingsHot }}</span>
                    <span v-if="!sunny">{{ greetingsRain }}</span>
                    <span v-if="weather">{{ greetings }}</span>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss">
    @media (min-width: 768px){
        .weather-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > div {
            color:white;
            font-size: 1.2rem;
            position: relative;
            line-height: 1.5rem;
            text-shadow: 2px 2px 2px rgba(0,0,0,0.8);
            > span {
                color:white;
            }
        }
    }
        .weatherimg {
            > img {
                height:300px;
                opacity: 0.7;
            }
        }
    }

@media (max-width:768px) {
        .weather-container {
            height:100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;

        > .weathertext {
            height: 100px;
            position: absolute;
            top: 0;
            color:white;
            font-size: 1.2rem;
            line-height: 1.5rem;
            text-shadow: 2px 2px 2px rgba(0,0,0,0.8);
            > div {
                color:white;
                > span {
                color:white;
            }
            }
            
        }

        > .weatherimg {
            height: 60px;
            > img {
                height:100%;
                opacity: 0.7;
            }
        }
    }
    }
</style>

<script>
export default {
    data(){
        return {
            weather:null,
            maxTemp:null,
            minTemp:null,
            sunny:null,
            greetingsCold:'天冷，穿個外套再來田園吃暖呼呼一點吧～',
            greetingsHot:'大熱天，快來田園喝清爽的冰釀綠茶吧！',
            greetingsRain:'天氣陰陰的，要記得帶傘哦！',
            greetings:'［隨時隨意，都是吃田園的好天氣］'
        }
    },
    mounted(){
       
            const weatherAPI = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-EE93459E-B313-45C5-A121-ADE7AEBC2BCD&locationName=%E6%A1%83%E5%9C%92%E5%B8%82'
            this.$http.get(weatherAPI)
            .then(res => res.json()).then((res) => 
            {
                this.weather = res.records.location[0].weatherElement[0].time[0].parameter.parameterName
                this.minTemp = res.records.location[0].weatherElement[2].time[0].parameter.parameterName
                this.maxTemp = res.records.location[0].weatherElement[4].time[0].parameter.parameterName
            }).then(() => {
                if(this.weather.includes('晴'))
                    {
                        return this.sunny = true;
                    } 
            })    
    },
}
</script>