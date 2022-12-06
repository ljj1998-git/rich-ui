import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
//自动导入组件
import Components from 'unplugin-vue-components/vite'
//自动按需引入ui库
import {
    ElementPlusResolver,
    AntDesignVueResolver,
    VantResolver,
    HeadlessUiResolver,
    ElementUiResolver
} from 'unplugin-vue-components/resolvers'
// 
import DefineOptions from 'unplugin-vue-define-options/vite';

const path = require('path')

export default defineConfig({
    plugins: [
        vue(),
        DefineOptions(),
        AutoImport({
            imports: ["vue", "vue-router",], //自动引入vue的ref、toRefs、onmounted等，无需在页面中再次引入
            dts: "src/auto-import.d.ts" // 生成声明文件
        }),
        Components({
            dirs: ['src/components'],
            // ui库解析器
            resolvers: [
                ElementPlusResolver(),
                AntDesignVueResolver(),
                VantResolver(),
                HeadlessUiResolver(),
                ElementUiResolver()
            ],
            extensions: ['vue'],
            // 配置文件生成位置
            dts: 'src/components.d.ts'
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})