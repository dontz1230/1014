<template>
<div>
    <div class="about" id="about">

        <div class="about-container">

            <div class="about-img-box">
                <div class="about-img about-img01">
                    <img :src="require('../assets/img/about01.jpg')"> 
                </div>
                <div class="about-img about-img02">
                    <img :src="require('../assets/img/about02.jpg')">
                </div>
                <div class="about-img about-img03">
                    <img :src="require('../assets/img/about03.jpg')">
                </div>
            </div>

            <div class="about-content-box">
                <div class="about-text">
                    <h1>
                        田園故事
                    </h1>
                    <h2>陪伴中央大學學生</h2>
                    <h2>逾 20 年的美味回憶</h2>
                    <h2>老闆夫妻以最新鮮的食材</h2>
                    <h2>細心為學生製作最暖心的餐點</h2>
                </div>
            </div>
            
        </div>

        

    </div>
    <div class="slider">
  <div class="slider-row"></div>
</div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

/* slider */
.slider {
        margin: 80px 0;
        height: 300px;
        
        > .slider-row {
        
        height: 300px;
        background-image: url(https://i.ibb.co/M5r1pJJ/roll.png);
        background-size: 4565px * 1/2 300px;
        animation: slide 60s linear infinite;   
        opacity: 0.7; 
    }
    }
    @keyframes slide {
    from { background-position-x: 0; }
    to   { background-position-x: 4565px * 0.5; }
    }
/* slider ends */
    .about {
        position: relative;
        width:100%;
        height:700px;
        display: block;
        &::before {
            content: "";
            z-index: -1;
            position: absolute;
            left: 0;
            top: 0;
            height: 600px;
            width: 75%;
            background-color: rgb(227, 231, 221);
        }
    }
    .about-container {
        width: calc(100% - 40px);
        max-width: 1200px;
        margin: auto;
        position: relative;

        > .about-content-box {
            padding-left: 50px;
            z-index: 10;
            position: absolute;
            right:0px;
            width: 500px;
            height:300px;
            top: 180px;
            display: flex;
            flex-direction: column;
            text-align: right;
            align-items: flex-end;
            justify-content: center;
            line-height: 2rem;
            flex-wrap:wrap;

            > .about-text {
                text-shadow: 3px 2px 0px white;
                > h1 {
                margin-bottom: 2rem;
                }
            }
            
        }

        > .about-img-box {
            overflow: hidden;
            width:calc(100% - 100px);
            height:610px;
            position: absolute;
            top: 60px;
            left: 0px;
            z-index: 1;
            display: flex;
            flex-wrap: nowrap;

            > .about-img {
                overflow: hidden;
                margin: 0 10px 0 0 ;
                height:auto;
            
                > img {
                    transform: translateX(-10%)
                }
            }
        }
    }

@media (max-width: 768px) {
    .slider {
        margin-top: 80px;
        margin-bottom: 0;
        height: 250px; 
        text-align: center; 
        
        &::before {
            width: 100px;
            height: 60px;
            align-self: center;
            content: '美味回顧';
            text-shadow: 2px 2px 0px white;
            top:calc(125px);
            font-size:1.2rem;
            right:calc(50vw - 50px);
            position: absolute;
            z-index:2;
        }   
        > .slider-row {     
        height: 250px; 
        background-image: url(https://i.ibb.co/M5r1pJJ/roll.png);
        background-size: 4565px * 1/2 300px;
        animation: slide 60s linear infinite;   
        opacity: 0.7; 
    }
    }
    @keyframes slide {
    from { background-position-x: 0; }
    to   { background-position-x: 4565px * 0.5; }
    }
/* slider ends */
    .about {
        position: relative;
        width:100%;
        height:50vh;
        display: block;
        &::before {
            content: "";
            z-index: -1;
            position: absolute;
            left: 0;
            top: 20px;
            height:50vh;
            width: 75%;
            background-color: rgb(227, 231, 221);
        }
    }
    .about-container {
        width: calc(100% - 40px);
        max-width: 1200px;
        margin: auto;
        position: relative;

        > .about-content-box {
            padding-left: 50px;
            z-index: 10;
            position: absolute;
            right:0px;
            width: 500px;
            height:300px;
            top: 0;
            display: flex;
            flex-direction: column;
            text-align: right;
            align-items: flex-end;
            justify-content: center;
            line-height: 2rem;
            flex-wrap:wrap;

            > .about-text {
                text-shadow: 3px 2px 0px white;
                > h1 {
                margin-bottom: 2rem;
                }
            }
            
        }

        > .about-img-box {
            overflow: hidden;
            width:100%;
            height:50vh;
            position: absolute;
            top: 60px;
            left: 0px;
            z-index: 1;

            > .about-img {
                overflow: hidden;
                padding:0;
                margin: 0;
                

                > img {
                    transform: translateX(-10%)
                }
            }
        }
    }

            .about-img01{
                grid-area: first;
                display: none;
            }
             .about-img02{
                grid-area: second;
                display: none;
            }
             .about-img03{
                grid-area: third;
            }
}

</style>