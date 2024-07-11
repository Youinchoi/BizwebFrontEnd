
import { createRouter, createWebHistory } from 'vue-router';
import WelcomeHome from '../components/Welcome/WelcomeHome.vue';
import UserLogin from '../components/User/UserLogin.vue';
import UserRegister from '../components/User/UserRegister.vue';
import UserMainHome from '../components/Main/UserMainHome.vue'

const routes = [
  {
    path: '/', // '/welcome-home'
    name: 'WelcomeHome',
    component: WelcomeHome
  },
  {
    path: '/user-login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/user-register',
    name: 'UserRegister',
    component: UserRegister
  },
  {
    path: '/user-mainhome',
    name: 'UserMainHome',
    component: UserMainHome
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router