import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant,{Lazyload} from 'vant';
import 'vant/lib/index.css';

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

// 引入VideoPlayer的自定义样式以及搜索图标的样式
import './assets/css/common333.css'
Vue.use(VideoPlayer)


//引入数字转为以万为单位的转换函数
import global from './util/change333'
Object.keys(global).forEach(key => {
    Vue.prototype["$" + key] = global[key];
})

Vue.use(Vant);
Vue.use(Lazyload);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


