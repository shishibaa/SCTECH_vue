<template>
  <Panel title="ใบเสร็จ">
    <div class="flex items-center justify-between mb-3">
      <input v-model="q" type="text" placeholder="ค้นหาเลขที่/ลูกค้า" class="form-input w-72" />
      <button class="btn-primary" @click="openCreate()">+ ออกใบเสร็จ</button>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead><tr class="bg-slate-50 text-slate-600"><th class="th">เลขที่</th><th class="th">ลูกค้า</th><th class="th">วันที่</th><th class="th text-right">สุทธิ</th><th class="th w-40">จัดการ</th></tr></thead>
        <tbody>
          <tr v-for="c in filtered" :key="c.id" class="border-b last:border-b-0">
            <td class="td">{{ c.doc_no }}</td>
            <td class="td">{{ c.customer_name }}</td>
            <td class="td">{{ c.doc_date }}</td>
            <td class="td text-right">{{ fmt(c.grand_total) }}</td>
            <td class="td">
              <div class="flex gap-2">
                <button class="text-[#1E56A0]" @click="openEdit(c)">เปิด</button>
                <button class="text-rose-600" @click="remove(c)">ลบ</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal form -->
    <dialog ref="dlg" class="rounded-2xl p-0 w-[min(860px,96vw)]">
      <form @submit.prevent="save" class="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
        <header class="px-4 py-3 border-b border-slate-200 font-semibold text-[#0F3460]">{{ editing?.id ? 'แก้ไขใบเสร็จ' : 'ออกใบเสร็จ' }}</header>
        <div class="p-4 space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="form-label">ลูกค้า</label>
              <input v-model.trim="editing.customer_name" class="form-input" required />
            </div>
            <div>
              <label class="form-label">วันที่</label>
              <input v-model="editing.doc_date" type="date" class="form-input" required />
            </div>
            <div>
              <label class="form-label">เลขที่ใบเสร็จ</label>
              <input v-model.trim="editing.doc_no" class="form-input" />
            </div>
          </div>

          <div>
            <label class="form-label">รายการ</label>
            <div class="rounded-xl border border-slate-200 overflow-hidden">
              <table class="w-full text-sm">
                <thead><tr class="bg-slate-50 text-slate-600"><th class="th">ชื่อ</th><th class="th w-24">จำนวน</th><th class="th w-28">หน่วย</th><th class="th w-36">ราคาต่อหน่วย</th><th class="th w-36">รวม</th><th class="th w-10"></th></tr></thead>
                <tbody>
                  <tr v-for="(it, i) in editing.items" :key="it._id" class="border-b last:border-b-0">
                    <td class="td"><input v-model.trim="it.name" class="form-input" required /></td>
                    <td class="td"><input v-model.number="it.qty" type="number" min="1" class="form-input text-right" required /></td>
                    <td class="td"><input v-model.trim="it.unit" class="form-input" /></td>
                    <td class="td"><input v-model.number="it.unit_price" type="number" min="0" step="0.01" class="form-input text-right" required /></td>
                    <td class="td text-right">{{ fmt(it.qty*it.unit_price) }}</td>
                    <td class="td text-right"><button type="button" class="text-rose-600" @click="editing.items.splice(i,1)">ลบ</button></td>
                  </tr>
                </tbody>
              </table>
              <div class="p-3 bg-slate-50 text-right">
                <button type="button" class="btn-secondary" @click="addItem">+ เพิ่มรายการ</button>
              </div>
            </div>
          </div>

          <!-- totals -->
          <div class="flex flex-col sm:flex-row gap-3 justify-end">
            <div class="rounded-xl bg-slate-50 px-4 py-3 min-w-[260px]">
              <div class="flex justify-between text-sm"><span>รวมย่อย</span><span>{{ fmt(subtotal) }}</span></div>
              <div class="flex justify-between text-sm"><span>VAT ({{ editing.vat_rate }}%)</span><span>{{ fmt(vat) }}</span></div>
              <div class="flex justify-between font-semibold mt-1"><span>ยอดสุทธิ</span><span>{{ fmt(total) }}</span></div>
            </div>
          </div>
        </div>
        <footer class="px-4 py-3 border-t border-slate-200 flex justify-end gap-2 bg-slate-50">
          <button type="button" class="btn-secondary" @click="dlg.close()">ยกเลิก</button>
          <button type="submit" class="btn-primary">บันทึก</button>
        </footer>
      </form>
    </dialog>
  </Panel>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue'
import { api } from '../../lib/api.js'
import Panel from './components/Panel.vue'

const toast = inject('toast')
const q = ref('')
const list = ref([])
const dlg = ref(null)
const editing = ref(null)

onMounted(async () => { list.value = await api.get('/receipts') || [] })

const filtered = computed(() => list.value.filter(c =>
  (c.doc_no || '').toLowerCase().includes(q.value.toLowerCase()) ||
  (c.customer_name || '').toLowerCase().includes(q.value.toLowerCase())
))

function defaultDoc() {
  return {
    id: undefined,
    doc_no: '',
    doc_date: new Date().toISOString().slice(0, 10),
    customer_name: '',
    vat_rate: 7,
    items: [{ _id: rnd(), name: '', qty: 1, unit: '', unit_price: 0 }],
  }
}
function addItem() { editing.value.items.push({ _id: rnd(), name: '', qty: 1, unit: '', unit_price: 0 }) }
function rnd() { return Math.random().toString(36).slice(2) }

const subtotal = computed(() => (editing.value?.items || []).reduce((s, i) => s + Number(i.qty || 0) * Number(i.unit_price || 0), 0))
const vat      = computed(() => subtotal.value * (Number(editing.value?.vat_rate || 0) / 100))
const total    = computed(() => subtotal.value + vat.value)
const fmt      = (n) => new Intl.NumberFormat('th-TH', { minimumFractionDigits: 2 }).format(Number(n || 0))

function openCreate() { editing.value = defaultDoc(); dlg.value.showModal() }
function openEdit(c)  { editing.value = { ...c, items: (c.items || []).map(x => ({ _id: rnd(), ...x })) }; dlg.value.showModal() }

async function save() {
  const payload = { ...editing.value, grand_total: total.value, subtotal: subtotal.value, vat_amount: vat.value }
  if (payload.id) {
    const saved = await api.put('/receipts', payload)
    const idx = list.value.findIndex(x => x.id === saved.id); if (idx > -1) list.value[idx] = saved
    toast.success('บันทึกใบเสร็จแล้ว')
  } else {
    const saved = await api.post('/receipts', payload)
    list.value.push(saved); toast.success('ออกใบเสร็จแล้ว')
  }
  dlg.value.close()
}

async function remove(c) { if (!confirm('ลบใบเสร็จนี้?')) return; await api.del(`/receipts/${c.id}`); list.value = list.value.filter(x => x.id !== c.id); toast.info('ลบแล้ว') }
</script>