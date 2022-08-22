var app = new Vue({
    el:'#app',
    data : {
        currEmail: '',
        emailArray: []
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    this.currEmail = response.data.response;
                    this.emailArray.push(this.currEmail);
                }
            )
        }
        console.table(this.emailArray)
    }
})