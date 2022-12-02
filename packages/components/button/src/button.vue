<template>
    <button type="button" :class="type ? 'r-button--' + type : ''">
        <slot></slot>
    </button>
</template>
  
<script lang="ts">
import { computed, defineComponent } from "vue";
import { buttonProps } from "./button";
export default defineComponent({
    name: "r-button",
    props: buttonProps,
    setup(props) {
        const { type } = props
        return {
            type
        };
    },
});
</script>
  
<style scoped>

</style>
  