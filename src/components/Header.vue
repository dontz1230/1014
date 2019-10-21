<template>
    <div>
        <header class="main-header">
        <div class="logo">
          <router-link  to="/">
              <img :src="require('../assets/img/logo.png')" alt="田園">
          </router-link>
        </div>
    
        <input v-model="menuOpen" type="checkbox" class="menu-btn" id="menu-btn">
        <label for="menu-btn" class="menu-icon">
          <span class="menu-icon__line"></span>
        </label>
    
        <ul class="nav-links">
          <li @click="closeMenu"><router-link to="/menu">菜單</router-link></li>
          <li @click="closeMenu"><router-link to="/msgboard">留言板</router-link></li>
          <li @click="closeMenu"><router-link to="/reservation">線上訂位</router-link></li>
        </ul>
      </header>
    </div>
</template>

<script>

export default {
    data(){
        return {
            menuOpen:null
        }
    },
    methods:{
        closeMenu(){
            this.menuOpen = false;
        }
    }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.main-header {
    position: fixed;
    top:0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    width: 100vw;
    padding: 0 10vw;
    z-index: 99;
    transition: .4s ease-out;
    font-size: 1.5rem;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.76);

    > .logo {
        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.7));
        width: 150px;
        background: white;
        border-radius: 100px;
        padding:10px 20px;
    }

    > .nav-links {
        display: flex;
        list-style: none;
        
        li {
            > a {
              margin: .2rem;
              text-decoration: none;
              padding: .5rem 1rem; 
              color: whitesmoke;
              border-radius: 10px;
              &:hover {
               background: rgba(255, 255, 255, 0.2);
               
                }  
        }
             
           }
    }

    .menu-icon {
        position: relative;
        padding: 26px 10px;
        cursor: pointer;
        z-index: 1;
        display: none;
        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.7));

        &__line {
            display: block;
            position: relative;
            background: #FFFFFF;
            height: 2px;
            width: 20px;
            border-radius: 4px;

            &::before, &::after {
                content:  '';
                position: absolute;
                height: 100%;
                width: 100%;
                border-radius: 4px;
                background: #FFFFFF;
                transition: background .8s ease;


            }

            &::before {
                transform: translateY(-5px);
            }

            &::after {
                transform: translateY(5px);
            }

        }

        }

        .menu-btn {
            display: none;
        }

        &.scrolled {
            height: 50px;
            background: rgba(0, 0, 0, 0.9);
            color: white;

            .menu-icon {
                &__line, 
                &__line::before,
                &__line::after {
                    background: white;
                }
            
            }
        }
    }

@media (max-width: 767px) {

    .main-header {
        .menu-icon {
            display: block;

            &__line {
                animation: closedMid 0.8s backwards;
                animation-direction: reverse;

                &::before {
                    animation: closedTop 0.8s backwards;
                    animation-direction: reverse;
                }
                &::after {
                    animation: closedBtm 0.8s backwards;
                    animation-direction: reverse;
                }
            }

        }

        .nav-links {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            padding: 10rem 0;
            width: 100vw;
            height: 100vh;
            font-size: 2rem;
            color: #fff;
            background: #272727;
            transition:
                opacity .8s .5s,
                clip-path 1s .5s;
            clip-path: circle(200px at top right);


            .nav-link {
                opacity: 0;
                transform: translateX(100%);
                width: 100%;
                text-align: center;

                a {
                    display: block;
                    padding: 2rem 0;
                }

            }

        }

        .menu-btn:checked~.nav-links {
            opacity: 1;
            clip-path: circle(100% at center);

            .nav-link {
                opacity: 1;
                transform: translateX(0);
                transition:
                    opacity .4s ease-in-out,
                    transform .6s cubic-bezier(0.175, 0.085, 0.32, 1.275);

                &:nth-of-type(1) {
                    transition-delay: .7s;
                }

                &:nth-of-type(2) {
                    transition-delay: .8s;
                }

                &:nth-of-type(3) {
                    transition-delay: .9s;
                }

                &:nth-of-type(4) {
                    transition-delay: 1s;
                }

            }
        }

        .menu-btn:checked ~  .menu-icon {
            border-radius: 50%;
            animation: pulse 1s;
            
            .menu-icon__line {
                background: #fff;
                animation: openMid 0.8s forwards;

                &::before {
                    background: white;
                    animation: openTop 0.8s forwards;
                }
                &::after {
                    background: white;
                    animation: openBtm 0.8s forwards;
                }

            }
        }
    }
}

@keyframes pulse {
    from {
      box-shadow: 0 0 0 0px rgba(255,255, 255, 0.6);
      background: rgba(255,255, 255, 0.6);
    }
    to {
      box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0);
      background: rgba(255,255, 255, 0);
    }
  }
  
  @keyframes openTop {
    0% {
      transform: translateY(-5px)
      rotate(0deg);
    }
    50% {
      transform: translateY(0px)
      rotate(0deg);
    }
    100% {
      transform: translateY(0px)
      rotate(90deg);
    }
  }
  @keyframes closedTop {
    0% {
      transform: translateY(-5px)
      rotate(0deg);
    }
    50% {
      transform: translateY(0px)
      rotate(0deg);
    }
    100% {
      transform: translateY(0px)
      rotate(90deg);
    }
  }
  @keyframes openMid {
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
  @keyframes closedMid {
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
  @keyframes openBtm {
    0% {
      transform: translateY(5px)
      rotate(0deg);
    }
    50% {
      transform: translateY(0px)
      rotate(0deg);
    }
    100% {
      transform: translateY(0px)
      rotate(90deg);
    }
  }
  @keyframes closedBtm {
    0% {
      transform: translateY(5px)
      rotate(0deg);
    }
    50% {
      transform: translateY(0px)
      rotate(0deg);
    }
    100% {
      transform: translateY(0px)
      rotate(90deg);
    }
  }
</style>






<!--<template>
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

<!--<script>
    
//     export default {
        
//         methods:{
//             toggleMenu(){
//                 const menuList = document.querySelector('.nav-links');
//                 menuList.classList.toggle('active-links');
//             },
//             menuClose(){
//                 const menuList = document.querySelector('.active-links');
//                 menuList.classList.remove('active-links');
//             }
//         }
//     }
    
// </script>

// <style lang="scss">

// * {
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;
// }

// $MainGreen : rgb(82, 119, 78);

// @media (min-width:768px){
//     header {  
//         overflow: hidden;
//         position: sticky;
//         top:0;
//         left:0;
//         z-index: 99;
//         width:100%;

//         > .menu-toggle{
//             display: none;
//         } 

//         > nav {
//         display: flex;
//         justify-content: space-around;
//         align-items: center;
//         max-height: 10vh;
//         background: whitesmoke;
//         box-shadow: 0px 1px 5px rgba(0,0,0,0.25);
    
//             > ul {
//                 display: flex;
//                 justify-content: space-around;
//                 flex-direction: row;
//                 width: 38%;
//                 list-style: none;

//                 > li {

//                     > a {
//                         text-decoration: none;
//                         font-weight: bold;
//                         font-size: 1.2rem;
//                         color: $MainGreen;
//                         &:hover {
//                             color:salmon;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// /* 手機板 */
// @media screen and (max-width:768px){
//     header {
//         position: fixed;
//         z-index: 99;
//         width:100%;

//         > .menu-toggle {
//             display: block;
//             font-size: .8rem;
//             top: calc(5vh / 2);
//             right: 1rem;
//             position: fixed;
//             cursor: pointer;
            
//         }

//         > nav {
//             display: flex;
//             justify-content: space-around;
//             align-items: center;
//             flex-direction: column;
//             min-height: 5vh;
//             background: whitesmoke;
//             box-shadow: 0px 1px 5px rgba(0,0,0,0.25);
//             opacity: 1;

//             > .logo img {
//                 height:50px;
//                 padding: 5px 0;
//             }
          
//             > .nav-links {
//                 display: none;
//                 background: grey;
//                 flex-direction: column;
//                 justify-content: space-around;
//                 width: 100%;

//                 > li {
//                     list-style: none;
//                     text-align: center;
//                     padding: 20px;

//                     > a {
//                         text-decoration: none;
//                         color: white;
//                         letter-spacing: 3px;
//                         font-weight: bold;
//                         font-size: 1.5rem
//                     }
//                 }
//             }

//             > .active-links {
//                 display: block;
//                 background: grey;
//                 flex-direction: column;
//                 justify-content: space-around;
//                 width: 100%;
                

//                 > li {
//                     list-style: none;
//                     text-align: center;
//                     padding: 20px;

//                     &:hover {
//                         transition: all .3s ease-out;
//                         background: salmon;
//                         padding: 30px;
//                     }

//                     > a {
//                         text-decoration: none;
//                         color: white;
//                         letter-spacing: 3px;
//                         font-weight: bold;
//                         font-size: 1rem;

                        
//                     }
//                 }
//             } 
//         }
//     }
// }


   

     

// </style>