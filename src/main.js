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
