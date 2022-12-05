import { createApp } from "vue"
import App from './app.vue';

import router from './src/router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './src/assets/css/tailwind.css'

const app = createApp(App)

import '@rich-ui/theme-chalk/src/index.scss';
import { RIcon, RButton, REarth } from '@rich-ui/components'
app.use(RIcon as any).use(RButton as any).use(REarth as any)

// import richUi from '../dist/index.esm.js'
// import '../dist/theme-chalk/css/index.css'
// app.use(richUi)

app.use(router)
app.use(Antd)
app.mount('#app')

