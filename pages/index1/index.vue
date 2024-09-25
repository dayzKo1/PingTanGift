<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'PTG1'
		}
	},
	onLoad() {
		uniCloud.callFunction({
			name: 'pubAdmin',
			data: {
				url: 'sysAdmin/login',
				data: {
					userName: "123",
					password: "456"
				},
				userInfo: {
					token: "123456"
				}
			}
		}).then((res) => {
			console.log(res.result)
		}).catch((err) => {
			console.error(err)
		})
	},
	methods: {

	}
}
</script>

<style scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>