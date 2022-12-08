// 这里主要放置的是组建的props, 和一些公共方法
import type { ExtractPropTypes } from 'vue'
export const buttonProps = {
    type: {
        type: String,
    },
    size:{
        type:String,
        default:'default'
    },
    disabled: {
        type: Boolean,
        default: false,
    }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>


export const useButtonCustomStyle = (props: ButtonProps) => {
    return {}
}