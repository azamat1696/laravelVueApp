import {createRouter, createWebHistory} from "vue-router";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Surveys from "../views/Surveys.vue";
import DefaultLayout from "../components/Defaultlayout.vue";
import store from "../store";
import AuthLayout from "../components/AuthLayout.vue";

const routes = [
    {
        path: '/',
        redirect:'/dashboard',
        name: 'DefaultLayout',
        meta:{requiresAuth: true },
        component: DefaultLayout,
        children: [
            {path:'/dashboard',name:'Dashboard',component:Dashboard},
            {path:'/surveys',name:'Surveys',component:Surveys}
        ]
    },
    {
        path: '/login',
        name: 'Auth',
        meta: {isGuest: true},
        component: AuthLayout,
        children: [
          {
              path: '/login',
              name: 'Login',
              component: Login
          },
          {
              path: '/register',
              name: 'Register',
              component: Register
          }
      ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth && !store.state.user.token ){
        next({name:'Login'});
    } else if(store.state.user.token && to.meta.isGuest ) {
        next({name:'Dashboard'})
    } else {
        next()
    }
})

export default router;
