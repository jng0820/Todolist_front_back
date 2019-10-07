<template>
    <div class="header">
        <a href="http://localhost:8080/">Todolist</a>
        <a href="javascript:;" class="login" v-if="loggedIn" v-on:click="logout">로그아웃</a>
        <a href="javascript:;" class="login" v-if="loggedIn" v-on:click="refresh">연장</a>
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
        },
        refresh: function(){
            this.$store.dispatch('REFRESH');
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
        width: 55%;
        height: 100%;
        line-height: 48px;
        color: white;
        text-decoration: none;
    }
    .login {
        font-size: 10px;
        float: right;
        width:10% !important;
        color: black;
        font-weight: bold;
    }
</style>