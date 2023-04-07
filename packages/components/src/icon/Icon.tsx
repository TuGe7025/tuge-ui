import { computed, defineComponent } from 'vue';
import { iconProps } from './type';

const Icon = defineComponent({
    name: "TIcon",
    props: iconProps,
    setup(props, { slots }) {
        const style = computed(() => {
            if (!props.size && !props.color) {
                return {}
            }
            return {
                ...(props.size ? { 'font-size': props.size + 'px' } : {}),
                ...(props.color ? { 'color': props.color } : {}),
            }
        });
        return () => (
            <i class="t-icon" style={style.value}>{slots.default && slots.default()}</i>
        )
    }
})
export default Icon;
