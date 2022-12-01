import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

const path = require('path')

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ["vue", "vue-router"], //自动引入vue的ref、toRefs、onmounted等，无需在页面中再次引入
            dts: "src/auto-import.d.ts" // 生成声明文件
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})