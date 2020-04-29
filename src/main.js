import axios from 'axios';
import Vue from 'vue';
import VueAxios from 'vue-axios';
import VueFilterDateFormat from 'vue-filter-date-format';
import App from './App.vue';
import './assets/global.scss';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueFilterDateFormat);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
