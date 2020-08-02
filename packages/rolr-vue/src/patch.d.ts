import Vue from "vue";
import Rolr from "rolr";

declare module "vue/types/vue" {
  interface Vue {
    $rolr: Rolr;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    rolr?: Rolr;
  }
}
