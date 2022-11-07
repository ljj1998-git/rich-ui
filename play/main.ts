import { createApp } from "vue"
import App from './app.vue';

import KIcon from '@rich-ui/components/icon'

const app = createApp(App)

app.use(KIcon)
app.mount('#app')