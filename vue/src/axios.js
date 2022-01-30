import axios from "axios";
import store from "./store";

const tmpSurveys = [
    {
        id: 100,
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
                   options: [
                           { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                           { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                           { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                           { uuid: "a37810df-1aca-4bc6-93d8-acf2cbcbdfe5", text: "USA" },
                            ]
                      }
            }
        ]

    },
]

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})
api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config;
})
export default api;
