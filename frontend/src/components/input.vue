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
                    우선순위 : <input type="text" v-model="priority" placeholder="1부터 10까지">
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
            date: null
        }
    },
    methods: {
        formSubmit : function(){
            this.$store.dispatch('TODOINPUT',{
                title : this.title,
                content : this.content,
                date : this.date,
                priority : this.priority,
                id : this.$store.getters.getID
            })
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
        display: block;
        margin-bottom: 15px;
    }
</style>