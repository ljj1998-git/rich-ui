<template>
    <div>
        <button :class="[
            ns.ns(),
            ns.m(type),
            ns.is('disabled', disabled),
        ]
        " :style="buttonStyle">12</button>
    </div>
</template>
  
<script lang="ts" setup>
import { buttonProps, useButtonCustomStyle } from "./button";
import { UseNamespace } from '@rich-ui/utils/use-namespace'
defineOptions({
    name: 'r-button',
});

const props = defineProps(buttonProps)
const { type, disabled } = props
const buttonStyle = useButtonCustomStyle(props)
const ns = new UseNamespace('button')
console.log(ns);
</script>
  
<style scoped>

</style>
  