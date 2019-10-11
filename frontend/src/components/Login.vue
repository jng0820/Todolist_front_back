<template>
    <div class="Login">
        <img src="../assets/naver.png" @click="naver" />
        <img src="../assets/kakao.png" @click="kakao" />
        <input />
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store/index'

  export default {
    name: 'Login',
    methods: {
        naver: function(){
            var popup_window = window.open("/auth/login/naver","네이버 로그인","width=500px,height=500px");
            var popupTick = setInterval(function() {
                if (popup_window.closed) {
                    clearInterval(popupTick);
                    axios.get("/auth/login",{ 
                    }).then(response => {
                        store.dispatch('LOGIN',response.data);
                    });
                }
            }, 500);
        },
        kakao: function(){
            var popup_window = window.open("/auth/login/kakao","네이버 로그인","width=500px,height=500px");
            var popupTick = setInterval(function() {
                if (popup_window.closed) {
                    clearInterval(popupTick);
                    axios.get("/auth/login",{ 
                    }).then(response => {
                        store.dispatch('LOGIN',response.data);
                    });
                }
            }, 500);
        }
    }
  }
</script>

<style scoped>
    img {
        width : 200px;
        margin: 0 auto 10px auto;
        display: block;
    }
    input {
        display: none;
    }
</style>