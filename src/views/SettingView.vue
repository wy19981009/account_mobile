<template>
  <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="onClickLeft" />
  <div class="setting">
    <van-image width="100" height="100" round :src="BASE_URL + this.$store.state.avatar" />
    <van-config-provider :theme="this.$store.state.theme">
      <van-cell center title="切换深色模式">
        <template #right-icon>
          <van-switch v-model="checked" @change="change" />
        </template>
      </van-cell>
    </van-config-provider>
    <van-cell title="修改个人信息" is-link to="/updateperinfo" />
    <van-cell title="修改头像" is-link to="/updateavatar" />
    <van-cell title="修改密码" is-link to="/updatepassword" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { BASE_URL } from '@/utils';
const store = useStore()
const onClickLeft = () => history.back();
const checked = ref(false);

onMounted(() => {
  checked.value = store.state.themeChecked
})

const change = () => {
  if (checked.value) {
    store.state.theme = 'dark'
    store.state.themeChecked = checked.value
  } else {
    store.state.theme = 'light'
    store.state.themeChecked = checked.value
  }
}
</script>

<style lang="scss">
.setting {

  .van-image {
    left: 130px;
    margin: 15px 0;
  }


  margin: 8px 5px;
  border-radius: 5px;
  --van-cell-background: #6ECA99;
  --van-cell-group-inset-radius: 5px;

  .van-cell {
    margin: 5px 0;
  }

  .van-uploader__input-wrapper {
    width: 365px;
  }
}
</style>