<template>
    <div class="Login">
        <img src="../assets/naver.png" @click="naver" />
        <img src="../assets/kakao.png" @click="kakao" />
        <input />
    </div>
</template>

<script>
import JQuery from 'jquery'
import axios from 'axios';
import store from '../store/index'

  export default {
    name: 'Login',
    data() {
        return{
            popup_window : {}
        }
    },
    mounted(){
        JQuery(document).ready(function(){
            JQuery("input").on("propertychange change",function(){
                axios.get("http://localhost:8000/login").then(response => {
                    store.dispatch('LOGIN',response.data);
                });
            });
        });
    },
    methods: {
        naver: function(){
            window.open("http://localhost:8000/login/naver","네이버 로그인","width=500px,height=500px");
        },
        kakao: function(){
            window.open("http://localhost:8000/login/kakao","카카오 로그인","width=500px,height=500px");
        }
    }
  }
</script>

<style scoped>
    img {
        width : 200px;
        margin: 0 auto;
        margin-bottom: 20px;
        display: block;
    }
    input {
        display: none;
    }
</style>