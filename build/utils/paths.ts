import path from 'path'

// 项目根目录
export const projectRoot = path.resolve(__dirname,'../../')
export const outDir = path.resolve(__dirname,'../../dist')

// w-plus 入口 index.ts
export const wpRoot = path.resolve(__dirname,'../../packages/rich-plus')
// 组件目录
export const compRoot = path.resolve(projectRoot,'packages/components')