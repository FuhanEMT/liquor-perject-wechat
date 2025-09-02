<template>
  <view>
    <AppHeader />
    <view class="index" style="position: relative;top: -1px;">
      <!-- 顶部横幅 -->
      <view class="banner">
        <image class="banner-bg" src="../../../assets/img/bar.png" mode="aspectFill" />
      </view>

      <view class="bg">
        <view style="color: #2A5DB0;text-align: center;
    padding-top: 450rpx;">10.25开启，敬请期待~</view>
      </view>

     
    </view>
  </view>
</template>

<script setup>

</script>

<style lang="scss">
.bg{
  width: 100%;
  height: 1250rpx;
  background: linear-gradient(180deg, #DCEDFF 0%, rgba(220, 237, 255, 0.30) 100%) , url(../../../assets/img/footer.webp) no-repeat center/cover;
  position: relative;
}
.vote-list{
  background: #135690;
  padding: 20rpx;
  display: flex;
  flex-direction: row;
  gap: 15rpx;
  
  .vote-item {
    position: relative;
    flex: 1;
    height: 63rpx;
    border-radius: 15rpx;
    
    .vote-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    
    .vote-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;

      
      .vote-title {
        font-size: 24rpx;
        color: #ffffff;
        font-weight: bold;
        margin-bottom: 5rpx;
        text-shadow: 1rpx 1rpx 2rpx rgba(0, 0, 0, 0.5);
        text-align: center;
        line-height: 1.2;
      }
      
      .vote-info {
        font-size: 18rpx;
        color: #ffffff;
        opacity: 0.9;
        text-shadow: 1rpx 1rpx 2rpx rgba(0, 0, 0, 0.5);
        text-align: center;
      }
    }
  }
}

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
