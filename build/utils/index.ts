import { spawn } from 'child_process'
import { projectRoot } from './paths'
// 添加任务名称
export const withTaskName = (name:string, fn: any) => Object.assign(fn, { displayName: name });

// 在node中使用子进程来运行脚本
export const run = async (command:string) =>{
    return new Promise((resolve)=>{
        const [cmd,...args] = command.split(" ")
        const app = spawn(cmd,args,{
            cwd:projectRoot,
            stdio:'inherit', // 直接将这个子进程的输出共享给父进程
            shell:true // windows 默认情况下 linux 才支持 rm -rf
        })
        app.on('close',resolve)
    })
}