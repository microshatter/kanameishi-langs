import './assets/main.css'

// Import lang files
import { createI18n } from 'vue-i18n'
import enUS from './locales/enUS.json'
import zhCN from './locales/zhCN.json'
import jaJP from './locales/jaJP.json'
import koKR from './locales/koKR.json'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'

axios.defaults.timeout = 30000

const i18n = createI18n({
    locale: 'zh-CN',
    fallbackLocale: 'zh-CN',
    messages: {
        'en-US': enUS,
        'zh-CN': zhCN,
        'ja-JP': jaJP,
        'ko-KR': koKR,
    },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
