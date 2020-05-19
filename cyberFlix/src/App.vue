<template>
  <div id="app">
    <h2>Meu Componente! Projeto: {{nomeProjeto}}</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      nomeProjeto: 'CyebrFlix com VUEJS'
    }
  }
}
</script>
<!--
23
BOM PESSOAL AGORA VAMOS VER A ESTRUTURA DO NOSOS PROJETO, BOM TEMOS AQUI O PACKEGE.JSON, ONDE POSSUI AS DEPENDENDCIAS
QUANDO CRIAMOS NO NPM INSTALL ELE LER AS CONFIGURAÇÕES E GERA O NODE_MODULOS
NA NOSSA PASTA SRC, É ONDE FICAM OS CODIGOS DA NOSSA APLICAÇÃO, O WEBPACKEKE ELE PEGA TUDO QUE ESTIVER
AQUI NESTA PASTA E TRANSFORMA TUDO EM JAVASCRIPT PURO E PREPARA A APLICAÇÃO PARA SUBIR AO SERVIDOR
NO .BABELRC, TEMOS AS CONFIGURAÇÕE DO BABEL, NO INDEX.HTML, É O ARQUIVO PRINCIPAL, ONDE ELE LINKA PARA UM ARQUIVO 
BUILD.JS, QUE SÓ EXISTIRÁ QUANDO GERARMOS NOSSA APLICAÇÃO, 
NO PACKEGE.JSON É ONDE ESTÃO AS DEPNDENCIAS E SCRIPTS DE EXECUÇÃO PARA NOSSA APLICAÇÃO
AS CONFIGURAÇÃO DO NOSSO WEBPACK ESTÁ NO WEBPACK.JSON, E NÃO VAMSO MEXER NELES.

aula 24 - BAIXANDO TEMA

IR NO GITHUB E FAZER UM CLONE.

  -->
<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
