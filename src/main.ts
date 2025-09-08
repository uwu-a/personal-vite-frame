import {createApp} from 'vue'

import './assets/public.scss'
import App from './App.vue'
import pinia from './pinia/pinia.ts'
import router from './router/router.ts'

// import 'element-plus/dist/index.css';

createApp(App).use(router).use(pinia).mount('#app')
