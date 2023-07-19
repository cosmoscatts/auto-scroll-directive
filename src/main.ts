import { createApp } from 'vue'
import type { Directive } from 'vue'
import App from './App.vue'
import * as directives from '~/directives'

import '@unocss/reset/tailwind.css'
import '~/main.css'
import 'uno.css'

const app = createApp(App)
Object.keys(directives).forEach((key) => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})
app.mount('#app')
