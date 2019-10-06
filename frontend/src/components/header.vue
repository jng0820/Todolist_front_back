<template>
    <div class="header">
        <a href="http://localhost:8080/">Todolist</a>
        <button v-if="loggedIn" v-on:click="logout">로그아웃</button>
    </div>
</template>

<script>
  export default {
    name: 'Header',
    computed: {
        loggedIn(){
            return this.$store.getters.getloggedIn;
        }
    },
    methods: {
        logout : function(){
            this.$store.dispatch('LOGOUT');
        }
    }
  }
</script>

<style scoped>
    .header{
        width: 425px;
        height: 50px;
        background-color: green;
        margin: 0 auto 10px auto;
    }
    .header > a {
        display: inline-block;
        width: 70%;
        height: 100%;
        line-height: 48px;
        color: white;
        text-decoration: none;
    }
    .header button {
        margin: 10px 5px 0 0;
        float: right;
    }
</style>