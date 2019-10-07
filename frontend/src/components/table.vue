<template>
    <div class="mainTable">
        <todo-input></todo-input>
        <table class="table">
            <caption class="blind">todolist 테이블</caption>
            <colgroup>
                <col width ="40%" span="2">
                <col width ="10%" span="2">
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
                <td><a href="javasciprt:;" v-on:click="see(item.TODO_IDX)">{{item.TITLE}}</a></td>
                <td>{{item.EXPIRED_DATE}}</td>
                <td><a href="javasciprt:;" v-on:click="modify(item.TODO_IDX)">수정</a></td>
                <td><a href="javasciprt:;" v-on:click="remove(item.TODO_IDX,item.TITLE)">삭제</a></td>
            </tr>
            </tbody>
        </table>
        <modal v-if="modal_view"></modal>
    </div>
</template>

<script>
import TodoInput from './input.vue'
import modal from './modal/modal.vue'
  export default {
    name: 'TodoList',
    computed:{
        todoList(){
            return this.$store.getters.getTodo;
        },
        modal_view(){
            return this.$store.getters.getModal;
        }
    },
    components: {
        TodoInput, modal
    },
    mounted(){
        this.$store.dispatch("TODOGET");
    },
    methods:{
        see : function(idx){
            this.$store.dispatch("TODOGETONE",idx);
            this.$store.dispatch("modalview",[true,true]);
        },
        modify : function(idx){
            this.$store.dispatch("TODOGETONE",idx);
            this.$store.dispatch("modalview",[true,false]);
        },
        remove : function(idx,title){
            if(confirm(title + "을 삭제하시겠습니까?")){
                this.$store.dispatch("TODODELETE",idx).then(resolve => {
                    if(resolve == 200){
                        alert("삭제 완료!");
                        location.reload();
                    }
                    else{
                        alert("에러 발생, 다시 시도하여 주십시오.");
                    }
                });
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
        margin: 20px 0 0 0;
        width: 100%;
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
