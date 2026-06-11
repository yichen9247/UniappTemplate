import { ref } from "vue";
import { defineStore } from "pinia"
import { AppStore } from "@/types/store/AppStore";

export const useAppStore = defineStore("appStore", (): AppStore => {
    const agreed = ref<boolean>(false);

    return { agreed }
}, { persist: { storage: {
    getItem: uni.getStorageSync,
    setItem: uni.setStorageSync,
    removeItem: uni.removeStorageSync
}} } as any);