import {createStore} from "vuex";
import api from "../axios";

const tmpSurveys = [
    {
        id: 100,
        title: "TheCodeholic the youtobe chanel",
        slug: "thecodeholic the youtobe chanel",
        status: "draft",
        image: "",
        description: "My name is Zura i developed long year i teach php laravel vs ",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-20 18:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                description: null,
                data: {
                    options:
                        [
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                        ]
                },
            },
            {
                id: 2,
                type: "checkbox",
                question: "From which country are Lorem ipsum?",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributio",
                data: {
                    options:
                        [
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                        ]
                },

            },
            {
                id: 3,
                type: "radio",
                question: "From which country are Lorem ipsum?",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributio",
                data: {
                    options:
                        [
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "Georgia" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                        ]
                },

            }
        ]

    },
    {
        id: 200,
        title: "TheCodeholic the youtobe chanel",
        slug: "thecodeholic the youtobe chanel",
        status: "draft",
        image: "https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        description: "My name is Zura i developed long year i teach php laravel vs ",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-20 18:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                description: null,
                data: {
                    options:
                        [
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                        ]
                },
            },
            {
                id: 2,
                type: "checkbox",
                question: "From which country are Lorem ipsum?",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributio",
                data: {
                    options:
                        [
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                        ]
                },

            },
            {
                id: 3,
                type: "radio",
                question: "From which country are Lorem ipsum?",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributio",
                data: {
                    options:
                        [
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "Georgia" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                        ]
                },

            }
        ]

    },
    {
        id: 300,
        title: "TheCodeholic the youtobe chanel",
        slug: "thecodeholic the youtobe chanel",
        status: "draft",
        image: "https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        description: "My name is Zura i developed long year i teach php laravel vs ",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-20 18:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                description: null,
                data: {
                    options:
                        [
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                        ]
                },
            },
            {
                id: 2,
                type: "checkbox",
                question: "From which country are Lorem ipsum?",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributio",
                data: {
                    options:
                        [
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                        ]
                },

            },
            {
                id: 3,
                type: "radio",
                question: "From which country are Lorem ipsum?",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributio",
                data: {
                    options:
                        [
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfd5", text: "USA" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cicadas5", text: "Georgia" },
                            { uuid: "a37810df-1aca-4bc6-93d8-acf2cabbed5", text: "USA" },
                        ]
                },

            }
        ]

    },
]

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
