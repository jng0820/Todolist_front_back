<template>
  <div id="app">
    <button v-on:click="logout">로그아웃</button>
    <Login v-if="!loggedIn"></Login>
    <TodoList v-if="loggedIn"></TodoList>
  </div>
</template>

<script>
import TodoList from './components/table.vue'
import Login from './components/Login.vue'
export default {
  name: 'app',
  components: {
    TodoList,
    Login
  },
  data() {
    return{
      loggedIn : false
    }
  },
  methods : {
    logout : function(){
      this.$store.dispatch('LOGOUT');
    }
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
