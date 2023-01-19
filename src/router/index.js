import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Channel from '../components/Channel'
import videoPlay from '../components/VideoPlay'
import History from '../components/History'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videoPlay',
    name: 'videoPlay',
    component: videoPlay
  },
  {
    path: '/channel',
    name: 'Channel',
    component: Channel
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
