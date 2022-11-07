// 导入组件，组件必须声明 name
import earth from "./src/earth.vue";
// 为组件提供 install 安装方法，供按需引入
earth.install = function (Vue) {
  Vue.component(earth.name, earth);
};
// 默认导出组件
export default earth;
