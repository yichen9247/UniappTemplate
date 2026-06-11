<script setup lang="ts">
    import { ref } from "vue";
    import { onShow } from "@dcloudio/uni-app";
    import { appConfig } from '@/config/app-config';
    import { agreed } from "@/common/store/store-computed";
    import { getAppStore } from "@/common/store/store-export";
    import PrivacyDialog from '@/components/privacy-dialog/privacy-dialog.vue';

    const policyDialogShow = ref<boolean>(false);
    
    onShow((): void => {
        if (agreed.value) {
            reLaunchHome();
        } else setTimeout((): void => {
            policyDialogShow.value = true;
        }, 1000);
    });

    const onPolicyReject = (): void => {
        policyDialogShow.value = false;
        if (typeof plus === "undefined") {
            setTimeout(() => policyDialogShow.value = true, 500);
        } else plus.runtime.quit();
    }
    
    const onPolicyAgree = (): void => {
        getAppStore().agreed = true;
        policyDialogShow.value = false;
        reLaunchHome();
    }

    const reLaunchHome = (): void => {
        setTimeout((): void => {
            uni.reLaunch({
		    	url: "/pages/app-frame/frame-home/frame-home"
		    });
        }, 1000);
    }
</script>

<template>
    <view class="app-index-container">
        <view class="image-container">
            <image
                class="image"
                mode="scaleToFill"
                :src="appConfig.splash"
            />
        </view>

        <view class="main-container">
            <view class="main-box">
                <image
                    class="logo"
                    mode="scaleToFill"
                    :src="appConfig.icon"
                />
                <view class="content">
                    <text class="name">{{ appConfig.name }}</text>
                    <text class="desc">{{ appConfig.description }}</text>
                </view>
            </view>
        </view>
        <PrivacyDialog :show="policyDialogShow" @reject="onPolicyReject" @agree="onPolicyAgree"/>
    </view>
</template>

<style>
	page {
		height: 100%;
	}
</style>

<style scoped lang="scss">
    @import url("./app-index.scss");
</style>