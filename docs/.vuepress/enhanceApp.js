import richUI from "../../packages/index";
import '../../packages/theme-chalk/index.scss'

export default ({
  Vue
}) => {
  // 注册组件库
Vue.use(richUI);
}