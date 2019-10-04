<template>
    <div>
        <div v-html="html"></div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'LoginModal',
    data:function() {
        return {
            html : '<p>Loading...</p>',
            data : null
        }
    },
    props: {
        visible : {
            type: Boolean,
            require: true,
            default: false
        }
    },
    created() {
        axios.get('http://localhost:8000/login/naver').then(response=>{
            this.html = response.data;
        })
        // axios.get('http://localhost:8000/login/kakao').then(response=>{
        //     this.html = response.data;
        // })
    }
}
</script>
