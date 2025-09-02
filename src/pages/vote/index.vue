<template>
  <view>
    <AppHeader />
    <view class="index" style="position: relative;top: -1px;">
      <!-- 顶部横幅 -->
      <view class="banner">
        <image class="banner-bg" src="../../../assets/img/bar.png" mode="aspectFill" />

      </view>

    </view>
  </view>
</template>

<script setup>

</script>

<style lang="scss">
.index {
  .banner {
    position: relative;
    height: 300rpx;
    overflow: hidden;

    .banner-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .banner-content {
      position: relative;
      z-index: 2;
      display: flex;
      height: 100%;
      padding: 40rpx 30rpx;

      .banner-left {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        .wine-bottle {
          width: 120rpx;
          height: 200rpx;
        }
      }

      .banner-right {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30rpx;

        .main-title {
          font-size: 48rpx;
          color: #ffffff;
          font-weight: bold;
          margin-bottom: 10rpx;
        }

        .sub-title {
          font-size: 28rpx;
          color: #ffffff;
          opacity: 0.9;
          margin-bottom: 8rpx;
        }

        .contest-title {
          font-size: 24rpx;
          color: #ffffff;
          opacity: 0.8;
          margin-bottom: 15rpx;
        }

        .sponsor-logos {
          .sponsor-text {
            font-size: 20rpx;
            color: #ffffff;
            opacity: 0.7;
          }
        }
      }
    }
  }
}
</style>
