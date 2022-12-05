import { getCurrentInstance, } from 'vue';
export function useGlobalConfig(key, defaultValue = undefined, block) {
    const config = getCurrentInstance();
    console.log(config);
}
