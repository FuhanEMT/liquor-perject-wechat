<template>
  <view class="page-container">
    <AppHeader />
    <view class="index">
      <view class="bg">
        <!-- 顶部导航栏 -->
      </view>
    </view>
  </view>
</template>

<script setup>

</script>

<style lang="scss">
// 页面容器样式，确保整个页面固定高度
.page-container {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.index {
  display: flex;
  flex-direction: column;
  overflow: hidden; // 防止整个页面滚动
  height: 85vh;
}

.bg {
  width: 100%;
  height: 100%; // 使用100%高度
  background: url(../../../assets/img/czzy.webp) no-repeat center/cover;
  position: relative;
  background-size: 100% 100%;
  background-position: center; // 居中显示
  flex: 1; // 占据剩余空间
  overflow: hidden; // 防止内容溢出
}
</style>
