<template>

  <!-- 个人信息展示 -->
  <div class="userinfo">
    <div class="userinfo_avatar">
      <img class="avatar" :src="avatar" alt="">
    </div>
    <div class="text">
      <p class="nickname">昵称：<span>{{ nickname }}</span></p>
      <van-tag round plain type="primary">个性签名：<span>{{ signature }}</span></van-tag>
    </div>
  </div>
  <!-- 小工具 -->
  <div class="smalltools">
    <van-grid :icon-size="16">
      <van-grid-item icon="gold-coin-o" to="/exchangerate" text="汇率计算器" />
      <van-grid-item icon="newspaper-o" text="房贷计算器" to="/houseloan" />
      <van-grid-item icon="gift-o" to="/gift" text="我的礼物" />
      <van-grid-item icon="setting-o" text="设置" to="/setting" />
    </van-grid>
  </div>
  <!-- 心愿单 -->
  <div class="wish">
    <div class="text">
      <div class="progress">
        <span class="title">
          <span>心愿完成度</span>
          <span>未完成</span>
        </span>
        <van-progress :show-pivot="false" color="#f2826a" :percentage="25" />
      </div>
      <div class="progress">
        <span class="title">
          <span>存钱计划</span>
          <span>未完成</span>
        </span>
        <van-progress :show-pivot="false" color="#f2826a" :percentage="25" />
      </div>
    </div>
    <div class="blank"></div>
    <div class="viewwish" @click="toWishView">
      <van-icon name="like-o" />
      <p class="text">查看心愿</p>
    </div>
  </div>
  <!--  -->
  <div class="other">
    <van-cell icon="setting-o" title="设置" is-link to="/setting" />
    <van-cell icon="share-o" title="分享给好友" is-link @click="showShare = true" />
    <van-share-sheet v-model:show="showShare" title="立即分享给好友" :options="options" />
    <a href="tel:15687751392"><van-cell icon="phone-o" is-link title="联系我们" /></a>

    <van-cell icon="like" title="给个评价" is-link />
    <van-cell icon="edit" title="版本" value="1.0.0" />
    <van-cell icon="label-o" title="服务协议" is-link />
    <van-cell icon="completed" title="隐私政策" is-link />
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { API, BASE_URL } from '@/utils';
import { useStore } from 'vuex';
import { showToast } from 'vant';
const router = useRouter()
const store = useStore()
const avatar = ref('')
const nickname = ref('')
const signature = ref('')
onMounted(async () => {
  const res = await API.get('/my/userinfo')
  if (res.data.status === 200) {
    avatar.value = BASE_URL + res.data.data[0].avatar
    nickname.value = res.data.data[0].nickname
    signature.value = res.data.data[0].signature
    store.state.id = res.data.data[0].id
    store.state.username = res.data.data[0].username
    store.state.nickname = res.data.data[0].nickname
    store.state.signature = res.data.data[0].signature
    store.state.phone = res.data.data[0].phone
    store.state.avatar = res.data.data[0].avatar
  } else {
    showToast('获取用户数据失败！')
  }




})
const toWishView = () => {
  router.push('/wish')
}
const showShare = ref(false);
const options = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' },
  ],
];
</script>

<style lang="scss">
.userinfo {
  display: flex;
  background-color: #6ECA99;
  height: 88px;
  margin: 10px;
  border-radius: 5px;


  .userinfo_avatar {

    width: 17%;
    height: 60px;
    border-radius: 50%;
    margin: 14px;



    // background-color: red;
    .avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .text {
    width: 70%;
    margin-top: 14px;
  }
}

.smalltools {

  margin: 10px;
  border-radius: 5px;

  .van-grid-item__content--center {
    background-color: #6ECA99;
  }
}

.wish {
  display: flex;
  background-color: #6ECA99;
  height: 88px;
  margin: 10px 10px 10px 10px;

  border-radius: 5px;


  .text {
    width: 78%;
    display: flex;
    flex-direction: column;

    .progress {
      margin: 8px;

      .title {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .blank {
    width: 1%;
    margin: 8px 0;
    background-color: #f5f5f5;
  }

  .viewwish {
    width: 21%;
    text-align: center;
    margin: 18px 0;

    .text {
      margin: 0 8px;
      font-size: 12px;
      box-sizing: border-box;
    }
  }
}

.other {

  margin: 10px 10px 10px 10px;
  border-radius: 5px;

  .van-cell {
    background-color: #6ECA99;
    margin-bottom: 5px;
  }
}
</style>