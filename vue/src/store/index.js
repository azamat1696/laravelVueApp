import {createStore} from "vuex";
import api from "../axios";









const tmpSurveys = [
{
    "id": 116,
    "image_url": "https://api.yoursurveys.xyz/images/zI3jrTUOhJjHvxXd.png",
    "title": "Voluptas vitae sunt",
    "slug": "voluptas-vitae-sunt",
    "status": false,
    "description": "Quia minima magnam e",
    "created_at": "2022-02-02 04:51:44",
    "updated_at": "2022-02-02 04:51:44",
    "expire_date": "2022-02-05",
    "questions": [
    {
        "id": 96,
        "type": "radio",
        "question": "Sunt nemo unde enim",
        "description": "Quibusdam alias hic",
        "data": {
            "options": [
                {
                    "uuid": "ce3cd27a-a38e-45e4-a91a-acca1030b131",
                    "text": "Eligendi dolor magna"
                },
                {
                    "uuid": "99004864-d971-4ae0-9f9a-e0d43456f483",
                    "text": "Reprehenderit volupt"
                },
                {
                    "uuid": "fa67c757-b29b-4426-9af6-d6638d316da8",
                    "text": "Expedita at quae mol"
                },
                {
                    "uuid": "79c8717c-c8e4-4c08-9f83-27c6ea0745c4",
                    "text": "Ex ea sit id vel und"
                }
            ]
        }
    },
    {
        "id": 97,
        "type": "select",
        "question": "Sapiente possimus s",
        "description": "Inventore ut facere",
        "data": {
            "options": []
        }
    },
    {
        "id": 98,
        "type": "radio",
        "question": "Cupidatat voluptatem",
        "description": "Eligendi totam iure",
        "data": {
            "options": []
        }
    },
    {
        "id": 99,
        "type": "checkbox",
        "question": "Est numquam error e",
        "description": "Rerum totam in lauda",
        "data": {
            "options": []
        }
    },
    {
        "id": 100,
        "type": "checkbox",
        "question": "Dolor in ipsa labor",
        "description": "Voluptate quis natus",
        "data": {
            "options": [
                {
                    "uuid": "c5c930df-6cf2-4873-bd2a-f3179effe870",
                    "text": "sdsdsdsdsdsds"
                }
            ]
        }
    },
    {
        "id": 101,
        "type": "radio",
        "question": "Distinctio Eiusmod",
        "description": "Dolores dolor tenetu",
        "data": {
            "options": [
                {
                    "uuid": "29eb211b-b329-432d-abba-9381ca04cfce",
                    "text": "dsdsdsd"
                },
                {
                    "uuid": "40480b85-c984-40e9-b325-d485a0a33fcc",
                    "text": "sdsdsdsdsds"
                }
            ]
        }
    }
]
}]


const store = createStore({
    state: {
        user:{
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        surveys: [...tmpSurveys],
        questionTypes: ["text","select","radio","checkbox","textarea"],
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
            console.log(store.state.surveys)
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
