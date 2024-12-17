<template>
	<view class="content">
		<view class="header">
			<uni-swiper-dot class="topBanner">
				<swiper style="height: 300rpx;">
					<swiper-item v-for="(item, index) in info" :key="index">
						<view class="banner"
							style="background: url('/static/banner/banner1.png') no-repeat center center;">
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>

			<view class="card">

				<uni-swiper-dot @clickItem="clickItem" :info="info" :current="current" :mode="mode"
					:dotsStyles="dotsStyles">
					<swiper class="swiperWarp" @change="change" :current="swiperDotIndex">
						<swiper-item class="swiperContent">
							<view v-for="(item, index) in 8" :key="index" @click="openApp(item)">
								<view class="app">
									<image class="appIcon" :src="`/static/apps/app_${item}.png`" />
									<view class="appTitle">
										标题{{item}}
									</view>
								</view>
							</view>
						</swiper-item>

						<swiper-item class="swiperContent">
							<view v-for="(item, index) in [9,10,11,12,13,14]" :key="index" @click="openApp(item)">
								<view class="app">
									<image class="appIcon" :src="`/static/apps/app_${item}.png`" />
									<view class="appTitle">
										标题{{item}}
									</view>
								</view>
							</view>
						</swiper-item>


					</swiper>
				</uni-swiper-dot>

			</view>
		</view>

		<view class="news">
			<view class="news-header">
				<view class="left">
					最新资讯
				</view>
				<view class="right">
					更多
				</view>
			</view>

			<view class="news-list">
				<view class="news-item" v-for="item,index in 10" :key="index">
					<view class="news-title">
						标题
					</view>

					<view class="news-info">

						<view class="left">
							来源：未知
						</view>

						<view class="right">
							日期：2024-12-12
						</view>

					</view>
				</view>
			</view>

		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				info: [{
						url: '/static/banner/banner1.png',
						content: '内容 A'
					},
					{
						url: '/static/banner/banner1.png',
						content: '内容 B'
					},
					{
						url: '/static/banner/banner1.png',
						content: '内容 C'
					}
				],
				current: 0,
				mode: 'round',
				swiperDotIndex: 0,
				dotsStyles: {
					backgroundColor: 'rgba(255, 90, 95,0.3)',
					border: '1px rgba(255, 90, 95,0.3) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
					selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
				}
			}
		},
		onLoad() {

		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			clickItem(e) {
				this.swiperDotIndex = e;
			},
			openApp(e) {
				console.log('openApp', e)
			}
		}
	}
</script>

<style scoped>
	.content {

		.header {
			height: 40vh;
			background: #f2f5f8;
			position: relative;
			display: flex;
			justify-content: center;

			:deep .topBanner .uni-swiper__dots-item {
				display: none;
			}

			.banner {
				width: 100%;
				height: 300rpx;
				background-size: cover;
				mask-image: linear-gradient(to bottom, black 70%, transparent);
				transform: translateY(-20rpx);
			}

			.card {
				position: absolute;
				width: 95%;
				height: 440rpx;
				background: #fff;
				border-radius: 40rpx;
				bottom: 30rpx;

				.swiperWarp {
					height: 440rpx;

					.swiperContent {

						display: flex;
						flex-wrap: wrap;

						.app {
							display: flex;
							flex-direction: column;
							align-items: center;
							padding: 12rpx 18rpx;

							.appIcon {
								border-radius: 50rpx;
								width: 140rpx;
								height: 140rpx;
							}

							.appTitle {}
						}
					}
				}
			}
		}

		.news {
			overflow: scroll;

			.news-header {
				display: flex;
				justify-content: space-between;
				padding: 20rpx 40rpx;
			}

			.news-list {
				padding: 20rpx 40rpx;

				.news-item {
					display: flex;
					flex-direction: column;
					border-bottom: 1px solid #efefef;
					row-gap: 20rpx;
					padding: 20rpx 0;

					.news-title {}

					.news-info {
						display: flex;
						justify-content: space-between;

						.left {}

						.right {}
					}
				}
			}
		}
	}
</style>