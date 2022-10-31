const md_loader = require('./md-loader')
module.exports = {
  title: "rich-ui",
  description: "开始你的组件化之旅吧~",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guide/guide" },
      { text: "组件", link: "/components/install" },
      { text: "External", link: "https://www.baidu.com" },
    ],
    sidebar: {
      '/components/': [
        ['/components/install', '安装'],
        ['/components/button', '按钮'],
      ]


    }
  },
  plugins: [
    [md_loader()],
  ],
};
