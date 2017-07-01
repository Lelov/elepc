import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import vueAxios from 'vue-axios';
// import home from '../components/home/home';
// import welcome from '../components/welcome/welcome';

Vue.use(Router);
Vue.use(vueAxios, axios);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../components/home/home'], resolve)
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: resolve => require(['../components/welcome/welcome'], resolve)
    }
  ]
});
