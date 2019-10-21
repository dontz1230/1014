<template>
    <div class="titleBox">
        <div class="barTop"></div>
        <div class="textArea">
                <i class="fas fa-star star animated slow flash infinite"></i>
                <span>
                    <slot/>
                </span> 
                <i class="fas fa-star star animated slow flash infinite"></i>  
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
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 60px;
        max-width: 1080px;
        align-items: center;

        > .barTop {
            width: 200px;
            height: 1px;
            background: rgb(107, 86, 86);
            margin-right: 30px;
        }

        > .barBtm{
            width: 200px;
            height: 1px;
            background: rgb(107, 86, 86);
            margin-left: 30px;
        }
    }

    
     .textArea {
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        padding: 10px 40px;
        text-align: center;
        align-self: center;
        border-top:1px solid rgb(107, 86, 86);
        border-bottom:1px solid rgb(107, 86, 86);
        letter-spacing: 8px;

        > span {
            font-size: 2rem;
            padding: 0 5px;
            color:rgb(107, 86, 86);
        }
    }

    @media screen and (max-width:768px) {
        .titleBox {
        position: relative;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 25px;
        width: calc(80vw);
        align-items: center;

        > .barTop {
            width: 100px;
            height: 1px;
            background: rgb(107, 86, 86);
            margin-right: 30px;
        }

        > .barBtm{
            width: 100px;
            height: 1px;
            background: rgb(107, 86, 86);
            margin-left: 30px;
        }
    }
    
     .textArea {
        display: flex;
        min-width: 9rem;
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