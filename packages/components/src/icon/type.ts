// 组件props类型
import type {ExtractPropTypes} from 'vue';
export const iconProps = {
    size: [Number, String],
    color: {
        type: String
    }
}
export type IconProps = ExtractPropTypes<typeof iconProps>;