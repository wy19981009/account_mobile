<template>
  <nav class="nav">
    <div class="back"><van-icon name="arrow-left" />返回</div>
    <div class="title">登录</div>
    <div class="more"><van-icon name="ellipsis" /></div>
  </nav>

  <main class="main">

    <img class="logo" src="https://wy-1305371101.cos.ap-chongqing.myqcloud.com/accounts/accounts.jpg" alt="" />

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <p class="to_registe">没有账号，前往去注册</p>
  </main>
</template>

<script setup>
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const onSubmit = (values) => {
  console.log('submit', values);
};
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
</style>