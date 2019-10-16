<template>
<div>
    <div class="about">

        <div class="about-container">

            <div class="about-img-box">
                <div class="about-img">
                    <img :src="require('../assets/img/about01.jpg')"> 
                </div>
                <div class="about-img">
                    <img :src="require('../assets/img/about02.jpg')">
                </div>
                <div class="about-img">
                    <img :src="require('../assets/img/about03.jpg')">
                </div>
            </div>

            <div class="about-content-box">
                <div class="about-text">
                    <h1>
                        田園故事
                    </h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
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

</style>