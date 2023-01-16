<template>
  <van-nav-bar title="修改个人信息" left-text="返回" left-arrow @click-left="onClickLeft" />
  <div style="height: 18px"></div>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="username" name="username" readonly label="用户名" />
      <van-field v-model="nickname" label="昵称" name="nickname" placeholder="请输入昵称"
        :rules="[{ pattern: (/^[\u4E00-\u9FA5A-Za-z0-9_]{1,11}$/), message: '昵称长度为1-11位' }]" />
      <van-field v-model="phone" label="手机号" name="phone" placeholder="请输入手机号"
        :rules="[{ pattern: (/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/), message: '手机号格式不正确' }]" />
      <van-field v-model="signature" label="个性签名" name="signature" placeholder="请输入个性签名"
        :rules="[{ pattern: (/^[\u4E00-\u9FA5A-Za-z0-9_]{1,15}$/), message: '个性签名长度为1-15位' }]" />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        修改信息
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import { API } from '@/utils';
import { showToast } from 'vant';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore()
const router = useRouter()
const username = ref(store.state.username)
const nickname = ref(store.state.nickname)
const phone = ref(store.state.phone)
const signature = ref(store.state.signature)
const onClickLeft = () => history.back();
const onSubmit = async (values) => {
  const { nickname, phone, signature } = values
  const res = await API.post('/my/updateuserinfo', {
    "id": store.state.id,
    "nickname": nickname,
    "phone": phone,
    "signature": signature
  })
  if (res.data.status === 200) {
    showToast({
      message: res.data.message
    })
    router.push('/personal')
  }

};
</script>

<style>

</style>