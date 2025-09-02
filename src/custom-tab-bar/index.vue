<template>
    <cover-view class="tab-bar">
      <cover-view class="tab-bar-border"></cover-view>
     
        <cover-view v-for="(item, index) in list" :key="index" class="tab-bar-item" @tap="switchTab(index, item.pagePath)">
          <cover-image :src="selected === index ? item.selectedIconPath : item.iconPath" />
          <cover-view :style="{ color: selected === index ? selectedColor : color }">{{item.text}}</cover-view>
        </cover-view>
    </cover-view>
  </template>
  
  <script setup>
  import Taro from '@tarojs/taro'
  import { computed , reactive,onMounted}  from 'vue'
    import sy_b from '../../assets/icon/sy_b.png'
    import sy from '../../assets/icon/sy.png'
    import vote_b from '../../assets/icon/vote_b.png'
    import vote from '../../assets/icon/vote.png'
    import ss_b from '../../assets/icon/ss_b.png'
    import ss from '../../assets/icon/ss.png'
    import zy_b from '../../assets/icon/zy_b.png'
    import zy from '../../assets/icon/zy.png'
  
  const color = '#fff'
  const selectedColor = '#E2B570'

  onMounted(() => {
    state.selected = Taro.getStorageSync('selected')
  })

  const state = reactive({
    selected: 0
  })
  const list = [
    {
      pagePath: '/pages/index/index',
      selectedIconPath: sy_b,
      iconPath: sy,
      text: '首页'
    },
    {
      pagePath: '/pages/vote/index',
      selectedIconPath: vote_b,
      iconPath: vote,
      text: '作品投票'
    },
    // {
    //   pagePath: '/pages/cate/index',
    //   selectedIconPath: ss_b,
    //   iconPath: ss,
    //   text: '赛事资料'
    // },
    // {
    //   pagePath: '/pages/cate/index',
    //   selectedIconPath: zy_b,
    //   iconPath: zy,
    //   text: '创作者之夜'
    // },
  ]
  
  function switchTab(index, url) {
    Taro.setStorageSync('selected', index)
    Taro.switchTab({ url })
  }
  
  function setSelected (index) {
    state.selected = index
  }
  </script>
  
  <style lang="scss">
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(180deg, #3488D1 0%, #0E57A3 100%);
    display: flex;
    padding-bottom: env(safe-area-inset-bottom);
    border-radius: 20px 20px 0 0;
  }
  
  .tab-bar-border {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
  }
  
  .tab-bar-item {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .tab-bar-item cover-image {
    width: 44px;
    height: 44px;
  }
  
  .tab-bar-item cover-view {
    font-size: 20px;
    margin-top: 10rpx;
  }
  </style>