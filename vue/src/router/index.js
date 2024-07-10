import { createRouter, createWebHistory } from 'vue-router';
import MainHome from '../components/Main/MainHome.vue';
import UserLogin from '../components/User/UserLogin.vue';
import UserRegister from '../components/User/UserRegister.vue';
import UserMainHome from '../components/Main/UserMainHome.vue'

const routes = [
  {
    path: '/main-home',
    name: 'MainHome',
    component: MainHome
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