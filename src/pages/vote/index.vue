<template>
  <view>
    <AppHeader />
    <view class="index" style="position: relative;top: -1px;">
      <!-- 顶部横幅 -->
      <view class="banner">
        <image class="banner-bg" src="../../../assets/img/bar.png" mode="aspectFill" />
      </view>

      <view class="vote-list">
        <view class="vote-item" @click="selectItem(0)">
          <image :class="selectedIndex === 0 ? 'vote-bg' : 'vote-bg opacity-07'" :src="selectedIndex === 0 ? xxBPng : xxPng" mode="scaleToFill" />
          <view class="vote-content">
            <view class="vote-title">参赛作品</view>
            <view class="vote-info">1234</view>
          </view>
        </view>
        
        <view class="vote-item" @click="selectItem(1)">
          <image :class="selectedIndex === 1 ? 'vote-bg' : 'vote-bg opacity-07'" :src="selectedIndex === 1 ? xxBPng : xxPng" mode="scaleToFill" />
          <view class="vote-content">
            <view class="vote-title">投票排行</view>
            <view class="vote-info">2345</view>
          </view>
        </view>
        
        <view class="vote-item" @click="selectItem(2)">
          <image :class="selectedIndex === 2 ? 'vote-bg' : 'vote-bg opacity-07'" :src="selectedIndex === 2 ? xxBPng : xxPng" mode="scaleToFill" />
          <view class="vote-content">
            <view class="vote-title">特邀作品</view>
            <view class="vote-info">3456</view>
          </view>
        </view>
      </view>

      <view class="vote-content_content">
        <!-- 搜索栏 -->
        <view class="search-container">
          <view class="search-bar">
            <image class="search-icon" :src="searchPng" mode="aspectFit" />
            <input class="search-input" placeholder="请输入作品编号或名称" v-model="searchKeyword" @input="handleSearch" />
            <image class="clear-icon" src="../../../assets/icon/close.webp" mode="aspectFit" @click="clearSearch" />
          </view>
        </view>

        <!-- 作品卡片区域 -->
        <view class="works-container">
          <view 
            class="work-card" 
            v-for="work in filteredWorks" 
            :key="work.id"
            @click="goToVideoDetail(work.id)"
          >
            <image class="work-image" :src="work.imageUrl" mode="aspectFill" />
            <view class="vote-badge">{{ work.voteCount }}<text style="font-size: 21rpx;" class="vote-badge_text">票</text></view>
            <view class="work-id-overlay">作品编号: {{ work.workId }}</view>
            <view class="work-info">
              <view class="work-name">{{ work.title }}</view>
              <view class="work-heat">
                <image class="heat-icon" src="../../../assets/icon/huo.webp" mode="aspectFit" />
                <text class="heat-text_num">{{ work.heatCount }}热度</text>
              </view>
            </view>
          </view>
        </view>
      </view>

    </view>
  </view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import xxPng from '../../../assets/icon/xx.png'
import xxBPng from '../../../assets/icon/xx_b.png'
import searchPng from '../../../assets/icon/search.webp'

const selectedIndex = ref(0)
const searchKeyword = ref('')

// 作品数据
const works = ref([
  {
    id: '1',
    title: '作品名称作品名称作品名',
    workId: 'xj20250912130',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    voteCount: 1254,
    heatCount: 200,
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
  },
  {
    id: '2',
    title: '作品名称作品名称作品',
    workId: 'xj20250912131',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    voteCount: 1254,
    heatCount: 200,
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
  },
  {
    id: '3',
    title: '创意作品展示',
    workId: 'xj20250912132',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    voteCount: 980,
    heatCount: 150,
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_3mb.mp4'
  },
  {
    id: '4',
    title: '优秀参赛作品',
    workId: 'xj20250912133',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    voteCount: 2100,
    heatCount: 350,
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_4mb.mp4'
  }
])

// 过滤后的作品列表
const filteredWorks = computed(() => {
  if (!searchKeyword.value) {
    return works.value
  }
  return works.value.filter(work => 
    work.title.includes(searchKeyword.value) || 
    work.workId.includes(searchKeyword.value)
  )
})

const selectItem = (index) => {
  selectedIndex.value = index
}

const handleSearch = () => {
  // 搜索逻辑已在computed中处理
}

const clearSearch = () => {
  searchKeyword.value = ''
}

const goToVideoDetail = (workId) => {
  Taro.navigateTo({
    url: `/pages/video-detail/index?id=${workId}`
  })
}

onMounted(() => {
  // 可以在这里加载更多作品数据
})
</script>

<style lang="scss">
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
    
    .opacity-07 {
      opacity: 0.7;
    }
    
    .vote-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100%;

      
      .vote-title {
        font-size: 24rpx;
        color: #1E507E;
        font-weight: bold;
        margin-right: 10rpx;
        text-align: center;
        line-height: 1.2;
      }
      
      .vote-info {
        font-size: 20rpx;
        color: #1E507E;
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

.vote-content_content {
  background: linear-gradient(180deg, #DCEDFF 0%, rgba(220, 237, 255, 0.10) 100%) , url(../../../assets/img/footer.webp) no-repeat center/cover;
  height: calc(100vh - 300rpx - 100rpx); // 整个页面高度 - banner高度 - vote-list高度
  padding: 20rpx;
  position: relative;
  overflow-y: auto;

  .search-container {
    margin-bottom: 25rpx;
    
    .search-bar {
      background: #ffffff;
      border-radius: 80rpx;
      padding: 8rpx 30rpx;
      display: flex;
      align-items: center;
      
      .search-icon {
        width: 32rpx;
        height: 32rpx;
        margin-right: 13rpx;
      }
      
      .search-input {
        flex: 1;
        font-size: 28rpx;
        color: #333;
        border: none;
        outline: none;
      }
      
      .clear-icon {
        width: 35rpx;
        height: 35rpx;
        margin-left: 20rpx;
        cursor: pointer;
      }
    }
  }

  .works-container {
    display: flex;
    gap: 20rpx;
    flex-wrap: wrap;
    
    .work-card {
      flex: 1;
      min-width: 300rpx;
      border-radius: 10rpx;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      transition: transform 0.2s ease;
      
      &:hover {
        transform: translateY(-2rpx);
      }
      
      .work-image {
        width: 100%;
        height: 588.94rpx;
        object-fit: cover;
        display: block;
        vertical-align: top;
      }
      
      .vote-badge {
        position: absolute;
        top: 20rpx;
        right: 0rpx;
        background: linear-gradient(180deg, #D9B560 0%, #DAAE6B 100%);
        color: #ffffff;
        padding: 8rpx 20rpx;
        border-radius: 30rpx 0 0 30rpx;
        font-size: 24rpx;
        font-weight: 400;
        z-index: 3;
      }
      
      .work-id-overlay {
        position: absolute;
        bottom: 107rpx;
        left: 0;
        right: 0;
        color: #ffffff;
        padding: 10rpx 20rpx 10rpx 20rpx;
        font-size: 24rpx;
        z-index: 2;
        background: #042D58;
        opacity: 0.8;
      }
      
      .work-info {
        padding: 15rpx 0;
        margin-top: 0;
        
        .work-name {
          font-size: 30rpx;
          margin-bottom: 12rpx;
          line-height: 1.3;
          font-weight: 400;
        }
        
        .work-heat {
          display: flex;
          align-items: center;
          font-size: 24rpx;
          .heat-text_num {
            font-size: 22rpx;
            color:#DB9C3D;
          }
          .heat-icon {
            width: 24rpx;
            height: 24rpx;
            margin-right: 8rpx;
          }
        }
      }
    }
  }
}
</style>
