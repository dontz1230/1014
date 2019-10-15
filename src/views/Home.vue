<template>
    <div>
        <my-carousel></my-carousel>
        <title-text>關於田園</title-text>
        <my-about></my-about>
        <title-text>美味佳餚</title-text>
        <my-foods></my-foods>
        <title-text>最新資訊</title-text>
        <my-news></my-news>
    </div>
</template>

<script>
import myCarousel from "../components/Carousel.vue"
import myAbout from "../components/About.vue"
import myFoods from "../components/Foods.vue"
import myNews from "../components/News.vue"


export default {
    components:{
        myCarousel,
        myAbout,
        myFoods,
        myNews
    }
}
</script>