<template>
    <div class="flex h-full">
        <div class="m-4 p-6 bg-white flex-1">
            <slot name="content"></slot>
        </div>
        <div class="pl-0 mr-4 box-border w-1/4">
            <a-affix  :offset-top="top" class="w-full">
                <div class="w-full bg-white">
                    <slot name="catalogue"></slot>
                </div>
            </a-affix>
        </div>

        <a-back-top />
    </div>
</template>

<script lang="ts" setup>
const top = ref<number>(80);
</script>