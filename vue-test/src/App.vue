<template>
  <h1>Hello Vue!!</h1>
  <p>{{ animal }}</p>
  <p>강아지는 {{ food }}를 좋아합니다.</p>
  <input type="text" v-model="food"/>
  <div v-html="alertMessage"></div>
  <div v-html="subscribeHTML"></div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      animal : "Dog",
      food : "Apple",
      alertMessage: "<h2>경고!!</h2>",
      subscribeHTML: `<button onclick="document.querySelector('body').style.background = 'red'">구독하기</button>`
    }
  },
  components: {
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
input {
  font-size: 20px;
}
</style>
