<template>
  <img v-if="img" :src="img" alt="bg" />
  <div class="bg-dark"></div>

  <div class="indecision-container">

    <input v-model="question" type="text" placeholder="Hazme una pregunta" />
    <p>Recuerda terminar un signo de interrogacion (?)</p>

    <div v-if="isValidQuestion">
        <h2 >{{question}}</h2>
        <h1>{{answer}}</h1>

    </div>
 </div>
</template>

<script>
export default {
    data() {
       return{
           question:null,
           answer:null,
           img:null,
           isValidQuestion:false
       } 
    },
    methods:{
      async getAnswer(){
          this.Answer = 'Pensando...'
        
         const {answer,image} = await fetch('https://yesno.wtf/api').then(r =>r.json())
      
         this.answer=answer === 'yes' ? 'Si!' : 'No!'
         this.img=image
        // this.espanol()
      }  
   
   },
    watch:{
        question(value, oldValue){

            this.isValidQuestion=false

            if(!value.includes('?')) return
             this.isValidQuestion=true
            //TODO: Realizar petición http
            this.getAnswer()
        }
    },
    // computed:{
    // espanol(){
    //     if(this.answer == 'yes'){
    //         this.answer= 'Si!'
    //     }else if(this.answer == 'no'){
    //         this.answer= 'No!'
    //     }
    // }
    // }

};
</script>


<style scoped>
    img,
    .bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
    }

    .bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
    position: relative;
    z-index: 99;
    }

    input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    }
    input:focus {
    outline: none;
    }

    p {
    color: white;
    font-size: 20px;
    margin-top: 0px;
    }

    h1,
    h2 {
    color: white;
    }

    h2 {
    margin-top: 150px;
    }
</style>
