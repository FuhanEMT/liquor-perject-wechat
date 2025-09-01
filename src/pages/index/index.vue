<template>
  <view>
    <AppHeader />
    <view class="index" style="position: relative;top: -1px;">
      <!-- 顶部横幅 -->
      <view class="banner">
        <image class="banner-bg" src="../../../assets/img/bar.png" mode="aspectFill" />
        
      </view>

            <!-- 数据统计和上传按钮 -->
      <view class="stats-section">
        <view class="stats-card">
          <view class="stats-card__grid">
            <view class="cell">
              <text class="cell-label">比赛剩余时间</text>
              <view class="cell-value"><text class="num">18</text><text class="unit"> 天 </text><text class="num">22</text><text class="unit"> 小时</text></view>
            </view>
            <view class="divider"></view>
            <view class="cell">
              <text class="cell-label">比赛报名人数</text>
              <text class="cell-value"><text class="num">3305</text></text>
            </view>
            <view class="divider"></view>
            <view class="cell">
              <text class="cell-label">上传作品数量</text>
              <text class="cell-value"><text class="num">1245</text></text>
            </view>
          </view>
          <view class="stats-card__upload">
            <view class="upload-btn">
              <text class="upload-icon">⬆︎</text>
              <text class="upload-text">上传作品</text>
            </view>
            <text class="deadline">(截止于:2025年9月29日 00:00)</text>
          </view>
        </view>
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

  .stats-section {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    padding: 40rpx 30rpx;

    .stats-card {
      background: #ffffff;
      border-radius: 16rpx;
      box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
      overflow: hidden;
      border: 2rpx solid #d0e3ff;

      &__grid {
        display: flex;
        align-items: stretch;
        padding: 24rpx 20rpx 10rpx;

        .cell {
          flex: 1;
          padding: 0 12rpx;
        }

        .divider {
          width: 2rpx;
          background: #e5f1ff;
          margin: 0 8rpx;
        }

        .cell-label {
          display: block;
          font-size: 22rpx;
          color: #717c8e;
          margin-bottom: 8rpx;
          text-align: left;
        }

        .cell-value {
          display: flex;
          align-items: baseline;
          justify-content: flex-start;
          .num {
            font-size: 40rpx;
            color: #1d4fae;
            font-weight: 800;
          }
          .unit {
            font-size: 22rpx;
            color: #1d4fae;
            margin: 0 6rpx;
          }
        }
      }

      &__upload {
        padding: 18rpx 20rpx 24rpx;
        text-align: center;

        .upload-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 420rpx;
          height: 80rpx;
          background: linear-gradient(180deg, #2d7ce0 0%, #1b64b9 100%);
          color: #fff;
          border-radius: 50rpx;
          box-shadow: 0 6rpx 12rpx rgba(29, 100, 185, 0.35);
        }
        .upload-icon {
          margin-right: 10rpx;
          font-size: 28rpx;
        }
        .upload-text {
          font-size: 28rpx;
          font-weight: 700;
        }
        .deadline {
          display: block;
          margin-top: 10rpx;
          font-size: 22rpx;
          color: #8aa0c1;
        }
      }
    }
  }

  .announcement-section {
    background: #ffffff;
    padding: 40rpx 30rpx;
    
    .announcement-header {
      position: relative;
      margin-bottom: 30rpx;
      
      .announcement-title {
        font-size: 40rpx;
        color: #1976d2;
        font-weight: bold;
        display: block;
        margin-bottom: 8rpx;
      }
      
      .announcement-subtitle {
        font-size: 20rpx;
        color: #90caf9;
        display: block;
        letter-spacing: 4rpx;
      }
      
      .number-badge {
        position: absolute;
        top: 0;
        right: 0;
        width: 60rpx;
        height: 60rpx;
        background: #1976d2;
        color: #ffffff;
        border-radius: 8rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28rpx;
        font-weight: bold;
      }
    }
    
    .announcement-content {
      margin-bottom: 40rpx;
      
      .announcement-text {
        font-size: 28rpx;
        color: #333333;
        line-height: 1.6;
      }
    }
    
    .timeline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      .timeline-item {
        background: #f5f5f5;
        border-radius: 12rpx;
        padding: 20rpx;
        text-align: center;
        flex: 1;
        margin: 0 10rpx;
        
        .timeline-year {
          display: block;
          font-size: 24rpx;
          color: #1976d2;
          font-weight: bold;
          margin-bottom: 8rpx;
        }
        
        .timeline-date {
          display: block;
          font-size: 28rpx;
          color: #333333;
          font-weight: bold;
          margin-bottom: 5rpx;
        }
        
        .timeline-label {
          display: block;
          font-size: 24rpx;
          color: #666666;
        }
      }
      
      .timeline-arrow {
        font-size: 32rpx;
        color: #ff9800;
        font-weight: bold;
        margin: 0 20rpx;
      }
    }
  }
}
</style>
