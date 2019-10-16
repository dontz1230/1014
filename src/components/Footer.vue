<template>
    <footer>
        <div class="footer-container">
            <div class="logo"> 
                <img :src="require('../assets/img/logo.png')" alt="田園">
            </div>
            <div class="open-content">
                <div class="open-time">
                     <div class="when optime">
                        <p>營業時間</p>
                        <p>周一 ~ 周五</p>
                    </div>
                    <div class="lunch optime">
                        <p>Lunch</p>
                        <p>11:40~14:00</p>
                    </div>
                    <div class="dinner optime">
                        <p>Dinner</p>
                        <p>17:00~20:00</p>
                    </div>
                </div>
                <div class="open-info">
                    <div class="address"><i class="fas fa-home"></i>國立中央大學後門</div>
                    <div class="phone"><i class="fas fa-phone"></i>03-420-3115</div>
                    <div class="facebook">
                        <a href="https://www.facebook.com/LoveTianYuan">
                            <i class="fab fa-facebook"></i>
                            田園美食屋官方粉絲團
                        </a>
                    </div>
                </div>
            </div>
       </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    footer {
        position: relative;
        bottom:0;
        left:0;
        padding: 40 0 0 0px;
        height: 200px;
        width:100%;
        background: whitesmoke;
        box-shadow: 0px -1px 5px rgba(0,0,0,0.25);
        display: flex;
        justify-content: center;
        margin: 40px auto;
        margin-bottom: 0;
        
        .footer-container {            
            display: grid;
            grid-template-columns: 1fr 3fr;
            position: relative;
            > .logo {
                margin: auto;
                text-align: center;
            }
            > .open-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                > .open-time {
                    display: flex;
                    flex-direction: row;
                    text-align:center;
                    align-items: center;
                    margin-bottom: 10px;
                    > .optime {
                        width:200px;
                        border-right: 1px solid black;
                        margin: 5px 0;
                    }
                    > .lunch {
                    }
                    > .when {
                         border-left: 1px solid black;
                    }
                }

                > .open-info {
                    display: flex;
                    width: 100%;        
                    justify-content: center;

                    > div {
                        margin: 10px;
                    }
                }
            }
        }
    }


    /* mobile edition */

    @media screen and (max-width: 768px){
        footer {
        position: relative;
        bottom:0;
        left:0;
        padding: 20px 20px 0 20px;
        height: 30%;
        width:100%;
        margin: 40px auto;
        margin-bottom: 0;
        
        .footer-container {            
            display: grid;
            grid-template-columns: 1fr;
            height: 100%;
            position: relative;
            
            > .logo {
                margin:0px;
                text-align: center;
                padding:0;
                > img {
                    width:100px;
                }
            }
            > .open-content {
                margin:auto;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                > .open-time {
                    font-size: 0.8rem;
                    display: flex;
                    flex-direction: column;
                    text-align:center;
                    align-items: center;
                    margin-bottom: 10px;
                    
                    > .optime {
                        width: 100%;
                        border-right: 0px ;
                    }
                    > .lunch {
                        border-left: 0px ;
                    } > .when {
                         border-left: 0px ;
                    }
                }

                > .open-info {
                    display: flex;
                    flex-direction: column;
                    font-size: 0.8rem;
                    width: 100%;        
                    justify-content: center;
                    align-items: left;
                    padding-left: 20px;

                    > div {
                        margin: 10px;
                    }
                }
            }
        }
    }
    }
</style>