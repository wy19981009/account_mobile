<template>
  <van-config-provider :theme="this.$store.state.theme">
    <router-view />
    <footer class="footer">
      <van-tabbar v-model="active" @change="change">
        <van-tabbar-item icon="home-o" name="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="notes-o" name="/bile">记账</van-tabbar-item>
        <van-tabbar-item icon="bar-chart-o" name="/statement">统计</van-tabbar-item>
        <van-tabbar-item icon="manager-o" name="/personal">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </van-config-provider>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore()
const router = useRouter()
const active = ref(store.state.active)
const change = (val) => {
  store.state.active = val
  router.push({ path: active.value })
}
</script>

<style lang="scss">
.footer {
  margin-bottom: 50px;
}
</style>