<template>
    <div>
        <button :class="[
        ns.ns(),
        ns.m(type),
    ]
    " :style="buttonStyle">12</button>
    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent } from "vue";
import { buttonProps, useButtonCustomStyle } from "./button";
import { UseNamespace } from '@rich-ui/utils/use-namespace'
export default defineComponent({
    name: "r-button",
    props: buttonProps,
    setup(props) {
        const { type } = props
        const buttonStyle = useButtonCustomStyle(props)
        const ns = new UseNamespace('button')
        console.log(ns);

        return {
            type,
            buttonStyle,
            ns
        };
    },
});
</script>
  
<style scoped>

</style>
  