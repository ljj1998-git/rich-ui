import { computed, getCurrentInstance, inject, } from 'vue'
export function useGlobalConfig(
    key: string,
    defaultValue:string | undefined = undefined,
    block:string
  ) {
    const config = getCurrentInstance()
    console.log(config);
    
    //   ? inject(configProviderContextKey, globalConfig)
    //   : globalConfig
    // if (key) {
    //   return computed(() => config.value?.[key] ?? defaultValue)
    // } else {
    //   return config
    // }
  }