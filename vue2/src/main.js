import Vue from 'vue'
import App from './App.vue'
import HelloWorld from 'demo-zhijian'
import 'demo-zhijian/lib/HelloWorld.css'

Vue.use(HelloWorld)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
