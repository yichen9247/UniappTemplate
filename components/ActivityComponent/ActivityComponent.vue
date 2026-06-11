<script setup>
	defineProps({
		title: {
			type: String,
			required: true
		},
		empty: {
			type: Boolean,
			default: false,
			required: false
		},
		loading: {
			type: Boolean,
			default: false,
			required: false
		}
	});
</script>

<template>
	<view class="activity-component">
		<view class="page-header">
			<up-icon class="icon left-icon" name="arrow-left" color="#363636" :size="18" @click="
				uni.navigateBack(undefined)
			"/>
			<text class="title-text">{{ title }}</text>
			<slot name="right"/>
		</view>
		
		<view class="page-content">
			<up-loading-icon v-if="loading" class="loading-box" mode="circle" text="正在加载中"/>
			<up-empty v-else-if="empty" mode="data" text="暂未获取到相关数据"/>
			<slot v-else/>
		</view>
	</view>
</template>

<style scoped lang="scss">
	@import "ActivityComponent.scss";
</style>