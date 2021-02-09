import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewMessage from '@/views/NewMessage.vue'
import Message from '@/views/Message'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit',
    name: 'newMessage',
    component: NewMessage
  },
  {
   path: '/telefon/:id',
   name: 'Message',
   component: Message
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
