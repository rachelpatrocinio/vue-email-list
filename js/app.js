console.log('VUE-EMAIL-LIST');

const {createApp} = Vue

createApp({
    data(){
        return{
            emails: []
        }
    },
    methods:{
        generateEmails(){
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    console.log(response.data.response)
                    this.emails.push(response.data.response)
                    console.log(this.emails)
                })
        }
    },
    created(){
        this.generateEmails()
    }
}).mount('#app')