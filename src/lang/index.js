import { createI18n } from 'vue-i18n'
import enLocale from './en_us'
import zhtwLocale from './zh_tw'
import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import zhTW from 'vant/es/locale/lang/zh-TW'

const messages = {
  en: {
    ...enLocale,
    ...enUS
  },
  zhtw: {
    ...zhtwLocale,
    ...zhTW
  }
}

// 更新vant的語言包
function vantLocales(lang) {
  if (lang === 'en') {
    Locale.use(lang, enUS)
  } else if (lang === 'zhtw') {
    Locale.use(lang, zhTW)
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
