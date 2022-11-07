## Button 按钮
常用的操作按钮。

### 基础用法
::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
```html
<template>
  <r-button></r-button>
  <r-earth></r-earth>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>
<style>
.red-center-text { 
  color: #ff7875;
  text-align: center;
}
</style>
:::

### 基础用法2
::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**

```html
<template>
  <r-button></r-button>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>
<style>
.red-center-text { 
  color: #ff7875;
  text-align: center;
}
</style>
:::

|参数|说明|类型|可选值|默认值|
| ------------- |:-------------:| -----:| -----:| -----:|
| col 3 is      | right-aligned | $1600 |$1600 |$1600 |
| col 2 is      | centered      |   $12 |$12 |$12 |
| zebra stripes | are neat      |    $1 | $1 | $1 |