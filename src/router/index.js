import { createRouter, createWebHistory } from 'vue-router'

// User
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

// Admin
import AdminLayout from '../layouts/AdminLayout.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import Calendar from '../views/admin/Calendar.vue'
import Customers from '../views/admin/Customers.vue'
import DeliveryNotes from '../views/admin/DeliveryNotes.vue'
import Itemes from '../views/admin/Itemes.vue'
import Ledger from '../views/admin/Ledger.vue'
import Quotations from '../views/admin/Quotations.vue'
import Receipts from '../views/admin/Receipts.vue'
import Reports from '../views/admin/Reports.vue'

const adminRoutes = {
    path: '/admin',
    component: AdminLayout,
    children: [
        { path: 'dashboard', name: 'admin.dashboard', component: AdminDashboard },
        { path: 'calendar', name: 'admin.calendar', component: Calendar },
        { path: 'customers', name: 'admin.customers', component: Customers },
        { path: 'deliverynotes', name: 'admin.deliverynotes', component: DeliveryNotes },
        { path: 'items', name: 'admin.items', component: Itemes },
        { path: 'ledgar', name: 'admin.ledgar', component: Ledger },
        { path: 'quotations', name: 'admin.quotations', component: Quotations },
        { path: 'receipts', name: 'admin.receipts', component: Receipts },
        { path: 'reports', name: 'admin.reports', component: Reports },


    ],
}


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [userRoutes, adminRoutes],
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active'
})

export default router
