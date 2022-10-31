<template>
  <div class="hello">
    <h1>Testando o conhecimento</h1>
    <img src="../assets/mouse.jpg" alt="icône Mouse eletrônico">
    <p>Olá,</p>
    <p>Que tal testar o seu conhecimento sobre a utilização do mouse?</p>
    <router-link :to="{name: 'questao-1'}">Vamos lá</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

img {
  width: 100px;
  height: 100px;
}
</style>
