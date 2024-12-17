<template>
    <view class="content">
        <view v-for="(item, index) in routes" :key="index" @click="handlePush(item.path)">
            {{ item.style.navigationBarTitleText }}
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            routes: [
                {
                    path: "/pages/login/login-withoutpwd",
                    style: {
                        "navigationBarTitleText": "微信免密登录"
                    }
                },
 
                {
                    path: "/pages/pages/userinfo/userinfo",
                    style: {
                        "navigationBarTitleText": "个人资料"
                    }
                },
            ]
        }
    },
    onLoad() {
    },
    methods: {
        handlePush(path) {
            uni.navigateTo({
                url:  path
            });
        }
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
</style>