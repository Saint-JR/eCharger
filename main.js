// #ifndef VUE3
import App from './App'
import Vue from 'vue'
import uView from 'uview-ui';
import store from './store'
Vue.use(uView);

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif