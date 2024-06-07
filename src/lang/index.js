import { createI18n } from 'vue-i18n'
import { Locale } from 'vant'
import enLocale from './en_US'
import zhtwLocale from './zh_TW'
import zhcnLocale from './zh_CN'
import enUS from 'vant/es/locale/lang/en-US'
import zhTW from 'vant/es/locale/lang/zh-TW'
import zhCN from 'vant/es/locale/lang/zh-CN'

const messages = {
  en: {
    ...enLocale,
    ...enUS
  },
  zhtw: {
    ...zhtwLocale,
    ...zhTW
  },
  zhcn: {
    ...zhcnLocale,
    ...zhCN
  }
}

// 更新vant的語言包
function vantLocales(lang) {
  switch (lang) {
    case 'en':
      Locale.use(lang, enUS)
      break
    case 'zhtw':
      Locale.use(lang, zhTW)
      break
    case 'zhcn':
      Locale.use(lang, zhCN)
      break
    default:
      Locale.use(lang, enUS)
  }
}

// 獲取瀏覽器的語言
const lang = (navigator.language || 'en').toLocaleLowerCase()
const language = localStorage.getItem('language') || lang.replace('-', '')
localStorage.setItem('language', language)

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: language,
  fallbackLocale: 'en',
  messages
})

export { i18n, vantLocales }
