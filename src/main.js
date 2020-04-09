import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'

Vue.config.productionTip = false

import Pokedex from './components/Pokedex';
import Catch from './components/Catch';
import BackButton from './components/entry/BackButton';
import Header from './components/entry/Header';
import Type from './components/entry/Type';
import Attributes from './components/entry/Attributes';
import router from './router'
import store from './store'

Vue.component('pokedex', Pokedex);
Vue.component('catch', Catch);
Vue.component('entryBackButton', BackButton);
Vue.component('entryHeader', Header);
Vue.component('entryType', Type);
Vue.component('entryAttributes', Attributes);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
