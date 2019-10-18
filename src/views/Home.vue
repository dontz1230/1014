<template>
    <div class="homepage">
        <my-carousel></my-carousel>
        <title-text>關於田園</title-text>
        <my-about></my-about>
        <title-text>美味佳餚</title-text>
        <my-foods></my-foods>
        <title-text>我們在這</title-text>
        <my-map></my-map>
    </div>
</template>

<script>
import myCarousel from "../components/Carousel.vue"
import myAbout from "../components/About.vue"
import myFoods from "../components/Foods.vue"
import myNews from "../components/News.vue"
import myMap from "../components/Map.vue"



export default {
    mounted(){
        const thispage = document.querySelector('.homepage');
        thispage.style.opacity = 0;
        thispage.style.transition = 'all 1s linear';
        setTimeout(() => {
            thispage.style.opacity = 1;
        },1000)
    },
    components:{
        myCarousel,
        myAbout,
        myFoods,
        myNews,
        myMap
    }
}
</script>