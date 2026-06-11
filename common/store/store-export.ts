import { useAppStore } from "@/store/app-store";

let appStore: ReturnType<typeof useAppStore> | null = null;

export const getAppStore = () => {
    if (!appStore) {
        appStore = useAppStore();
    }
    return appStore;
};