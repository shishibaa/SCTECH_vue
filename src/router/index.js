import { createRouter, createWebHistory } from 'vue-router'
import UserLayout from '../layouts/UserLayout.vue'
import Home from '../views/user/Home.vue'
import About from '../views/user/About.vue'
import Contact from '../views/user/Contact.vue'
import Service from '../views/user/Service.vue'
import quotation from '../views/user/quotation.vue'



const userRoutes = {
    path: '/',
    component: UserLayout,
    children: [
        { path: '', name: 'home', component: Home },
        { path: 'about', name: 'about', component: About },
        { path: 'contact', name: 'contact', component: Contact },
        { path: 'service', name: 'service', component: Service },
        { path: 'quotation', name: 'quotation', component: quotation },
    ],
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [userRoutes],
    linkActiveClass: 'is-active',           // partial match
    linkExactActiveClass: 'is-exact-active' // exact match
})

export default router
