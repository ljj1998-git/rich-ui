import { series, parallel } from "gulp";
import { run, withTaskName} from './utils/index'

// gulp 不叫打包 做代码转化
//串行
export default series(
    withTaskName("clean", async () => run('rm -rf ./dist')),
  // 1.打包样式
  withTaskName('buildPackages',()=> run('pnpm run --filter "./packages/*" --parallel build'))
);
