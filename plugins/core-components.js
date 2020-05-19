import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
import PostList from '@/components/Posts/PostList'

Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostList', PostList)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
