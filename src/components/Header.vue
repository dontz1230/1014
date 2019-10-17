<template>
  <header>
    
      <nav>
        <div class="logo">
            <router-link class="logo" to="/">
                    <img :src="require('../assets/img/logo.png')" alt="田園">
            </router-link>
        </div>

        <ul class="nav-links">
          <li><router-link to="/menu">菜單</router-link></li>
          <li><router-link to="/">故事</router-link></li>
          <li><router-link to="/">食記</router-link></li>
          <li><router-link to="/msgboard">留言板</router-link></li>
          <li><router-link to="/reservation">線上訂位</router-link></li>
        </ul>
      </nav>
   
    <div class="menu-toggle heartBeat animated infinite" @click="toggleMenu"><i class="fa fa-bars fa-2x"></i></div>
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
        position: sticky;
        top:0;
        left:0;
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
                        font-size: 1.2rem;
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
            font-size: .8rem;
            top: calc(5vh / 2);
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
            opacity: 1;

            > .logo img {
                height:50px;
                padding: 5px 0;
            }
          
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
                        font-size: 1.5rem
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

                    &:hover {
                        transition: all .3s ease-out;
                        background: salmon;
                        padding: 30px;
                    }

                    > a {
                        text-decoration: none;
                        color: white;
                        letter-spacing: 3px;
                        font-weight: bold;
                        font-size: 1rem;

                        
                    }
                }
            } 
        }
    }
}


   

     

</style>