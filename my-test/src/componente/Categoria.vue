<template>
<div class="slider">
      <h2>{{titulo}}</h2>
       <span v-on:mouseover="scrollEsquerda()" v-on:mouseout="clearScroll()"  class="handle handlePrev active">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
      </span>
      
      <div id="scroller" class="row">
        <div class="row__inner">
          
          <div class="gui-card">
            <div class="gui-card__media">
              <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                Assassin’s Creed
              </div>
            </div>
          </div>
          <div class="gui-card">
            <div class="gui-card__media">
              <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                Assassin’s Creed
              </div>
            </div>
          </div>
          <div class="gui-card">
            <div class="gui-card__media">
              <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                Assassin’s Creed
              </div>
            </div>
          </div>
          <div class="gui-card">
            <div class="gui-card__media">
              <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                Assassin’s Creed
              </div>
            </div>
          </div>
          <div class="gui-card">
            <div class="gui-card__media">
              <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                Assassin’s Creed
              </div>
            </div>
          </div>
          <div class="gui-card">
            <div class="gui-card__media">
              <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                Assassin’s Creed
              </div>
            </div>
          </div>
          <div class="gui-card">
            <div class="gui-card__media">
              <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                Assassin’s Creed
              </div>
            </div>
          </div>
          <div class="gui-card">
            <div class="gui-card__media">
              <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                Assassin’s Creed
              </div>
            </div>
          </div>
          <div class="gui-card">
            <div class="gui-card__media">
              <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                Assassin’s Creed
              </div>
            </div>
          </div>
          <div class="gui-card">
            <div class="gui-card__media">
              <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                Assassin’s Creed
              </div>
            </div>
          </div>
          <div class="gui-card">
            <div class="gui-card__media">
              <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                Assassin’s Creed
              </div>
            </div>
          </div>
          <div class="gui-card">
            <div class="gui-card__media">
              <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
            </div>
            <div class="gui-card__details">
              <div class="gui-card__title">
                Assassin’s Creed
              </div>
            </div>
          </div>

         </div>
      </div>

      <span v-on:mouseover="scrollDireita()" v-on:mouseout="clearScroll()"  class="handle handleNext active">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
      </span>
    </div>
</template>

<script>
export default {
    name:'categoria',
    props:['titulo']
}
</script>

<style >
    
</style>