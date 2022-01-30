import {createStore} from "vuex";
import api from "../axios";


const store = createStore({
    state: {
        user:{
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        }
    },

    getters: {},
    actions: {
        register({ commit },user ){
            return api.post('/register', user)
                .then(({data})=> {
                        commit('setUser', data);
                        return data;
                    }
                );
        },
        login({commit},user){
            return api.post('/login',user)
                .then(({data})=> {
                    commit('setUser',data)
                    return data;
                })
        },
        logout({commit}){
              return api.post('/logout')
                  .then((res)=>{
                      commit('logout');
                      return res;
                  })
        }
    },
    mutations: {
        logout:state => {
                state.user.data = {},
                state.user.token = null,
                    sessionStorage.clear("TOKEN");

        },
        setUser: (state,userData) => {
               state.user.token = userData.token;
               state.user.data = userData.user;
               sessionStorage.setItem("TOKEN",userData.token);

        }
    },
    modules: {}
});

export default store;
