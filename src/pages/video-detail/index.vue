<template>
  <view class="video-detail">
    <!-- <AppHeader /> -->
    <view class="video-header">
      <view class="header-left" @click="goBack">
        <view class="back-arrow">‹</view>
      </view>
      <view class="header-center">
        <text class="header-title">投票</text>
      </view>
      <view class="header-right">
        <view class="toggle-container">
          <view class="toggle-section toggle-left">
            <view class="dots">
              <view class="dot dot-1"></view>
              <view class="dot dot-2"></view>
              <view class="dot dot-3"></view>
            </view>
          </view>
          <view class="toggle-divider"></view>
          <view class="toggle-section toggle-right active">
            <view class="circle">
              <view class="inner-dot"></view>
            </view>
          </view>
        </view>
      </view>
    </view>
    
    <view class="video-container">
      <!-- 视频/图片展示区域 -->
      <view class="video-display">
        <image 
          class="video-image" 
          :src="videoInfo.coverUrl" 
          mode="aspectFill"
        />
        <view class="play-button">
          <text class="play-text">查看视频</text>
        </view>
      </view>
      
      <!-- 作品详情区域 -->
      <view class="work-details" prop="prop">
        <view class="work-header">
          <text class="work-title">{{ videoInfo.title }}</text>
          <view class="vote-badge">
            <text class="vote-count">{{ videoInfo.voteCount }}票</text>
          </view>
        </view>
        
        <view class="work-description" prop="prop">
          <view class="description-text">{{ videoInfo.description }}</view>
        </view>
        
        <view class="work-metrics" prop="prop">
          <view class="heat-info">
            <image class="heat-icon" src="../../../assets/icon/huo.webp" mode="aspectFit" />
            <text class="heat-text">{{ videoInfo.heatCount }}热度</text>
          </view>
          <view class="work-id" prop="prop">
            <image class="id-icon" src="../../../assets/icon/z.webp" mode="aspectFit" />
            <text class="id-text">作品编号: {{ videoInfo.workId }}</text>
          </view>
        </view>
      </view>
      
      <!-- 底部操作按钮 -->
      <view class="action-buttons" prop="prop">
        
        <view class="button-row">
          <view class="share-button">
            <image class="share-icon" src="../../../assets/icon/fenx.webp" mode="aspectFit" />
            <text class="share-text">分享</text>
          </view>
          <view class="vote-button">
            <text class="vote-text">给TA投票</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppHeader from '../../components/AppHeader.vue'
import Taro from '@tarojs/taro'

const videoInfo = ref({
  id: '',
  title: '',
  workId: '',
  videoUrl: '',
  coverUrl: '',
  voteCount: 0,
  heatCount: 0,
  description: ''
})

const goBack = () => {
  Taro.navigateBack()
}

onMounted(() => {
  // 使用 Taro 的方式获取页面参数
  const router = Taro.getCurrentInstance()
  const options = router?.router?.params || {}
  
  if (options.id) {
    // 根据ID获取视频详情
    loadVideoDetail(options.id)
  }
})

const loadVideoDetail = (id) => {
  // 这里应该调用API获取视频详情
  // 暂时使用模拟数据
  videoInfo.value = {
    id: id,
    title: '作品名称作品名称作品名',
    workId: 'xj20250912130',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    coverUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center',
    voteCount: 1254,
    heatCount: 200,
    description: '这是一个精彩的参赛作品，展现了创作者的才华和创意。作品通过独特的视角和精湛的技艺，完美诠释了中秋团圆的主题。'
  }
}
</script>

<style lang="scss">
.video-detail {
  width: 100%;
  background: linear-gradient(180deg, #DCEDFF 0%, rgba(220, 237, 255, 0.10) 100%), url(../../../assets/img/footer.webp) no-repeat center/cover;
    position: relative;
    background-size: 100% 100%;
}

.video-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 88rpx;
  background: #0E57A3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30rpx;
  z-index: 999;
  padding-top: env(safe-area-inset-top);
  padding-top: calc(env(safe-area-inset-top) + 20rpx);
}

.header-left {
  width: 60rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  .back-arrow {
    font-size: 70rpx;
    color: #ffffff;
    font-weight: 300;
    line-height: 1;
  }
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .header-title {
    font-size: 32rpx;
    color: #ffffff;
    font-weight: 400;
  }
}


.toggle-container {
  width: 120rpx;
  height: 50rpx;
}

.toggle-section {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &.toggle-left {
    .dots {
      display: flex;
      align-items: center;
      gap: 4rpx;
      
    }
  }
  
  &.toggle-right {
    &.active {
      .circle {
        width: 32rpx;
        height: 32rpx;
        background: #ffffff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .inner-dot {
          width: 8rpx;
          height: 8rpx;
          background: #0E57A3;
          border-radius: 50%;
        }
      }
    }
  }
}

.toggle-divider {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 2rpx;
  height: 30rpx;
  background: rgba(255, 255, 255, 0.3);
}

.video-container {
  margin-top: calc(env(safe-area-inset-top) + 107rpx);
}

// 视频展示区域
.video-display {
  position: relative;
  width: 100%;
  height: 1006rpx;
  overflow: hidden;
  margin-bottom: 20rpx;
  
  .video-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(14, 87, 163, 0.8);
    border-radius: 40rpx;
    padding: 10rpx 75rpx;
    opacity: 0.5;
    
    .play-text {
      color: #ffffff;
      font-size: 28rpx;
      position: relative;
    top: -2px;
    }
  }
}

// 作品详情区域
.work-details {
  padding: 30rpx;
  margin-bottom: 20rpx;
  
  .work-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20rpx;
    
    .work-title {
      flex: 1;
      font-size: 32rpx;
      font-weight: 400;
      color: #333333;
      line-height: 1.3;
      margin-right: 20rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: calc(100% - 120rpx);
    }
    
    .vote-badge {
      position: absolute;
        right: 0rpx;
        background: linear-gradient(180deg, #D9B560 0%, #DAAE6B 100%);
        color: #ffffff;
        padding: 8rpx 20rpx;
        border-radius: 30rpx 0 0 30rpx;
        font-size: 24rpx;
        font-weight: 400;
        z-index: 3;
      
      .vote-count {
        color: #ffffff;
        font-size: 24rpx;
        font-weight: 500;
      }
    }
  }
  
  .work-description {
    margin-bottom: 20rpx;
    margin-top: 25rpx;
    .description-text {
      font-size: 24rpx;
      font-weight: 400;
      color: #456F93;
      text-indent: 1em;
      line-height: 1.8;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  
  .work-metrics {
    display: flex;
    align-items: center;
    gap: 30rpx;
    
    .heat-info {
      display: flex;
      align-items: center;
      margin-right: 26rpx;
      .heat-icon {
        width: 24rpx;
        height: 24rpx;
        margin-right: 8rpx;
      }
      
      .heat-text {
        font-size: 24rpx;
        color: #DB9C3D;
      }
    }
    
    .work-id {
      display: flex;
      align-items: center;
      
      .id-icon {
        width: 24rpx;
        height: 24rpx;
        margin-right: 8rpx;
      }
      
      .id-text {
        font-size: 24rpx;
        color: #DB9C3D;
      }
    }
  }
}

// 底部操作按钮
.action-buttons {
  .button-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
    padding: 16px;
    background-color: #fff;
    .share-button {
      display: flex;
      align-items: center;
      margin-left: 30rpx;
      .share-icon {
        width: 32rpx;
        height: 32rpx;
        margin-right: 8rpx;
      }
      
      .share-text {
        font-size: 28rpx;
        color: #666666;
      }
    }
    
    .voted-button {
      background: #E8F4FD;
      border-radius: 30rpx;
      padding: 16rpx 32rpx;
      
      .voted-text {
        font-size: 24rpx;
        color: #0E57A3;
      }
    }
    
    .vote-button {
      background: linear-gradient(180deg, #3488D1 0%, #0E57A3 100%);
      border-radius: 66rpx;
      padding: 16rpx 32rpx;
      width: 400rpx;
      height: 55rpx;
      text-align: center;
      .vote-text {
        font-size: 24rpx;
        color:#EDC66C;
        font-weight: 500;
      }
    }
  }
}
</style>
