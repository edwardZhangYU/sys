// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import storeObj from './vuex/index.js'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import { alertControl } from './mixins/alert.js'
Vue.mixin(alertControl)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, 
  store: new Vuex.Store(storeObj),
  components: { App },
  template: '<App/>'
})
