<template>
  <header>
    
      <nav>
        <div class="logo">
            <router-link class="logo" to="/">
                    <img :src="require('../assets/img/logo.png')" alt="田園">
            </router-link>
        </div>

        <ul class="nav-links">
          <li><router-link to="/">菜單</router-link></li>
          <li><router-link to="/">故事</router-link></li>
          <li><router-link to="/">食記</router-link></li>
          <li><router-link to="/">加入會員</router-link></li>
          <li><router-link to="/">聯絡我們</router-link></li>
        </ul>
      </nav>
   
    <div class="menu-toggle" @click="toggleMenu"><i class="fa fa-bars fa-2x"></i></div>
  </header>

</template>

<script>
    
    export default {
        methods:{
            toggleMenu(){
                const menuList = document.querySelector('.nav-links');
                menuList.classList.toggle('active-links')
            }
        }
    }
    
</script>

<style lang="scss" scoped>

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

$MainGreen : rgb(82, 119, 78);

@media (min-width:768px){
    header {  
        position: fixed;
        z-index: 99;
        width:100%;

        > .menu-toggle{
            display: none;
        } 

        > nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        max-height: 10vh;
        background: whitesmoke;
        box-shadow: 0px 1px 5px rgba(0,0,0,0.25);
    
            > ul {
                display: flex;
                justify-content: space-around;
                flex-direction: row;
                width: 38%;
                list-style: none;

                > li {

                    > a {
                        text-decoration: none;
                        
                        font-weight: bold;
                        font-size: 1.5rem;
                        color: $MainGreen;
                        &:hover {
                            color:salmon;
                        }
                    }
                }
            }
        }
    }
}

/* 手機板 */
@media screen and (max-width:768px){
    header {
        position: fixed;
        z-index: 99;
        width:100%;

        > .menu-toggle {
            display: block;
            top: 2rem;
            right: 1rem;
            position: fixed;
            cursor: pointer;
        }

        > nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            min-height: 5vh;
            background: whitesmoke;
            box-shadow: 0px 1px 5px rgba(0,0,0,0.25);
            opacity: 0.85;
          
            > .nav-links {
                display: none;
                background: grey;
                flex-direction: column;
                justify-content: space-around;
                width: 100%;

                > li {
                    list-style: none;
                    text-align: center;
                    padding: 20px;

                    > a {
                        text-decoration: none;
                        color: white;
                        letter-spacing: 3px;
                        font-weight: bold;
                        font-size: 14px;
                    }
                }
            }

            > .active-links {
                display: block;
                background: grey;
                flex-direction: column;
                justify-content: space-around;
                width: 100%;
                

                > li {
                    list-style: none;
                    text-align: center;
                    padding: 20px;

                    > a {
                        text-decoration: none;
                        color: white;
                        letter-spacing: 3px;
                        font-weight: bold;
                        font-size: 14px;
                    }
                }
            } 
        }
    }
}


   

     

</style>