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

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes:[
    {path: "/", component: Home},
    {path: "/login", component: Login},
    {path: "/account", component: Account},
    {path: "/lecture", component: Lecture},
    {path: "/register", component: Register},
    {path: "/topics", component: TopicSelect},
    {path: "/landing", component: LandingPage}
  ],
  mode: "history"
});

new Vue({
  created () {
    AOS.init({disable: 'mobile'})
  },
  router,
  render: h => h(App),
}).$mount('#app');
