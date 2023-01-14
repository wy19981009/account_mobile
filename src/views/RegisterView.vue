<template>
  <nav class="nav">
    <div class="back" @click="back"><van-icon name="arrow-left" />返回</div>
    <div class="title">注册</div>
    <div class="more"><van-icon name="ellipsis" /></div>
  </nav>

  <main class="main">

    <img class="logo" src="https://wy-1305371101.cos.ap-chongqing.myqcloud.com/accounts/accounts.jpg" alt="" />

    <van-form @submit="onSubmit" v-model="value">
      <van-cell-group inset>
        <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }, { pattern: (/^[a-zA-Z][a-zA-Z0-9]{4,10}$/), message: '账号长度为4-10字符,允许字母数字' }]" />
        <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }, { pattern: (/^[a-zA-Z]\w{5,17}$/), message: '以字母开头，长度在6~18之间，只能包含字母、数字和下划线' }]" />
        <van-field v-model="rePassword" type="password" name="rePassword" label="确认密码" placeholder="确认密码"
          :rules="[{ validator, message: '两次输入密码不一致' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <p @click="toLogin" class="to_login">已有账号，前去登录</p>
  </main>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { API } from '@/utils';
import { ref, onMounted } from 'vue';
import { showToast } from 'vant';
import { useStore } from 'vuex';
const value = ref('')
const username = ref('');
const password = ref('');
const rePassword = ref('');
const router = useRouter();
const store = useStore()
const back = () => {
  router.back()
}

onMounted(() => {
  console.log(store.state.username, store.state.password);
  username.value = store.state.username
  password.value = store.state.password
  // console.log(username, password);
})

const validator = () => {
  if (rePassword.value !== password.value) {
    return false
  }
  return true
}

const onSubmit = async (value) => {
  const { username, password } = value
  const res = await API.post('/user/register', {
    username,
    password
  })
  if (res.data.status !== 200) {
    showToast({
      message: res.data.message,
      duration: 1000
    })
    store.state.username = ''
    store.state.password = ''
  }
  if (res.data.status === 200) {
    showToast({
      message: res.data.message,
      duration: 1000
    })
    store.state.username = value.username
    store.state.password = value.password
    router.push('/login')
  }
};

const toLogin = () => {
  store.state.username = ''
  store.state.password = ''
  router.push('/login')
}
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  height: 2.5rem;
  background-color: #fff;
  margin-bottom: 1.226rem;

  .back {
    margin-top: .58rem;
  }

  .title {
    margin-right: 1.5rem;
    margin-top: .58rem;
  }

  .more {
    margin-top: .58rem;
  }
}

.main {
  padding: 0.8rem;
  text-align: center;

  .logo {
    display: block;
    width: 7.25rem;
    margin: 0 auto;
    margin-bottom: 1.8rem;
  }

  .to_login {
    text-align: center;
    color: #597fe7;
    margin: 0.2rem;
    font-size: 0.4rem;
  }

}
</style>