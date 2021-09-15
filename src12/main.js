import Vue from 'vue'
// 注意:vant框架必须在app之前引入
import vant from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//$cnpm i vant -S
import "vant/lib/index.css"
// 引入字体图标
import "./assets/font/iconfont.css";
import "swiper/css/swiper.min.css";
// $cnpm i axios -S
// 将vant框架引入vue中
Vue.use(vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
