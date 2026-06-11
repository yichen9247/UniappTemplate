import { computed } from "vue";
import { getAppStore } from "./store-export";

export const agreed = computed((): boolean => {
    return getAppStore().agreed;
});