<template>
  <div id="app">
    <button v-if="loggedIn" v-on:click="logout">로그아웃</button>
    <Login v-if="!loggedIn"></Login>
    <TodoList v-if="loggedIn"></TodoList>
  </div>
</template>

<script>
import TodoList from './components/table.vue'
import Login from './components/Login.vue'
import axios from 'axios'
import store from './store/index'
export default {
  name: 'app',
  components: {
    TodoList,
    Login
  },
  methods : {
    logout : function(){
      store.dispatch('LOGOUT');
    }
  },
  computed: {
    loggedIn(){
      return store.getters.getloggedIn;
    }
  },
  mounted(){
    axios.get("http://localhost:8000/login").then(response => {
        if(response.data != null)
        store.dispatch('LOGIN',response.data);
    });
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
