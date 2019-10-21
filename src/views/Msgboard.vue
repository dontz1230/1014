<template>
    <div class="msgboard-container">

        <div class="parallax-msg">
            <div class="reserve-text">
                <h1>您的餐後鼓勵 ｜</h1>
                <br>
                <h1>｜ 是我們努力的動力</h1>
            </div>
        </div>

        
        <title-text>用餐分享</title-text>

        <img src="" alt="" class="msgimg">
        <form @submit.prevent="createMessage()" @keydown.enter="createMessage()" class="input-area">
            <div>暱稱</div>
            <div>
                <input name="name" type="text" 
                       v-model="newboard.name"
                       @blur="$v.newboard.name.$touch()"
                       :class="{ invalid : $v.newboard.name.$error }">
            </div>
            <div>心得</div>
            <div>  
                <textarea cols="30" rows="5" 
                          v-model="newboard.msg" 
                          @blur="$v.newboard.msg.$touch()"
                          :class="{ invalid : $v.newboard.msg.$error }"
                          placeholder="基於版面整潔，心得請小於40字元，感謝你~">
                </textarea>
            </div>
            <button type="submit">發布貼文</button>

            <div v-if="$v.newboard.name.$error">
                  <p v-if="!$v.newboard.name.required" class="error-label">
                      請填入暱稱哦！
                  </p>
                  <p v-if="!$v.newboard.msg.maxLength" class="error-label">
                      心得請小於40個字元，謝謝妳！
                  </p>
                  <p v-if="!$v.newboard.msg.required" class="error-label">
                      別忘了寫下心得哦！
                  </p>
             </div>
        </form>
        


        <div class="note-area">
            <ul>
                <li class="eachnote" v-for="(each, index) in messages" :key="index">
                    <a href="">
                        <div class="msg-index">{{ index+1 }}</div>
                        <div class="msg-area">
                            <h2>{{ each.username }} </h2>
                            <p class="msg-msg" > {{ each.message }}  </p>
                            <p class="msg-time" > {{ each.timestamp }} </p>
                        </div>
                        </a> 
                        
                </li>
            </ul>
        </div>


    </div>
</template>

<script>
import { fb, db } from './firebase.js';
import moment from 'moment'
import ElementUI from 'element-ui'
import { required, email, maxLength } from 'vuelidate/lib/validators'

export default {
    
    components:{
        ElementUI
    },
     validations:{
        newboard:{
            name:{
                required
            },
            msg:{
                required,
                maxLength: maxLength(40)
            }
        }
    },
    data(){
        return {
            selectedDate: null,
            newboard: [
                {
                name:'',
                msg:''
                }
            ],
            messages:[]
        }
    },
    created(){
        let ref = db.collection('msgboard')
        //可選擇是否加入排序 EX: .orderBy('timestamp')

        ref.onSnapshot((snapshot) => {
            snapshot.docChanges().forEach( (change) => {
                let doc = change.doc;
                this.messages.push({
                    id: doc.id,
                    username: doc.data().username,
                    message: doc.data().message,
                    //npm install moment
                    timestamp: moment(doc.data().timestamp).format('L')
                })
            })
        })
    },
    methods:{
        createMessage(){
            if(this.$v.$invalid) {
                alert('請檢查是否填寫暱稱')
            } else {
            db.collection('msgboard').add({
                username: this.newboard.name,
                message: this.newboard.msg,
                timestamp: Date.now()
            })
            .then(() => {
                console.log('成功發布')
            })
            .catch((err) => console.log(err))

            this.newboard.name = null
            this.newboard.msg = null
        }
                }
    }
    
}
</script>

<style lang="scss">
@media screen and (min-width: 1200px) {
        
    .error-label {
        color:  salmon;
    }

    .invalid {
            border: 1px solid salmon!important;
        }

    .parallax-msg {
        background-image: url('../assets/img/advice.jpg');
        min-height: 500px; 
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index:-1;
        display: flex;
        justify-content: center;
        align-items: center;

        > .reserve-text {
            z-index:3;
            writing-mode: vertical-lr;
            text-orientation: mixed;
            animation: textAnime 3s infinite ease-out;
            
            > h1 {
                color:white;
                text-shadow: -2px 2px 2px rgba(0,0,0,0.5);
            }
        }
    }

    @keyframes textAnime {
                from {
                    transform: translateY(-100px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0px);
                    opacity: 1
                }
            }

    .msgboard-container {      
        width: 100%;
        margin:auto;
        padding:0;
        display: grid;
        grid-template-columns: 1fr;
        

        > .input-area {
            margin: auto;
            text-align: center;
            display: grid;
            grid-gap: 10px;

            > div input, div textarea {
                border: 1px solid rgb(187, 187, 187);
                border-radius: 10px;
                padding: 5px;
                width: 100%;
            

            }

            > button {
                border :none;
                padding: 10px;
                border-radius: 30px;
                cursor: pointer;
                background: rgb(82, 119, 78);
                color: white;
                transition: 0.2s ease-in-out;

                &:hover {
                    background: rgb(255, 103, 103);
                    color:white;
                    transform: scale(1.05);
                }
            }
        }
        
        > .note-area {
            max-width: calc(100vh - 40px);
            margin:auto;
            padding:0;
            
            > ul {
                width: 100%;
                height: 100%;
                margin-top: 40px;
                padding:0;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                align-items: center; 
                justify-content: center;
                
                > li:hover {
                    transform:scale(1.01, 1.01);
                }

                > li a {  
                    position: relative; 
                    text-decoration: none;
                    width: 300px;
                    height: 150px;
                    margin: 20px;
                    padding: 30px 10px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-items: center;
                    background: white;
                    box-shadow: 2px 3px 5px rgba(0,0,0,0.25);
                    color: rgb(0, 0, 0);
                    border-radius: 10px;

                    > h2 {
                        margin-bottom: 30px;
                    }

                    > .msg-index {
                        position: absolute;
                        top: -25px;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        width:60px;
                        height:60px;
                        border: 3px solid white;
                        border-radius:100%;
                        background: rgb(82, 119, 78);
                        font-size: 1.5rem;
                        color: white;
                    }

                    > .msg-area {
                        position: relative;
                        width:100%;
                        margin-top: 20px;
                        padding:0;

                        > .msg-msg {
                        margin-top: 10px;
                        width: calc(100%);
                        height: 50px;
                        border-radius: 10px;
                        background: rgb(238, 238, 238);
                        padding:0;
                        }

                        > .msg-time {
                            font-size: 0.3rem;
                            float:right;
                            color: rgb(190, 190, 190);
                        }
                    }
                    
                }

                > li:nth-child(even) a {
                    background: rgb(230, 230, 230);
                    text-decoration: none;
                }
            }
        }
    }
}

@media screen and (min-width: 600px) and (max-width: 1200px) {
    .error-label {
        color:  salmon;
    }

    .invalid {
            border: 1px solid salmon!important;
        }

        .parallax-msg {
        background-image: url('../assets/img/advice.jpg');
        min-height: 500px; 
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index:-1;
        display: flex;
        justify-content: center;
        align-items: center;

        > .reserve-text {
            z-index:3;
            writing-mode: vertical-lr;
            text-orientation: mixed;
            animation: textAnime 3s infinite ease-out;
            
            > h1 {
                color:white;
                text-shadow: -2px 2px 2px rgba(0,0,0,0.5);
            }
        }
    }

    @keyframes textAnime {
                from {
                    transform: translateY(-100px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0px);
                    opacity: 1
                }
            }


    .msgboard-container {      
        width: 100%;
        margin:0;
        padding:0;
        display: grid;
        grid-template-columns: 1fr;
        

        > .input-area {
            margin: auto;
            text-align: center;
            display: grid;
            grid-gap: 10px;

            > div input, div textarea {
                border: 1px solid rgb(187, 187, 187);
                border-radius: 10px;
                padding: 5px;
                width: 100%;
            

            }

            > button {
                border :none;
                padding: 10px;
                border-radius: 30px;
                cursor: pointer;
                background: rgb(82, 119, 78);
                color: white;
                transition: 0.2s ease-in-out;

                &:hover {
                    background: rgb(255, 103, 103);
                    color:white;
                    transform: scale(1.05);
                }
            }
        }
        
        > .note-area {
            max-width: calc(100vh - 40px);
            margin:auto;
            padding:0;
            
            > ul {
                width: 100%;
                height: 100%;
                margin-top: 40px;
                padding:0;
                display: grid;
                grid-template-columns: 1fr 1fr;
                align-items: center; 
                justify-content: center;
                
                > li:hover {
                    transform:scale(1.01, 1.01);
                }

                > li a {  
                    position: relative; 
                    text-decoration: none;
                    width: 300px;
                    height: 150px;
                    margin: 20px;
                    padding: 30px 10px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-items: center;
                    background: white;
                    box-shadow: 2px 3px 5px rgba(0,0,0,0.25);
                    color: rgb(0, 0, 0);
                    border-radius: 10px;

                    > h2 {
                        margin-bottom: 30px;
                    }

                    > .msg-index {
                        position: absolute;
                        top: -25px;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        width:60px;
                        height:60px;
                        border: 3px solid white;
                        border-radius:100%;
                        background: rgb(82, 119, 78);
                        font-size: 1.5rem;
                        color: white;
                    }

                    > .msg-area {
                        position: relative;
                        width:100%;
                        margin-top: 20px;
                        padding:0;

                        > .msg-msg {
                        margin-top: 10px;
                        width: calc(100%);
                        height: 50px;
                        border-radius: 10px;
                        background: rgb(238, 238, 238);
                        padding:0;
                        }

                        > .msg-time {
                            font-size: 0.3rem;
                            float:right;
                            color: rgb(190, 190, 190);
                        }
                    }
                    
                }

                > li:nth-child(even) a {
                    background: rgb(230, 230, 230);
                    text-decoration: none;
                }
            }
        }
    }
}

/* 手機版本 */
@media screen and (min-width: 320px) and (max-width: 768px) {
    .error-label {
    color:  salmon;
}


.invalid {
        border: 1px solid salmon!important;
    }

.parallax-msg {
        background-image: url('../assets/img/advice.jpg');
        min-height: 500px; 
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index:-1;
        display: flex;
        justify-content: center;
        align-items: center;

        > .reserve-text {
            z-index:3;
            writing-mode: vertical-lr;
            text-orientation: mixed;
            animation: textAnime 3s infinite ease-out;
            
            > h1 {
                color:white;
                text-shadow: -2px 2px 2px rgba(0,0,0,0.5);
            }
        }
    }

    @keyframes textAnime {
                from {
                    transform: translateY(-100px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0px);
                    opacity: 1
                }
            }

    .parallax-msg {
        overflow: hidden;
        background-image: url('../assets/img/advice.jpg');
        min-height: 500px; 
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index:-1;
        display: flex;
        justify-content: center;
        align-items: center;

        > .reserve-text {
            z-index:3;
            writing-mode: vertical-lr;
            text-orientation: mixed;
            animation: textAnime 3s infinite ease-out;
            
            > h1 {
                color:white;
                text-shadow: -2px 2px 2px rgba(0,0,0,0.5);
            }
        }
    }

    @keyframes textAnime {
                from {
                    transform: translateY(-100px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0px);
                    opacity: 1
                }
            }

.msgboard-container {      
    max-width: 100%;
    width: 100%;
    margin:auto;
    padding:0;
    display: grid;
    grid-template-columns: 1fr;
    

    > .input-area {
        margin: auto;
        text-align: center;
        display: grid;
        grid-gap: 10px;

        > div input, div textarea {
            border: 1px solid rgb(187, 187, 187);
            border-radius: 10px;
            padding: 5px;
            width: 100%;
        

        }

        > button {
            border :none;
            padding: 10px;
            border-radius: 30px;
            cursor: pointer;
            background: rgb(82, 119, 78);
            color: white;
            transition: 0.2s ease-in-out;

            &:hover {
                background: rgb(255, 103, 103);
                color:white;
                transform: scale(1.05);
            }
        }
    }
     
    > .note-area {
        max-width: calc(100vh - 40px);
        margin:auto;
        padding:0;
        
        > ul {
            width: 100%;
            height: 100%;
            margin-top: 40px;
            padding:0;
            display: grid;
            grid-template-columns: 1fr;
            align-items: center; 
            justify-content: center;
            
            > li:hover {
                transform:scale(1.01, 1.01);
            }

            > li a {  
                position: relative; 
                text-decoration: none;
                width: 300px;
                height: 150px;
                margin: 20px;
                padding: 30px 10px;
                text-align: center;
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: center;
                align-items: center;
                background: white;
                box-shadow: 2px 3px 5px rgba(0,0,0,0.25);
                color: rgb(0, 0, 0);
                border-radius: 10px;

                > h2 {
                    margin-bottom: 30px;
                }

                > .msg-index {
                    position: absolute;
                    top: -25px;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    width:60px;
                    height:60px;
                    border: 3px solid white;
                    border-radius:100%;
                    background: rgb(82, 119, 78);
                    font-size: 1.5rem;
                    color: white;
                }

                > .msg-area {
                    position: relative;
                    width:100%;
                    margin-top: 20px;
                    padding:0;

                    > .msg-msg {
                    margin-top: 10px;
                    width: calc(100%);
                    height: 50px;
                    border-radius: 10px;
                    background: rgb(238, 238, 238);
                    padding:0;
                    }

                    > .msg-time {
                        font-size: 0.3rem;
                        float:right;
                        color: rgb(190, 190, 190);
                    }
                }
                
            }

            > li:nth-child(even) a {
                background: rgb(230, 230, 230);
                text-decoration: none;
            }
        }
    }
}
}
 
</style>