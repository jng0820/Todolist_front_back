import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
var loginHost = "http://localhost:8000";
var todoHost = "http://localhost:3000/api";

export default new Vuex.Store({
    state: {
        todolist : [],
        loggedIn : false,
        modal_view : false,
        isview : false
    },
    mutations: {
        LOGIN (state, data){
            state.id = data.user_id;
            state.loggedIn = true;
        },
        LOGOUT (state){
            state.id = null;
            state.loggedIn = false;
        },
        TODOGET (state, data){
            state.todolist = data;
        },
        MODALCHANGE (state, data){
            state.isview = data[1];
            state.modal_view = data[0];
        }
    },
    actions: {
        LOGIN ({commit},data) {
            return commit('LOGIN', data);
        },
        LOGOUT ({commit}) {
            axios.get(`${loginHost}/logout`)
                .then(({data}) => {
                    commit('LOGOUT', data);
                    alert("로그아웃 되었습니다.");
            })
        },
        REFRESH({commit}){
            axios.get(`${loginHost}/refresh`).then(res =>{
                if(res.status == 200){
                    alert("연장되었습니다.");
                }
            })
        },
        TODOINPUT ({commit}, data) {
            return new Promise((resolve,reject)=>{
                axios.post(`${todoHost}/`,data).then(res=>{
                    resolve(res.status);
                });
            })
        },
        TODOGET ({commit}) {
            return axios.get(`${todoHost}/`)
                .then((data) => commit('TODOGET',data.data.datas))
        },
        TODOGETONE ({commit},data) {
            return axios.get(`${todoHost}/${data}`)
                .then((data) => commit('TODOGET',data.data.datas))
        },
        TODODELETE (_, IDX) {
            return new Promise((resolve,rej)=>{
                axios.delete(`${todoHost}/${IDX}`).then(res=>{
                    return resolve(res.status);
                });
            })
        },
        TODOMODIFY (_, data){
            return new Promise((resolve,reject)=>{
                axios.put(`${todoHost}/${data.idx}`,data).then(res=>{
                    return resolve(res.status);
                })
            })
        },
        MODALVIEW ({commit},data){
            return commit('MODALCHANGE',data);
        }
    },
    getters : {
        getID : function(state){
            return state.id;
        },
        getloggedIn : function(state){
            return state.loggedIn;
        },
        getTodo : function(state){
            return state.todolist;
        },
        getModal : function(state){
            return state.modal_view;
        },
        getViewOrNot : function(state){
            return state.isview;
        }
    }
})