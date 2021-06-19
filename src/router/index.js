import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home333.vue'
import play from '../views/play333.vue'
import discover from '../views/discover333.vue'
import search from '../views/search333.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/play/:mvId',
    name: 'play',
    props: true,
    component: play,
    meta: { title: '播放' }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '网易MV' }
  },
  {
    path: '/discover',
    name: 'discover',
    component: discover,
    meta: { title: '发现' }
  },
  {
    path: '/search/:searchList',
    name: 'search',
    component: search,
    props: true,
    meta: { title: '搜索结果' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About333.vue'),
    meta: { title: '我的' }
  }
]

const router = new VueRouter({
  routes
})

//添加路由导航守卫，用来动态设置标题内容
router.beforeEach((to, from, next) => {
  //to就是要去到的路由，如果去到的路由有meta，就将title设置到文档的title,next放行函数，继续运行
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
