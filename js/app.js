console.log('VUE-EMAIL-LIST');

const {createApp} = Vue

createApp({
    data(){
        return{
            emails: [],
            nEmail: 10,
            numbers: []
        }
    },
    methods:{
        generateEmails(nEmail){
            for(let i = 0; i < nEmail; i++){
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        const generatedEmail = response.data.response
                        this.emails.push(generatedEmail)
                        // console.log(this.emails)
                    })
            } 
        },
        generateNumbers(nNumbers){
            for(let i = 0; i < nNumbers; i++){
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/int')
                .then((response) => {
                    // console.log(response.data.response)
                    const generatedNumber = response.data.response
                    this.numbers.push(generatedNumber);
                    console.log(this.numbers);
                })
            }
        }
    },
    created(){
        this.generateEmails(this.nEmail)
        this.generateNumbers(5)
    }
}).mount('#app')