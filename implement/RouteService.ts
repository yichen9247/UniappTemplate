/**
 * 路由服务实现类
 * @authot yichen9247
 */
export class RouteService {
	navigateTo(path: string): void {
        (uni.navigateTo({
            url: `/pages/${path}`
        }) as any).catch(() => {
            uni.showToast({
                icon: "none",
                title: "正在开发中",
            });
        });
	}

    redirectTo(path: string): void {
        (uni.redirectTo({
            url: `/pages/${path}`
        }) as any).catch(() => {
            uni.showToast({
                icon: "none",
                title: "正在开发中",
            });
        });
    }
}