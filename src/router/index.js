import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Service from '../views/Service.vue'
import quotation from '../views/quotation.vue'


// Admin pages
import AdminLayout from '../views/admin/AdminLayout.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import AdminCustomers from '../views/admin/AdminCustomers.vue'
import AdminItems from '../views/admin/AdminItems.vue'
import AdminQuotations from '../views/admin/AdminQuotations.vue'
import AdminReceipts from '../views/admin/AdminReceipts.vue'



const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/service', component: Service },
    { path: '/quotation', component: quotation },

    {
    path: '/admin',
    component: AdminLayout,
    
    children: [
      { path: '',           name: 'admin.dashboard',  component: AdminDashboard },
      { path: 'customers',  name: 'admin.customers',  component: AdminCustomers },
      { path: 'items',      name: 'admin.items',      component: AdminItems },
      { path: 'quotations', name: 'admin.quotations', component: AdminQuotations },
      { path: 'receipts',   name: 'admin.receipts',   component: AdminReceipts },
    ],
  },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router