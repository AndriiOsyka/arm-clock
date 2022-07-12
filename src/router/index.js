import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactsView from '../views/ContactsView.vue'
import Product from '../components/product.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/aboutView',
    name: 'aboutView',
    component: AboutView
  },
  {
    path: '/contactsView',
    name: 'contactsView',
    component: ContactsView
  },
  {
    path: '/product/:id',
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
