<template>
  <router-view></router-view>

</template>

<script setup>
import { onMounted } from 'vue';
import { getToken } from './utils'
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {
  if (!getToken()) {
    router.push('/login')
  } else if (router.options.history.base === '/#') {
    router.push('/home')
  }
})


</script>

<style lang="scss">
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%
}

body {
  line-height: 1.6;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
dl,
dd,
fieldset,
textarea {
  margin: 0
}

fieldset,
legend,
textarea,
input,
button {
  padding: 0
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  *font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
}

ul,
ol {
  padding-left: 0;
  list-style-type: none
}

a img,
fieldset {
  border: 0
}

a {
  text-decoration: none
}

body {
  background-color: #F5F5F5;
}
</style>
