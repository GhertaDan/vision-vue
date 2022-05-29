import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Faq from '../views/Faq.vue'
import Cart from '../views/Cart.vue'
import Location from '../views/Location.vue'
import Login from '../views/Login.vue'
import Product from '../views/Product.vue'
import Profile from '../views/Profile.vue'
import Register from '../views/Register.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/category',
        name: 'category',
        component: Category
    },
    {
        path: '/faq',
        name: 'faq',
        component: Faq
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/location',
        name: 'location',
        component: Location
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
