<template>
    <k-card>
        <template #content>
            <a-collapse v-model:activeKey="activeKey">
                <a-collapse-panel :key="1" header="This is panel header 1">
                    <r-button>25</r-button>
                </a-collapse-panel>
            </a-collapse>
        </template>

        <template #catalogue>
            <a-anchor>
                <a-anchor-link href="#icon" title="字体" />
            </a-anchor>

        </template>


    </k-card>
</template>

<script lang="ts" setup>
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const activeKey = ref(['1']);
watch(activeKey, val => {
    console.log(val);
});
</script>