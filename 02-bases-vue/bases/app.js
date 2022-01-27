const app = Vue.createApp({
    // template: `
    // <h1>Hola Mundo</h1>
    // <p>Desde app.js</p>
    // `

    data() {
        return {
            quote: "I'm Batman",
            author:"Bruce wayne" 
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola mundo');
            this.author = "Jhon Ovalles"
            
            this.capilalize()
        },
        capilalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
    
})

app.mount('#myApp');
