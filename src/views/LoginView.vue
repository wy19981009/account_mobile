<template>
  <nav class="nav">
    <div class="back" @click="back"><van-icon name="arrow-left" />返回</div>
    <div class="title">登录</div>
    <div class="more"><van-icon name="ellipsis" /></div>
  </nav>

  <main class="main">

    <img class="logo" src="https://wy-1305371101.cos.ap-chongqing.myqcloud.com/accounts/accounts.jpg" alt="" />

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }, { pattern: (/^[a-zA-Z][a-zA-Z0-9]{4,16}$/), message: '账号长度为5-15字符,允许字母数字' }]" />
        <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }, { pattern: (/^[a-zA-Z]\w{5,17}$/), message: '以字母开头，长度在6~18之间，只能包含字母、数字和下划线' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <p @click="toRegister" class="to_registe">没有账号，前往去注册</p>
  </main>
</template>

<script setup>
import { showToast } from 'vant';
import { ref, onMounted } from 'vue';
import { API, setToken } from '../utils';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
const username = ref('');
const password = ref('');
const router = useRouter()
const back = () => {
  router.back()
}
const store = useStore()
onMounted(() => {
  console.log(store.state.username, store.state.password);
  username.value = store.state.username
  password.value = store.state.password
  // console.log(username, password);
})
const onSubmit = async (value) => {
  const { username, password } = value;
  // console.log(username, password);
  const res = await API.post('/user/login', {
    username,
    password
  })
  if (res.data.status !== 200) {
    showToast({
      message: res.data.message,
      duration: 1000,
    });
  }
  if (res.data.status === 200) {
    showToast({
      message: res.data.message,
      duration: 1000,
    });
    setToken(res.data.token)
    router.push('/')
  }

};
const toRegister = () => {
  store.state.username = username.value
  store.state.password = password.value
  router.push('/register')
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

  .to_registe {
    text-align: center;
    color: #597fe7;
    margin: 0.2rem;
    font-size: 0.4rem;
  }

}

.van-toast {
  text-align: center;
}
</style>