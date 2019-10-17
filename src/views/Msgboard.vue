<template>
    <div>
        <div class="input-box">
        <input type="text" v-model="newboard.name">
        <textarea cols="50" rows="5" v-model="newboard.msg"></textarea>
       
        <md-datepicker></md-datepicker>
        </div>
        <button @click="createMessage()">發布貼文</button>
        <div v-for="(each, index) in messages" :key="index">
            {{ each.username }} {{ each.message }}  {{ each.timestamp }}
        </div>
    </div>
</template>

<script>
import { fb, db } from './firebase.js';
import moment from 'moment'
import ElementUI from 'element-ui'

export default {
    components:{
        ElementUI
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
        let ref = db.collection('msgboard').orderBy('timestamp')

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
</script>