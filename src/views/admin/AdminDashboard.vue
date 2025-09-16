<template>
    <div class="space-y-6">
        <!-- KPI Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Kpi title="ใบเสนอราคาทั้งหมด" :value="stats.quotations" />
            <Kpi title="ใบเสร็จ (เดือนนี้)" :value="stats.receiptsMonth" />
            <Kpi title="รายได้เดือนนี้ (บาท)" :value="format(stats.revenueMonth)" />
            <Kpi title="ลูกค้า" :value="stats.customers" />
        </div>

        <!-- Recent tables -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Panel title="ใบเสนอราคาล่าสุด">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="bg-slate-50 text-slate-600">
                            <th class="th">เลขที่</th>
                            <th class="th">ลูกค้า</th>
                            <th class="th">วันที่</th>
                            <th class="th text-right">สุทธิ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="q in recentQuotations" :key="q.id" class="border-b last:border-b-0">
                            <td class="td">{{ q.doc_no }}</td>
                            <td class="td">{{ q.customer?.name || q.customer_name }}</td>
                            <td class="td">{{ q.doc_date }}</td>
                            <td class="td text-right">{{ format(q.grand_total) }}</td>
                        </tr>
                    </tbody>
                </table>
            </Panel>

            <Panel title="ใบเสร็จล่าสุด">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="bg-slate-50 text-slate-600">
                            <th class="th">เลขที่</th>
                            <th class="th">ลูกค้า</th>
                            <th class="th">วันที่</th>
                            <th class="th text-right">สุทธิ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="r in recentReceipts" :key="r.id" class="border-b last:border-b-0">
                            <td class="td">{{ r.doc_no }}</td>
                            <td class="td">{{ r.customer?.name || r.customer_name }}</td>
                            <td class="td">{{ r.doc_date }}</td>
                            <td class="td text-right">{{ format(r.grand_total) }}</td>
                        </tr>
                    </tbody>
                </table>
            </Panel>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from '../../lib/api.js'
import Panel from './components/Panel.vue'
import Kpi from './components/Kpi.vue'

const stats = ref({ quotations: 0, receiptsMonth: 0, revenueMonth: 0, customers: 0 })
const recentQuotations = ref([])
const recentReceipts = ref([])

onMounted(async () => {
    const [qs, rs, cs] = await Promise.all([
        api.get('/quotations'), api.get('/receipts'), api.get('/customers')
    ])
    stats.value.quotations = qs?.length || 0
    stats.value.receiptsMonth = rs?.filter(r => isThisMonth(r.doc_date)).length || 0
    stats.value.revenueMonth = (rs || []).filter(r => isThisMonth(r.doc_date)).reduce((s, x) => s + Number(x.grand_total || 0), 0)
    stats.value.customers = cs?.length || 0
    recentQuotations.value = (qs || []).slice(-5).reverse()
    recentReceipts.value = (rs || []).slice(-5).reverse()
})

function isThisMonth(d) { const dt = new Date(d); const n = new Date(); return dt.getMonth() === n.getMonth() && dt.getFullYear() === n.getFullYear() }
function format(n) { return new Intl.NumberFormat('th-TH', { minimumFractionDigits: 2 }).format(Number(n || 0)) }
</script>