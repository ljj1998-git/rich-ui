const mdContainer = require("markdown-it-container");
module.exports = (md) => {
  //将markdown-it-container插件加载到当前的解析器实例中
  md.use(mdContainer, "component", {
    validate(params) {
      //函数在开始标记后验证尾部，成功时返回true
      return params.trim().match(/^component\s*(.*)$/);
    },
    render(tokens, idx) {
      //渲染器函数
      const m = tokens[idx].info.trim().match(/^component\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : "";
        console.log(description);
        // opening tag
        return `<card>
                  <div slot="title">组件的标题</div>
                  <div slot="description">${description} + 6668</div>
                  <div slot="source">424245</div>
                </card>
                  `;
      } else {
        // closing tag
        return `</card>`;
      }
    },
  });
};
