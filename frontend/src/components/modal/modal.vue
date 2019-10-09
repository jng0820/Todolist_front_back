<template>
    <div class="modal_view">
        <div class="modal_content">
            <div v-if="isView">
                <span>제목</span>
                <span class="todo">{{todoList[0].TITLE}}</span>
                <span>내용</span>
                <article class="todo">{{todoList[0].CONTENT}}</article>
                <span>마감</span>
                <span class="todo">{{todoList[0].EXPIRED_DATE}}</span>
                <span>우선순위</span>
                <span class="todo">{{todoList[0].PRIORITY}}</span>
                <button type="button" v-on:click="close()">닫기</button>
            </div>
            <div v-if="!isView">
                <span>제목</span>
                <input class="todo" type="text" v-model="todoList[0].TITLE" />
                <span>내용</span>
                <textarea class="todo" type="text" v-model="todoList[0].CONTENT"></textarea>
                <span>마감</span>
                <input class="todo" type="datetime-local" v-model="todoList[0].EXPIRED_DATE" />
                <span>우선순위</span>
                <input class="todo" type="text" v-model="todoList[0].PRIORITY" maxlength="1">
                <div>
                    <button type="button" v-on:click="close()">닫기</button>
                    <button type="button" v-on:click="modify()">수정</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal',
    computed: {
        todoList(){
            return this.$store.getters.getTodo;
        },
        isView(){
            return this.$store.getters.getViewOrNot;
        }
    },
    methods: {
        close: function(){
            this.$store.dispatch("TODOGET");
            this.$store.dispatch("MODALVIEW",[false,false]);
        },
        modify: function(){
            this.$store.dispatch('TODOMODIFY',{
                title : this.todoList[0].TITLE,
                content : this.todoList[0].CONTENT,
                date : this.todoList[0].EXPIRED_DATE,
                priority : this.todoList[0].PRIORITY,
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
    .modal_view{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transform: scale(1.1);
        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
    }
    .modal_content{
        opacity: 1;
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        width: 300px;
    }
    span, input, article,textarea {
        width: 100%;
        display: block;
        margin: 0 auto;
    }
    .todo{
        border: 1px solid black;
        text-align: center;
    }
    button{
        margin: 20px 10px 0 10px;
    }
</style>