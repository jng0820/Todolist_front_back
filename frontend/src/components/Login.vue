<template>
    <div class="Login">
        <img src="../assets/naver.png" @click="naver" />
        <img src="../assets/kakao.png" @click="kakao" />
        <LoginModal></LoginModal>
    </div>
</template>

<script>
import axios from 'axios';
import LoginModal from '../modal/login'
  export default {
    name: 'Login',
    components:{
        LoginModal
    },
    methods: {
        naver: function(){
            var value = window.open("http://localhost:8000/login/naver","네이버 로그인","width=500px,height=500px");
            axios.get(value.location.href).then(response => {
                console.log(response.data);
            });
            // this.$store.dispatch('LOGIN_NAVER');
            // console.log("aa")
        },
        kakao: function(){
            var value = window.open("http://localhost:8000/login/kakao","카카오 로그인","width=500px,height=500px");
            axios.get(value.location.href).then(response => {
                console.log(response.data);
            });
            // console.log("cc");
        }
    }
  }
</script>

<style scoped>
    .Login {
        width: 450px;
        margin: 0 auto;
    }
    img{
        margin: 0 auto 20px;
        display: block;
        height: 45px;
    }
</style>