// This is pretty gross at the moment - if we do frontend/backend integration we'll need to figure out dynamic router implementation.
// Maybe something like Feathers.js as a middleman for data TBC

import { createRouter, createWebHistory } from 'vue-router'
import Feed from '../pages/Feed.vue'
import Login from '../pages/Login.vue'
import Loading from '../pages/Loading.vue'
import Page404 from '../pages/Page404.vue'
import Skills from '../pages/Skills.vue'
import Messages from '../pages/Messages.vue'
import Shop from '../pages/Shop.vue'
import Inventory from '../pages/Inventory.vue'
import Home from '../pages/Home.vue'
import Blog from '../pages/Blog.vue'
import Support from '../pages/Support.vue'
import Game from '../pages/Game.vue'
import Quests from '../pages/Quests.vue'

const routes = [
  {
      
    path: '/',
    redirect: '/feed'
    },
    {
    path: '/feed',
    name: 'Feed',
    component: Feed
    // meta: {
    //                 requiresAuth: true
    //             }
    },
      {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },{
    path: '/support',
    name: 'Support',
    component: Support
  },{
    path: '/blog',
    name: 'Blog',
    component: Blog
  },{
    path: '/home',
    name: 'Home',
    component: Home
  },{
    path: '/messages',
    name: 'Messages',
    component: Messages
  },{
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
      {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },{
    path: '/quests',
    name: 'Quests',
    component: Quests
  },{
    path: '/game',
    name: 'Game',
    component: Game
  },{
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
      {
    path: '/login',
    name: 'Login',
    component: Login
    },
    { path: "/:pathMatch(.*)*", component: Page404 }

]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },

})

