<template>
    <div class="titleBox">
        <div class="barTop"></div>
        <div class="textArea">
                <i class="fas fa-star star"></i>
                <span>
                    <slot/>
                </span> 
                <i class="fas fa-star star"></i>  
        </div>
        <div class="barBtm"></div>
    </div>
</template>

<style lang="scss">
    * {
        box-sizing: border-box;
        margin:0;
    }

    .titleBox {
        overflow: hidden;
        position: relative;
        margin: 30px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
        max-width: 1080px;
        align-items: center;

        > .barTop, .barBtm {
            width:300px;
            height: 1px;
            background: black;
        }
    }

    
     .textArea {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 40px;
        text-align: center;
        align-self: center;
        border-top:1px solid black;
        border-bottom:1px solid black;
        letter-spacing: 8px;

        > span {
            font-size: 2.5rem;
            padding: 0 5px;
            color:black;
        }
    }

    @media screen and (max-width:768px) {
        .titleBox {
        position: relative;
        margin: 30px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
        width: calc(80vw);
        align-items: center;

        > .barTop, .barBtm {
            width:10vw;
            height: 1px;
            background: black;
        }
    }
    
     .textArea {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 5px;
        text-align: center;
        align-self: center;
        border-top:1px solid black;
        border-bottom:1px solid black;
        letter-spacing: 8px;

        > .star {
            font-size: 0.5rem;
        }
        > span {
            font-size: 1rem;
            padding: 0 5px;
        }
    }
    }
      
</style>