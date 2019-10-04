import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
var resourceHost = "http://localhost:8000";

export default new Vuex.Store({
    state: {
        todolist : [],
        id : null,
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
        }
    },
    actions: {
        LOGIN ({commit},data) {
            return commit('LOGIN', data);
        },
        LOGOUT ({commit}) {
            return axios.get(`${resourceHost}/logout`)
                .then(({data}) => commit('LOGOUT', data))
        }
    },
    getters : {
        getID : function(state){
            return state.id;
        },
        getloggedIn : function(state){
            return state.loggedIn;
        }
    }
})