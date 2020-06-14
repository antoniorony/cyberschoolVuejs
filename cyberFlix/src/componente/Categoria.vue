<template>
    <div class="slider">
          <h2>{{titulo}}</h2>
       <span v-on:mouseover="scrollEsquerda()" v-on:mouseout="clearScroll()"  class="handle handlePrev active">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
      </span>
      
      <div ref="scroller" class="row">
        <div class="row__inner">          
          <filme titulo="Outro Titulo" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
          <filme titulo="Outro Titulo" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
          <filme titulo="Outro Titulo" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
          <filme titulo="Outro Titulo" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
          <filme titulo="Outro Titulo" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
          <filme titulo="Outro Titulo" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
          <filme titulo="Outro Titulo" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
          <filme titulo="Outro Titulo" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
          <filme titulo="Outro Titulo" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
          <filme titulo="Outro Titulo" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
          <filme titulo="Outro Titulo" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
          <filme titulo="Outro Titulo" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
          
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
    props:['titulo'],
    components:{
      filme
    },
    methods: {
    scrollDireita(){
        const self = this;
      this.intervalo = setInterval(()=>{this.$refs.scroller.scrollLeft += 1 }  , 10);
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