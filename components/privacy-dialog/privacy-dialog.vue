<template>
	<up-transition :show="show">
		<view class="privacy-dialog-component">
			<view class="content-box">
				<text class="title-text">用户隐私保护指引</text>
				<view class="privacy-text">感谢您选择使用{{ appConfig.name }}APP，我们非常重视您的个人信息安全和隐私保护，使用我们的产品前，请您仔细阅读此<text class="link-text" @tap="
                        routerServiceInstance.navigateTo('app-pages/app/app-privacy/app-privacy')
                    ">《用户协议》</text>，如您同意此隐私保护指引，请点击同意按钮，开始使用此小程序，我们将尽全力保护您的个人信息及合法权益，感谢您的信任！
				</view>
				<view class="button-box">
					<button class="button reject-btn" @tap="emit('reject')">拒绝</button>
					<button class="button agree-btn" open-type="agreePrivacyAuthorization" @tap="emit('agree')">同意</button>
				</view>
			</view>
		</view>
	</up-transition>
</template>

<script setup lang="ts">
    import { appConfig } from '@/config/app-config';
    import { routerServiceInstance } from '@/common/service/service-instance';

	defineProps({
		show: Boolean
	});

	const emit = defineEmits(["reject", "agree"]);
</script>

<style lang="scss" scoped>
	@import url("./privacy-dialog.scss");
</style>