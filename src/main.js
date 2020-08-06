import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import '@/assets/lib/flexible.js';
// import './assets/lib/china.js';

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')