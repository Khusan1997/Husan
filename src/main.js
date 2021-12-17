import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import axios from 'axios'
import i18n from '../src/i18n/index'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false
Vue.use(axios)
Vue.component('date-picker', DatePicker)
axios.interceptors.request.use(request => requestInterceptor(request))
const requestInterceptor = request => {
  request.withCredentials = true
  return request
}
new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app')
