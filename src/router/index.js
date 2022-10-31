import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VideoPlay from '../components/VideoPlay'
import History from '../components/History'
import Channel from '../components/Channel'
//import About from '.../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {path : '/VideoPlay' ,
  name:'VideoPlay',
  component : VideoPlay
 },
{
    path:'/Channel',
    name: 'Channel',
    component :Channel
},
{
    path:'/History',
    name: 'History',
    component :History
},
// {
//     path: '/about',
//     name: 'About',
//     component :About
   
//   }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router