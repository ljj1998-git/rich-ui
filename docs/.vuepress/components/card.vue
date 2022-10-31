<template>
  <div class="box">
    <div class="b_title">
      <slot name="title"></slot>
    </div>
    <div class="b_description">
      <slot name="description"></slot>
    </div>
    <div class="b_component">
      <!-- 插入组件 -->
      <slot name="component"></slot>
    </div>
  </div>
</template>
<script>
import { button } from '../../../packages/index'
export default {
  // components:{
  //   "r-button":button
  // },
  data(){
    return {
      
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  .b_title {
  }
  .b_description {
  }
  .b_component {
  }
}
</style>
