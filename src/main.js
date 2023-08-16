import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/styles/style.scss";
import "@/styles/font/Dirtyline.css"

createApp(App).use(router).mount('#app')
