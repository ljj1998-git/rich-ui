import { outDir, projectRoot } from './utils/paths';
import { buildConfig } from './utils/config';
import { withTaskName } from './utils';
// 专门打包 utils,指令,hooks等

import path from 'path'
import { series,parallel, src, dest } from 'gulp'
import ts from 'gulp-typescript'

export const buildPackages = (dirname:string,name:string) =>{

    // 打包的格式是什么类型 模块规范 cjs es模块规范
    // umd 是浏览器中用的

    const tasks =Object.entries(buildConfig).map(([module,config])=>{
        const output = path.resolve(dirname,config.output.name)
        return series(
            withTaskName(`build:${dirname}`,()=>{
                const tsConfig = path.resolve(projectRoot,'tsconfig.json') // ts的配置文件的路径
                const inputs = ['**/*.ts',"!gulpfile.ts","!node_modules"]
                
                return src(inputs)
                .pipe(ts.createProject(tsConfig,{
                    declaration:true, // 需要生成配置文件
                    strict:false,
                    module:config.module
                })())
                .pipe(dest(output))
            }),
            withTaskName(`copy:${dirname}`,()=>{
                // 放到 es -> utils 和 lib -> utils
                return src(`${output}/**`).pipe(dest(path.resolve(outDir,config.output.name,name)))
            })
        )
    })
    return parallel(...tasks )
}

