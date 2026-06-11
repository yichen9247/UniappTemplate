import { ref } from "vue";

/**
 * 吐司服务实现类
 * @author yichen9247
 */
export class ToastService {
    loading = ref<boolean>(false);

    showToast({ icon, title }: {
        title: string,
        icon: "none" | "success" | "loading"
    }): void {
        this.hideLoadingToast();
        uni.showToast({ icon, title });
    }

    showLoadingToast(title: string): void {
        this.loading.value = true;
        uni.showLoading({ title, mask: true });
    }

    hideLoadingToast(): void {
        uni.hideLoading();
        this.loading.value = false;
    }
}