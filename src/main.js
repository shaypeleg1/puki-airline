import style from './style.scss';
import Vue from 'vue'
import VueRouter from 'vue-router';

// Pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact/contact';
import PlaneCenter from './pages/plane-center/plane-center';

// Components
import MainNav from './components/main-nav';
import AppFooter from './components/app-footer';

Vue.use(VueRouter);

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