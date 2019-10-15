<template>
    <footer>
        <div class="footer-container">
            <div class="logo"> 
                <img :src="require('../assets/img/logo.png')" alt="田園">
            </div>
            <div class="open-content">
                <div class="open-time">
                    <div class="lunch optime">
                        <h2>Lunch</h2>
                        <p>11:40~14:00</p>
                    </div>
                    <div class="dinner optime">
                        <h2>Dinner</h2>
                        <p>17:00~20:00</p>
                    </div>
                </div>
                <div class="open-info">
                    <div class="address"><i class="fas fa-home"></i>國立中央大學後門(白鬍子牛排館旁)</div>
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
        padding: 40px;
        height: 200px;
        width:100%;
        border-top: 1px solid rgb(82, 119, 78);
        margin:auto;
        
        .footer-container {            
            display: grid;
            grid-gap: 0px;
            grid-template-columns: 1fr 3fr;
            height: 100%;
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
                    text-align:center;
                    align-items: center;
                    margin-bottom: 10px;
                    > .optime {
                        width:200px;
                        border-right: 1px solid black;
                    }
                    > .lunch {
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

    @media (max-width: 768px){
        footer {
        padding: 40px;
        height: 200px;
        width:100%;
        border-top: 1px solid rgb(82, 119, 78);
        margin:auto;
        
        .footer-container {            
            display: grid;
            grid-template-columns: 1fr;
            height: 100%;
            position: relative;
            > .logo {
                margin: auto;
                text-align: center;
                > img {
                    width:100px;
                }
            }
            > .open-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                > .open-time {
                    display: flex;
                    text-align:center;
                    align-items: center;
                    margin-bottom: 10px;
                    > .optime {
                        width:200px;
                        border-right: 1px solid black;
                    }
                    > .lunch {
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
    }
</style>