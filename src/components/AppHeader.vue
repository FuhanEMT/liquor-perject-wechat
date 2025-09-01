<template>
  <view class="app-header" :style="{ paddingTop: statusBarRpx + 'rpx' }">
    <view class="app-header__inner" :style="{ height: navBarRpx + 'rpx' }">
      <view class="app-header__left">
        <image class="logo" :style="{ width: 119 * logoScale + 'rpx', height: 53 * logoScale + 'rpx' , marginLeft:20 + 'rpx' }" src="../../assets/icon/header-logo.png" />
        <text class="title" style="font-size: 22rpx;margin-left: 5px;">2025短视频大赛</text>
      </view>
      <view class="app-header__right">
      </view>
    </view>
  </view>
  <view :style="{ height: headerRpx + 'rpx' }"></view>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro'
import { ref } from 'vue'

const statusBarHeight = ref(20)
const navBarHeight = ref(44)
const headerHeight = ref(64)

const statusBarRpx = ref(40)
const navBarRpx = ref(88)
const headerRpx = ref(128)
const logoScale = ref(1)

const systemInfo = Taro.getSystemInfoSync()
statusBarHeight.value = systemInfo.statusBarHeight || 20
// 将 px 转 rpx：以 750 设计稿，1px≈2rpx
statusBarRpx.value = (statusBarHeight.value || 20) * 2

let menuButtonRect: WechatMiniprogram.ClientRect | undefined
try {
  // @ts-ignore - weapp env
  menuButtonRect = (Taro as any).getMenuButtonBoundingClientRect?.()
} catch (e) {
  menuButtonRect = undefined
}

if (menuButtonRect) {
  const gap = menuButtonRect.top - statusBarHeight.value
  navBarHeight.value = gap * 2 + menuButtonRect.height
  navBarRpx.value = navBarHeight.value * 2
} else {
  navBarHeight.value = 44
  navBarRpx.value = 88
}

headerHeight.value = statusBarHeight.value + navBarHeight.value
headerRpx.value = headerHeight.value * 2
</script>

<style lang="scss">
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: linear-gradient(180deg, #2b79c9 0%, #1d63ad 100%);

  .app-header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
  }

  .app-header__left {
    display: flex;
    align-items: center;

    .logo {
      margin-right: 12rpx;
    }

    .title {
      font-size: 40rpx;
      color: #ffffff;
      opacity: 0.95;
    }
  }

  .app-header__right {
    height: 28px;
    padding: 0 10px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.25);
    display: flex;
    align-items: center;

    .dot {
      width: 6px;
      height: 6px;
      background: #ffffff;
      border-radius: 50%;
      margin-right: 8px;
      opacity: 0.9;
    }

    .record {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid #ffffff;
      box-sizing: border-box;
      opacity: 0.95;
    }
  }
}
</style> 