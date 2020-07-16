import Vue, { VNode } from "vue";
import { VueRolr } from '../types'

export type RolrProps = {
    is: string,
    has: string
}

export type PassthroughProps<T extends VueRolr> = RolrProps & {
    not?: boolean,
    passThrough?: boolean
}

export default Vue.extend<PassthroughProps<VueRolr>>({
    name: 'Rolr',
    functional: true,
    props: {
        is: String,
        has: String,
        not: Boolean,
        passThrough: Boolean
    },
    render(h, { data, props, parent, children}): VNode | VNode[] {
        const mixed = props as any;
        const rights = (mixed.is || mixed.has || '')

        if (!rights) {
            throw new Error("[Vue Rolr]: neither `is` nor `has` prop was passed in <Rolr>");
        }

        const isAllowed = parent.$rolr.has(rights);
        const canRender = props.not ? !isAllowed : isAllowed;

        if (!props.passThrough) {
           return canRender ? children : [];
        }

        if (!data.scopedSlots || !data.scopedSlots.default) {
            throw new Error("[Vue Rolr]: `passThrough` expects default scoped slot to be specified");
        }

        return data.scopedSlots.default({
            allowed: canRender,
            rolr: parent.$rolr
        }) as VNode;
    }
})
