<template>
    <div class="mainTable">
        <todo-input></todo-input>
        <table class="table">
            <caption class="blind">todolist 테이블</caption>
            <colgroup>
                <col width ="25%" span="4">
            </colgroup>
            <thead>
            <tr>
                <th>오늘 할 일</th>
                <th>마감일</th>
                <th>수정</th>
                <th>삭제</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, idx) in todoList" :key="item.idx">
                <td><a href="javasciprt:;" v-on:click="see(idx)">{item.title}</a></td>
                <td>{item.date}</td>
                <td><a href="javasciprt:;" v-on:click="modify(idx)">수정하기</a></td>
                <td><a href="javasciprt:;" v-on:click="remove(idx)">삭제하기</a></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import TodoInput from './input.vue'
  export default {
    name: 'TodoList',
    computed:{
        todoList(){
            return this.$store.getters.getTodo;
        }
    },
    components: {
        TodoInput
    },
    methods:{
        see : function(idx){
            return idx;
        },
        modify : function(idx){
            return idx;
        },
        remove : function(idx){
            return idx;
        }
    }
  }
</script>

<style scoped>
    .mainTable {
        width: 420px;
        margin: 0 auto;
    }
    table{
        margin: 0 auto;
    }
</style>
