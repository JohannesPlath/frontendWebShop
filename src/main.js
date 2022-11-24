import axios from 'axios';
import App from './App.vue'
import {createApp} from 'vue'
import {registerPlugins} from '@/plugins'
import store from './store'
import router from './router'


const app = createApp(App)
registerPlugins(app)
app.provide('$axios', axios);
app.use(store)
app.use(router)
app.mount('#app')

