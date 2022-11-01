
module.exports = {
  title: "Rich-UI",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    },
    '/zh/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    sidebarDepth: 2,
    locales: {
      '/en/': {
        nav: [
          { text: "guide", link: "/en/guide/guide" },
          { text: "components", link: "/en/components/install" },
          { text: "External", link: "https://www.baidu.com" },
        ],
        sidebar: {
          '/en/components/': [
            ['/en/components/install', '安装'],
            ['/en/components/button', '按钮'],
          ]
        }
      },
      '/zh/':{
        nav: [
          { text: "指南", link: "/zh/guide/guide" },
          { text: "组件", link: "/zh/components/install" },
          { text: "百度", link: "https://www.baidu.com" },
        ],
        sidebar: {
          '/zh/components/': [
            ['/zh/components/install', '安装'],
            ['/zh/components/button', '按钮'],
          ]
        }
      }
    },
  },
  plugins: {
    'demo-container': {
      locales: [
        {
          "lang": "en-US",
          "demo-block": {
            "hide-text": "Hide",
            "show-text": "Expand",
            "copy-text": "Copy",
            "copy-success": "Successful"
          }
        },
        {
          "lang": "zh-CN",
          "demo-block": {
            "hide-text": "隐藏代码",
            "show-text": "显示代码",
            "copy-text": "复制代码",
            "copy-success": "复制成功"
          }
        },
      ]
    }
  },
};
