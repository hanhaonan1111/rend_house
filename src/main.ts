import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import 'vant/lib/index.css';
import pinia from '@/store/index'


createApp(App).use(router).use(pinia).mount('#app')
