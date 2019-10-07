<template>
    <div class="modal_view">
        <div v-if="IsView">
            <span>제목</span>
            <span class="todo">{{todoList[0].title}}</span>
            <span>내용</span>
            <article class="todo">{{todoList[0].content}}</article>
            <span>마감</span>
            <span class="todo">{{todoList[0].date}}</span>
            <span>우선순위</span>
            <span class="todo">{{todoList[0].priority}}</span>
            <button type="button" v-on:click="close()">닫기</button>
        </div>
        <div v-if="!IsView">
            <span>제목</span>
            <input class="todo" type="text" v-bind="todoList[0].title" />
            <span>내용</span>
            <textarea class="todo" type="text" v-bind="todoList[0].content"></textarea>
            <span>마감</span>
            <input class="todo" type="datetime-local" v-bind="todoList[0].date" />
            <span>우선순위</span>
            <input type="text" v-bind="todoList[0].priority" maxlength="1">
            <div>
                <button type="button" v-on:click="close()">닫기</button>
                <button type="button" v-on:click="modify()">수정</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal',
    computed: {
        isView: function(){
            return this.$store.getters.getViewOrNot;
        },
        todoList(){
            return this.$store.getters.getTodo;
        }
    },
    methods: {
        close: function(){
            this.$store.dispatch("MODALVIEW",[false,false]);
        },
        modify: function(){
            this.$store.dispatch('TODOINPUT',{
                title : this.todoList[0].title,
                content : this.todoList[0].content,
                date : this.todoList[0].date,
                priority : this.todoList[0].priority,
                id : this.$store.getters.getID,
                idx : this.todoList[0].TODO_IDX
            }).then(resolve =>{
                if(resolve == 200){
                    alert("수정 완료!");
                    location.reload();
                }
                else{
                    alert("에러 발생, 다시 시도하여 주십시오.");
                }
            })
        }
    }
}
</script>

<style scoped>
    span, input, article {
        display: block;
        margin: 0 auto;
    }
</style>