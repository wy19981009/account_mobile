<template>
  <van-nav-bar title="选择图片" left-text="返回" left-arrow @click-left="onClickLeft" />
  <form ref="myForm">
    <input type="file" accept="image/*" @change="onChange" />
    <input type="button" value="提交" @click="onSubmit($event)" />
  </form>

  <img v-if="previewImage" :src="previewImage" alt="预览图" style="max-width: 100%; max-height: 100%" />

  <Cropper v-if="cropperVisible" :imagePath="imagePath" fileType="blob" @save="onSave" @cancel="onCancel" />

</template>

<script setup>
import { ref } from "vue";
import Cropper from "vue3-cropper";
import "vue3-cropper/lib/vue3-cropper.css";
// import { API } from "@/utils";
const URL = window.URL || window.webkitURL;
const onClickLeft = () => history.back();

const cropperVisible = ref(false)
const imagePath = ref('')
const previewImage = ref(null)
// 获取图片
const onChange = (e) => {
  const file = e.target.files[0];
  imagePath.value = URL.createObjectURL(file);
  cropperVisible.value = true;
  console.log(imagePath.value);
};

// 保存选取的图片
const onSave = (res) => {
  if (typeof res === "string") {
    previewImage.value = res;
  } else {
    previewImage.value = URL.createObjectURL(res);
  }
  cropperVisible.value = false;
};

// 取消选取
const onCancel = () => {
  cropperVisible.value = false;
};

</script>

<style>

</style>