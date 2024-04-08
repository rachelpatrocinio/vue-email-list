console.log('VUE-EMAIL-LIST');

const {createApp} = Vue

createApp({
    data(){
        return{
            emails: []
        }
    },
    methods:{
        generateEmails(nEmail){
            for(let i = 0; i < nEmail; i++){
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    const generatedEmail = response.data.response
                    this.emails.push(generatedEmail)
                    // console.log(this.emails)
                })
            } 
        }
    },
    created(){
        this.generateEmails(10)
    }
}).mount('#app')