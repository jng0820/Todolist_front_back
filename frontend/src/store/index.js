import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
var loginHost = "http://localhost:8000";
var todoHost = "http://localhost:3000/api";

export default new Vuex.Store({
    state: {
        todolist : [],
        loggedIn : false
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
        }
    },
    actions: {
        LOGIN ({commit},data) {
            return commit('LOGIN', data);
        },
        LOGOUT ({commit}) {
            return axios.get(`${loginHost}/logout`)
                .then(({data}) => commit('LOGOUT', data))
        },
        TODOINPUT ({commit}, data) {
            axios.post(`${todoHost}/`,data);
        },
        TODOGET ({commit}) {
            return axios.get(`${todoHost}/`)
                .then(({data}) => commit('TODOGET',data))
        },
        TODOGETONE ({commit},data) {
            return axios.get(`${todoHost}/${data}`)
                .then(({data}) => commit('TODOGET',data))
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
        }
    }
})