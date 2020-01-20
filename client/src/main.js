import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from "./components/Home";
import Login from "./components/Login";
import Account from "./components/Account";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes:[
    {path: "/", component: Home},
    {path: "/login", component: Login},
    {path: "/account", component: Account}
  ],
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
