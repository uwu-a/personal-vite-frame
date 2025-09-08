<template>
  <el-button @click="fetch" id="fetcher" type="primary">fetch</el-button>
</template>
<script setup lang="ts">
import {check} from './service/http.ts'
import {notifySuccess} from "./util/noticePopup.ts";

const fetch =async () => {
  const res = await check()
  notifySuccess(res!.data.status)
}

</script>
<style scoped lang="scss">
#fetcher{
  margin: 0 auto;
  width: 200px;
}
</style>