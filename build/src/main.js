import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Routes from './router/routes'
import store from './store/store'
import Vue2Filters from 'vue2-filters'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

Vue.use(Vue2Filters)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.component('v-select', VueSelect.VueSelect);
const router = new VueRouter ({
  routes:Routes
});

new Vue({
  el: '#app',
  router:router,
  store,
  render: h => h(App)
});
