import { createApp } from "vue"
import App from './app.vue';

import router from './src/router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import RIcon from '@rich-ui/components/icon'

const app = createApp(App)

app.use(router)
app.use(RIcon)
app.use(Antd)
app.mount('#app')