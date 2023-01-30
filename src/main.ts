import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/mdi-v6'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import 'quasar/src/css/index.sass'
import '@/assets/styles/main.scss'
import { router } from '@/router/router'
import { createPinia } from 'pinia'
import App from '@/App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(Quasar, {
	plugins: {}, // import Quasar plugins and add here
	iconSet: quasarIconSet,
	/*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
})

app.use(router)
app.use(pinia)
app.mount('#app')
