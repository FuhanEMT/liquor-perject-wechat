<template>
  <view class="index">
    <nut-button type="primary" @click="onClick">按钮</nut-button>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const onClick = () => {
  show.value = true
}
</script>
