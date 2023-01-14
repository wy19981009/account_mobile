<template>
  <router-view />
  <footer class="footer">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o" name="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="notes-o" name="/bile">记账</van-tabbar-item>
      <van-tabbar-item icon="bar-chart-o" name="/statement">统计</van-tabbar-item>
      <van-tabbar-item icon="manager-o" name="/personal">我的</van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const active = ref('/home')
const onChange = () => {
  router.push({ path: active.value })
}
</script>

<style lang="scss">
.footer {
  margin-bottom: 50px;
}
</style>