<template>
    <k-card>
        <template #content>
            <a-collapse v-model:activeKey="activeKey">
                <a-collapse-panel :key="1" header="基础用法">
                    <div class="flex">
                        <a name="base"></a>
                        <r-button type="default" size="large">25</r-button>
                        <r-button type="primary">225</r-button>
                        <r-button type="success" size="small">25</r-button>
                    </div>
                </a-collapse-panel>
                <a-collapse-panel :key="2" header="按钮禁用">
                    <a name="disabled"></a>
                    <r-button type="primary" disabled>25</r-button>
                </a-collapse-panel>
            </a-collapse>
        </template>

        <template #catalogue>
            <a-anchor>
                <a-anchor-link href="#base" title="基础用法" />
                <a-anchor-link href="#disabled" title="按钮禁用" />
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