// 这里主要放置的是组建的props, 和一些公共方法
import type { ExtractPropTypes } from 'vue'
export const iconProps = {
    size:{
        type:Number
    },
    color:{
        type:String
    }
}

export type IconProps = ExtractPropTypes<typeof iconProps>