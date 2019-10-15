<template>
    <div class="tab-btn" @click="clickevent" :class="[...customClass]">
        <slot/>
    </div>
</template>

<script>
export default {
    props:['clickevent','customClass']
}
</script>

<style lang="scss">
$MainGreen : rgb(82, 119, 78);
    .tab-btn {
        width:200px;
        height:auto;
        font-size: 1.5rem;
        border: 1px solid $MainGreen;
        border-radius: 40px;
        text-align: center;
        padding: 10px;
        color: $MainGreen;
        cursor: pointer;
        font-weight: bold;
        transition: .2s ease-out;

        &:hover {
            background: $MainGreen;  
            color: white;
        }
        
    }

    
</style>