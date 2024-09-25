<template>
	<view class="content">
		<view class="search">
			<view class="left">
				<image class="searchIcon" src="/static/home/search.png"></image>
				<input class="uni-input" focus placeholder="" />
			</view>
			<view class="right">
				<image class="filterIcon" src="/static/home/filter.png"></image>
			</view>
		</view>

		<image class="banner" src="/static/banner/banner1.png"></image>

		<view class="main">

		</view>

	</view>
</template>

<script>
const sysAdmin = uniCloud.importObject('sysAdmin');

export default {
	data() {
		return {}
	},
	async onLoad() {
		uniCloud.callFunction({
			name: 'pubAdmin',
			data: {
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
		const res = await sysAdmin.login('title demo', 'content demo');
		console.log(res); // 输出 { errCode: 0, errMsg: '创建成功' }
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
	height: 100vh;
	background: #f6f6f9;
	padding: 50rpx 0;

	.search {
		margin-bottom: 60rpx;
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-around;
		width: 700rpx;

		.left {
			position: relative;

			.uni-input {
				background: #fff;
				border-radius: 100rpx;
				height: 80rpx;
				width: 600rpx;
			}

			.searchIcon {
				width: 40rpx;
				height: 40rpx;
				position: absolute;
				top: 20rpx;
				left: 30rpx;
			}

		}

		.right {
			width: 80rpx;
			height: 80rpx;
			background: #fff;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;

			.filterIcon {
				width: 40rpx;
				height: 40rpx;
			}
		}



	}

	.banner {
		width: 700rpx;
		height: 240rpx;
		border-radius: 40rpx;
		background: rgba(255, 223, 117, 1);
	}
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