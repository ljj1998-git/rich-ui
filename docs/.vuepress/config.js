const container = require("../utils/containers");
module.exports = {
  title: "rich-ui",
  description: "开始你的组件化之旅吧~",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guide/guide" },
      { text: "组件", link: "/components/install" },
      { text: "External", link: "https://www.baidu.com" },
    ],
    sidebar:{
      '/components/':[
        ['/components/install', '安装'],
        ['/components/button', '按钮'],
      ]
      
     
    }
  },
  plugins: [
    [
      {
        chainMarkdown(config) {
          //修改内部的 markdown 配置
          config // 增加额外的插件markdownContainers
            .plugin("markdownContainers")
            .use(container)
            .end();
        },
      },
    ],
  ],
};
