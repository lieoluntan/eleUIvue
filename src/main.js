import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Demo1_tab from './Demo1_tab.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  // render: h => h(App)
    render: h => h(Demo1_tab)
})
