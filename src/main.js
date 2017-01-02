import style from './style.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';

// Pages
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

import PlaneCenter from './pages/plane-center/plane-center';
import PassengerCenter from './pages/passenger-center/passenger-center';

// Components
import MainNav from './components/main-nav/main-nav';
import AppFooter from './components/app-footer';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

window.eventBus = new Vue();

const routes = [
      {
        path: '/',
        component: Home
      },
      {
        path: '/contact',
        component: Contact
      },
      {
        path: '/plane-center',
        component: PlaneCenter
      },
      {
        path: '/passenger-center',
        component: PassengerCenter
      },
      {
        path: '/about',
        component: About
      }
    ]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router,
  components: {
    'main-nav': MainNav,
    'app-footer': AppFooter
  }
}).$mount('#app')