import { VueConstructor } from "vue";
import { VueRolr } from './types'
import Rolr from "rolr";

const WATCHERS = new WeakMap();

function renderingDependencyFor(Vue: VueConstructor, rolr: VueRolr) {
  if (WATCHERS.has(rolr)) {
    return WATCHERS.get(rolr);
  }

  const data = { _touch: true };
  const watcher = typeof Vue.observable === "function"
    ? Vue.observable(data)
    : new Vue({ data });

//   rolr.on("updated", () => {
//     watcher._touch = !watcher._touch;
//   });

  WATCHERS.set(rolr, watcher);

  return watcher;
}

function rolrDescriptor(rolr?: VueRolr) {
  if (rolr) {
    return { value: rolr };
  }

  return {
    get() {
      throw new Error(
        "Please provide `Rolr` instance either in `RolrPlugin` or in ComponentOptions",
      );
    },
  };
}

export function rolrPlugin(Vue: VueConstructor, defaultRolr?: VueRolr) {
  Object.defineProperty(Vue.prototype, "$rolr", rolrDescriptor(defaultRolr));

  Vue.mixin({
    beforeCreate() {
      const { rolr, parent } = this.$options;
      const localRolr = rolr || (parent ? parent.$rolr : null);

      if (localRolr) {
        Object.defineProperty(this, "$rolr", { value: localRolr });
      }
    }
  });
}
