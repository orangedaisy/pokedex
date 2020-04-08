import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'

Vue.config.productionTip = false

import BackButton from './components/entry/BackButton';
import Header from './components/entry/Header';
import Type from './components/entry/Type';
import Attributes from './components/entry/Attributes';
import router from './router'

Vue.component('entryBackButton', BackButton);
Vue.component('entryHeader', Header);
Vue.component('entryType', Type);
Vue.component('entryAttributes', Attributes);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
