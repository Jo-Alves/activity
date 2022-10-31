<template>
  <div>
    <!-- <Question1/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Question1 from "@/components/question-1.vue"

export default {
  name: 'App',
  components: {
    // Question1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
