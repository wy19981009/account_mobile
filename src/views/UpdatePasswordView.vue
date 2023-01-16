<template>
  <van-nav-bar title="修改密码" left-text="返回" left-arrow @click-left="onClickLeft" />

</template>

<script setup>
const onClickLeft = () => history.back();
</script>

<style>

</style>