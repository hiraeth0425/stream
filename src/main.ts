import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/icon/index.css'
import { i18n, vantLocales } from './lang'
import '@vant/touch-emulator'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import userProviders from './providers'

vantLocales(i18n.locale)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vant)
app.use(i18n)
app.use(VueVirtualScroller)
app.use(userProviders)

app.mount('#app')
