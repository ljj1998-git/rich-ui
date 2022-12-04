
import RIcon from './icon'
import RButton from './button'

import { App } from 'vue'
const components = [RIcon,RButton]
export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  }
}