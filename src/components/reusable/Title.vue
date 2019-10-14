<template>
    <div class="titleBox">
        <div class="barTop"></div>
        <div class="textArea">
                <h2><slot/></h2>   
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
        position: relative;
        margin: 30px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
        max-width: 1080px;
        align-items: center;
    }
    .barTop, .barBtm {
        width:300px;
        height: 1px;
        background: black;
       
    }
     .textArea {
        font-size: 38px;
        padding: 5px 40px;
        text-align: center;
        align-self: center;
        border-top:1px solid black;
        border-bottom:1px solid black;
        letter-spacing: 8px;
    }
      
</style>