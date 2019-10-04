import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
var resourceHost = "http://localhost:8000";

export default new Vuex.Store({
    state: {
        todolist : [],
        id : null
    },
    mutations: {
        LOGIN (state, {data}){
            state.id = data.id;
        },
        LOGOUT (state, {data}){
            state.id = null;
        }
    },
    actions: {
        LOGIN_NAVER ({commit}) {
            return axios.get(`${resourceHost}/login/naver`)
              .then(({data}) => commit('LOGIN', data))
          },
        LOGIN_KAKAO ({commit}) {
            return axios.get(`${resourceHost}/login/kakao`)
                .then(({data}) => commit('LOGIN', data))
        },
        LOGOUT ({commit}) {
            return axios.get(`${resourceHost}/logout`)
                .then(({data}) => commit('LOGOUT', data))
        }
    }
})