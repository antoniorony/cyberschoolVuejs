<template>
    <div class="gui-card" v-bind:style="efeitoClick" v-on:click="clickEfeito()" v-on:mouseout="removeEfeito()">
            <div class="gui-card__media">
              <img class="gui-card__img" v-bind:src="imagem" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                {{titulo}}
              </div>
            </div>
          </div>
</template>

<script>
export default {
    props:['titulo', 'imagem'],
    data() {
      return {
        efeitoClick: null,
      }
    },
    methods: {
      clickEfeito: function(){
        this.efeitoClick = 'transform: scale(1.9); margin-right:110px';
      },
      removeEfeito:function(){
        this.efeitoClick= null;
      }
    },
}

//vamos agora aprender a adicionar um efeito aqui no nosso componente filme, bom então vamos lá pessoal
//ao clicar no componente, ele vai aumentar o tamanho e mostrar mais detalhes, ok pessoal.
//eu quero capturar o evento de quando eu clico no componente e de quando eu saio dele também.
//bom para fazer isso vou aqui criar dois métodos
</script>

<style >
  
</style>