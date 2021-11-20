const app = Vue.createApp({
    // template: `
    // <h1>Hola Mundo</h1>
    // <p>Desde app.js</p>
    // `

    data() {
        return {
            message: 'Hola Mundo'
        }
    }
    
})

app.mount('#myApp');


let lod = 126.00235063188191;
let lodDat = 189;
let conver = 0.3525;

console.log(lod+=lodDat*conver);