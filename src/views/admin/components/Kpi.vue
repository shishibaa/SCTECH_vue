
<template>
    <Panel title="ลูกค้า">
        <div class="flex items-center justify-between mb-3">
            <input v-model="q" type="text" placeholder="ค้นหาชื่อ/เบอร์/อีเมล" class="form-input w-72" />
            <button class="btn-primary" @click="openCreate()">+ เพิ่มลูกค้า</button>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-50 text-slate-600">
                        <th class="th">ชื่อ</th>
                        <th class="th">เบอร์</th>
                        <th class="th">อีเมล</th>
                        <th class="th">เลขผู้เสียภาษี</th>
                        <th class="th w-32">จัดการ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="c in filtered" :key="c.id" class="border-b last:border-b-0">
                        <td class="td">{{ c.name }}</td>
                        <td class="td">{{ c.phone }}</td>
                        <td class="td">{{ c.email }}</td>
                        <td class="td">{{ c.tax_id }}</td>
                        <td class="td">
                            <div class="flex gap-2">
                                <button class="text-[#1E56A0]" @click="openEdit(c)">แก้ไข</button>
                                <button class="text-rose-600" @click="remove(c)">ลบ</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Modal -->
        <dialog ref="dlg" class="rounded-2xl p-0 w-[min(520px,90vw)]">
            <form @submit.prevent="save" class="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
                <header class="px-4 py-3 border-b border-slate-200 font-semibold text-[#0F3460]">{{ editing?.id ?
                    'แก้ไขลูกค้า' : 'เพิ่มลูกค้า' }}</header>
                <div class="p-4 space-y-3">
                    <div>
                        <label class="form-label">ชื่อ</label>
                        <input v-model.trim="editing.name" class="form-input" required />
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="form-label">เบอร์โทร</label>
                            <input v-model.trim="editing.phone" class="form-input" pattern="^0\\d{8,9}$" />
                            <p v-if="editing.phone && !/^0\\d{8,9}$/.test(editing.phone)" class="form-error">
                                รูปแบบเบอร์ไม่ถูกต้อง</p>
                        </div>
                        <div>
                            <label class="form-label">อีเมล</label>
                            <input v-model.trim="editing.email" type="email" class="form-input" />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="form-label">เลขผู้เสียภาษี</label>
                            <input v-model.trim="editing.tax_id" class="form-input" pattern="^\\d{13}$" />
                        </div>
                        <div>
                            <label class="form-label">รหัสไปรษณีย์</label>
                            <input v-model.trim="editing.postcode" class="form-input" pattern="^\\d{5}$" />
                        </div>
                    </div>
                    <div>
                        <label class="form-label">ที่อยู่</label>
                        <textarea v-model.trim="editing.address_line1" rows="2" class="form-input" />
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
import { api } from '../../../lib/api.js'
import Panel from '../components/Panel.vue'

const toast = inject('toast')
const q = ref('')
const list = ref([])
const dlg = ref(null)
const editing = ref({})

onMounted(async () => { list.value = await api.get('/customers') || [] })

const filtered = computed(() => list.value.filter(c =>
  (c.name || '').toLowerCase().includes(q.value.toLowerCase()) ||
  (c.phone || '').includes(q.value) ||
  (c.email || '').toLowerCase().includes(q.value.toLowerCase())
))

function openCreate() { editing.value = {}; dlg.value.showModal() }
function openEdit(c) { editing.value = { ...c }; dlg.value.showModal() }

async function save() {
  if (!editing.value.name) return
  if (editing.value.id) {
    const saved = await api.put('/customers', editing.value)
    const idx = list.value.findIndex(x => x.id === saved.id); if (idx > -1) list.value[idx] = saved
    toast.success('อัปเดตลูกค้าเรียบร้อย')
  } else {
    const saved = await api.post('/customers', editing.value)
    list.value.push(saved)
    toast.success('เพิ่มลูกค้าแล้ว')
  }
  dlg.value.close()
}

async function remove(c) {
  if (!confirm('ลบลูกค้า?')) return
  await api.del(`/customers/${c.id}`)
  list.value = list.value.filter(x => x.id !== c.id)
  toast.info('ลบแล้ว')
}
</script>