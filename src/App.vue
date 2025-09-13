<template>
  <el-input placeholder="account" clearable v-model="payload.account"/>
  <br>
  <br>
  <el-input placeholder="password" clearable v-model="payload.password"/>
  <br>
  <br>
  <el-button @click="fetch" id="fetcher" type="primary">{{ t('try') }}</el-button>
  <el-button @click="modifyLanguage('en')" id="fetcher">switch → en</el-button>
</template>
<script setup lang="ts">
import {login} from './service/http.ts'
import {notifySuccess} from "./util/noticePopup.ts";
import {reactive} from "vue";
import {useI18n} from 'vue-i18n'

const {t, locale} = useI18n()

const payload = reactive({account: '', password: ''})

const modifyLanguage = (language: string) => {
  locale.value = language
}

const fetch = async () => {
  const res = await login({account: payload.account, password: payload.password})
  notifySuccess(res!.data.toString())
}

</script>
<style scoped lang="scss">
#fetcher {
  margin: 0 auto;
  width: 200px;
}
</style>
