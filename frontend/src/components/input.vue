<template>
    <div class="table_input">
        <form v-on:submit="formSubmit()" action="#">
            <fieldset>
                <legend class="blind">TODO 입력</legend>
                <span>
                    제목 : <input type="text" v-model="title"/>
                </span>
                <span>
                    내용 : <textarea type="text" v-model="content"></textarea>
                </span>
                <span>
                    마감일 : <input type="datetime-local" v-model="date">
                </span>
                <span>
                    우선순위 : <input type="text" v-model="priority" placeholder="0부터 9까지" maxlength="1">
                </span>
                <button type="submit">입력</button>
            </fieldset>
        </form>
    </div>    
</template>
<script>
export default {
    name: 'TodoInput',
    data() {
        return {
            title: "",
            content: "",
            priority: null,
            date: null,
        }
    },
    methods: {
        formSubmit : function(){
            if(isNaN(Number(this.priority))|| Number(this.priority) > 9 ){
                alert("유효한 우선순위값을 입력해주세요.")
            }
            else{
                this.$store.dispatch('TODOINPUT',{
                    title : this.title,
                    content : this.content,
                    date : this.date,
                    priority : this.priority,
                    id : this.$store.getters.getID
                }).then(resolve =>{
                    if(resolve == 200){
                        alert("입력 완료!");
                        location.reload();
                    }
                    else{
                        alert("에러 발생, 다시 시도하여 주십시오.");
                    }
                })
            }
        }
    }
}
</script>
<style scoped>
    .table_input {
        width: 420px;
        margin: 0 auto;
    }
    .table_input span{
        float: left;
        display: block;
        margin-bottom: 15px;
    }
    fieldset {
        padding: 10px 30px 10px 30px;
    }
    input, textarea{
        width: 215px;
    }
</style>