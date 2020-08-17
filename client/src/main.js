import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from "./components/Home";
import Login from "./components/Login";
import Account from "./components/Account";
import Lecture from "./components/Lecture";
import Register from "./components/Register";
import TopicSelect from "./components/TopicSelect";
import LandingPage from "./components/LandingPage";
import AOS from 'aos'
import 'aos/dist/aos.css'
import firebase from "firebase";
import "./components/firebaseInit"

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes:[
    {path: "/", component: LandingPage, meta:{ requiresGuest: true }},
    {path: "/login", component: Login, meta:{ requiresGuest: true }},
    {path: "/account", component: Account, meta:{ requiresAuth: true }},
    {path: "/lecture/:id", name: "lecture", component: Lecture, meta:{ requiresAuth: true }},
    {path: "/register", component: Register, meta:{ requiresGuest: true }},
    {path: "/topics", component: TopicSelect, meta:{ requiresAuth: true }},
    {path: "/home", component: Home, meta:{ requiresAuth: true }}
  ],
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // check if not logged in
    if(!firebase.auth().currentUser){
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }else{
      next();
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)) {
    // check if logged in
    if(firebase.auth().currentUser){
      next({
        path: '/home',
        query: {
          redirect: to.fullPath
        }
      });
    }else{
      next();
    }
  }else{
    next();
  }
})

firebase.auth().onAuthStateChanged(function() {

  new Vue({
    created() {
      AOS.init({disable: 'mobile'})
    },
    router,
    render: h => h(App),
  }).$mount('#app');
})