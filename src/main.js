import { createApp } from 'vue'
import { router } from './router.js'
import './assets/styles/main.scss'

import rootCmp from './root-cmp.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { clickOutsideDirective } from './directives/index.js'
import { Skeletor } from 'vue-skeletor';



const app = createApp(rootCmp)
app.component(Skeletor.name, Skeletor);

app.directive("click-outside", clickOutsideDirective)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
