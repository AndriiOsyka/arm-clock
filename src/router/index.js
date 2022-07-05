import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import About from '../components/about.vue'
import Contacts from '../components/contacts.vue'
import Product from '../components/product.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
