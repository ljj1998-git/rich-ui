import { createApp } from "vue"
import App from './app.vue';

import router from './src/router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './src/assets/css/tailwind.css'

import richUi from '../packages/components';
import '../packages/theme-chalk/src/index.scss';
// import RIcon from '../dist'

const app = createApp(App)

app.use(router)
app.use(richUi)
app.use(Antd)
app.mount('#app')

