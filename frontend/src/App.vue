<template>
  <div id="app">
    <Header></Header>
    <Login v-if="!loggedIn"></Login>
    <TodoList v-if="loggedIn"></TodoList>
  </div>
</template>

<script>
import TodoList from './components/table.vue'
import Login from './components/Login.vue'
import Header from './components/header.vue'

import axios from 'axios'
import store from './store/index'
export default {
  name: 'app',
  components: {
    TodoList,
    Login,
    Header
  },
  computed: {
    loggedIn(){
      return store.getters.getloggedIn;
    }
  },
  mounted(){
    axios.get("http://localhost:8000/login").then(response => {
        if(response.data != null){
          store.dispatch('LOGIN',response.data);
        }
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
}

.blind{
  display: none;
}
</style>
