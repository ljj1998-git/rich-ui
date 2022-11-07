// 打包样式
import gulpsass from "gulp-sass"
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import path from 'path'

import {series,src,dest } from 'gulp'
function compile(){
    const sass = gulpsass(dartSass)
    return src(path.resolve(__dirname,"./src/*.scss"))
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(dest('./dist/css'));
}

function copyfont(){
    return src(path.resolve(__dirname,"./src/fonts/**"))
    .pipe(cleanCss())
    .pipe(dest('./dist/fonts'));
}

// 拷贝
function copyfullStyle(){
    return src(path.resolve(__dirname,'./dist/**'))
    .pipe(dest(path.resolve(__dirname,'../../dist/theme-chalk')))
}

export default series(
    compile,
    copyfont,
    copyfullStyle
)