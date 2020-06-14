<template>
    <div class="slider">
          <h2>{{titulo}}</h2>
       <span v-on:mouseover="scrollEsquerda()" v-on:mouseout="clearScroll()"  class="handle handlePrev active">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
      </span>
      
      <div ref="scroller" class="row">
        <div class="row__inner">          
          <filme v-for="filme in filmes" v-bind:key="filme.id" v-bind:titulo="filme.titulo" v-bind:imagem="filme.imagem"></filme>
          
         </div>
      </div>

      <span v-on:mouseover="scrollDireita()" v-on:mouseout="clearScroll()"  class="handle handleNext active">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
      </span>
    </div>
</template>

<script>
import filme from './Filme.vue';

export default {
    name:'categoria',
    props:['titulo', 'filmes'],
    components:{
      filme
    },
    methods: {
    scrollDireita(){
        const self = this;
        this.intervalo = setInterval(()=>{self.$refs.scroller.scrollLeft += 1 }  , 10);
    },
    scrollEsquerda(){
        const self = this;
      this.intervalo = setInterval(function(){ self.$refs.scroller.scrollLeft -= 1 }  , 10);
    },
    learScroll(){
      clearInterval(this.intervalo);
    }
  }
}
</script>

<style >
    
</style>