<template>
  <div id="app">
    <h2>Hello</h2>
    <img alt="Vue logo" src="./assets/logo.png">
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from './components/table.vue'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
