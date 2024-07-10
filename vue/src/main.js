import { createApp } from 'vue';
import App from './components/App.vue';
//import MainMainHome from '../src/components/Main/MainHome.vue';
import router from './router';
import axios from 'axios';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import './assets/startbootstrap-sb-admin-2-gh-pages/css/sb-admin-2.min.css';

// Axios 설정
const axiosInstance = axios.create({
  baseURL: 'http://localhost:18080', // Spring Boot 서버의 주소
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept': 'application/json'
  },
});

// Vue 인스턴스 생성
const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);

// Vue의 글로벌 프로퍼티에 axios 추가
app.config.globalProperties.$http = axiosInstance;

// Vue 인스턴스 마운트
app.mount('#app');
