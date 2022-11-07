import { series, parallel } from "gulp";
import { run, withTaskName } from './utils/index'
import { genTypes } from "./gen-types";
import { outDir, wpRoot } from "./utils/paths";

const copySourceCode = () => async () => {
  await run(`cp ${wpRoot}/package.json ${outDir}/package.json`);
};

// gulp 不叫打包 做代码转化
//串行
export default series(
  withTaskName("clean", async () => run('rm -rf ./dist')),

  parallel(
    // 1.打包样式
    withTaskName('buildPackages', () => run('pnpm run --filter "./packages/*" --parallel build')),
    // 2.打包所有
    // 执行build命令时会调用rollup，给rollup传参数buildFullComponent，那么就会执行导出任务叫buildFullComponent
    withTaskName("buildFullComponent", () => run("pnpm run build buildFullComponent")),
    // 3.
    withTaskName("buildComponent", () => run("pnpm run build buildComponent"))
  ),
  parallel(genTypes, copySourceCode())
);

// 任务执行器 gulp 任务名 就会执行对应的任务
export * from "./full-component";
export * from "./component";
