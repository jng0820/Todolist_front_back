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
            <tr v-for="(item, TODO_IDX) in todoList" :key="item.TODO_IDX">
                <td><a href="javasciprt:;" v-on:click="see(TODO_IDX)">{{item.TITLE}}</a></td>
                <td>{{item.EXPIRED_DATE}}</td>
                <td><a href="javasciprt:;" v-on:click="modify(TODO_IDX)">수정하기</a></td>
                <td><a href="javasciprt:;" v-on:click="remove(TODO_IDX,title)">삭제하기</a></td>
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
    mounted(){
        this.$store.dispatch("TODOGET");
    },
    methods:{
        see : function(idx){
            return idx;
        },
        modify : function(idx){
            return idx;
        },
        remove : function(idx,title){
            if(confirm(title + "을 삭제하시겠습니까?")){
                this.$store.dispatch("TODODELETE",this.todoList[idx].TODO_IDX);
            }
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
        margin: 20px auto;
        border-collapse: collapse;
    }
    td, th {
        border: 1px solid black;
    }
    th {
        background-color: green;
        color: white;
    }

</style>
