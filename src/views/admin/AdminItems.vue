<template>
  <Panel title="สินค้า/บริการ">
    <div class="flex items-center justify-between mb-3">
      <input v-model="q" type="text" placeholder="ค้นหา" class="form-input w-72" />
      <button class="btn-primary" @click="openCreate()">+ เพิ่ม</button>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead><tr class="bg-slate-50 text-slate-600"><th class="th">ชื่อ</th><th class="th w-28">ชนิด</th><th class="th w-28">ราคาทุน</th><th class="th w-24">ใช้งาน</th><th class="th w-32">จัดการ</th></tr></thead>
        <tbody>
          <tr v-for="c in filtered" :key="c.id" class="border-b last:border-b-0">
            <td class="td">{{ c.name }}</td>
            <td class="td">{{ c.kind || 'SERVICE' }}</td>
            <td class="td">{{ Number(c.unit_cost || 0).toFixed(2) }}</td>
            <td class="td"><input type="checkbox" v-model="c.is_active" @change="toggle(c)" /></td>
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

    <!-- Modal form -->
    <dialog ref="dlg" class="rounded-2xl p-0 w-[min(520px,90vw)]">
      <form @submit.prevent="save" class="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
        <header class="px-4 py-3 border-b border-slate-200 font-semibold text-[#0F3460]">{{ editing?.id ? 'แก้ไข' : 'เพิ่ม' }} สินค้า/บริการ</header>
        <div class="p-4 space-y-3">
          <div>
            <label class="form-label">ชื่อ</label>
            <input v-model.trim="editing.name" class="form-input" required />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="form-label">ชนิด</label>
              <select v-model="editing.kind" class="form-input">
                <option value="PRODUCT">สินค้า</option>
                <option value="SERVICE">บริการ</option>
              </select>
            </div>
            <div>
              <label class="form-label">ราคาทุน</label>
              <input v-model.number="editing.unit_cost" type="number" min="0" step="0.01" class="form-input" />
            </div>
          </div>
          <div>
            <label class="inline-flex items-center gap-2"><input type="checkbox" v-model="editing.is_active"/> ใช้งาน</label>
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
const editing = ref({ kind: 'SERVICE', is_active: true })

onMounted(async () => { list.value = await api.get('/items') || [] })

const filtered = computed(() => list.value.filter(c => (c.name || '').toLowerCase().includes(q.value.toLowerCase())))

function openCreate() { editing.value = { kind: 'SERVICE', is_active: true }; dlg.value.showModal() }
function openEdit(c) { editing.value = { ...c }; dlg.value.showModal() }

async function save() {
  if (!editing.value.name) return
  if (editing.value.id) {
    const saved = await api.put('/items', editing.value)
    const idx = list.value.findIndex(x => x.id === saved.id); if (idx > -1) list.value[idx] = saved
    toast.success('อัปเดตรายการแล้ว')
  } else {
    const saved = await api.post('/items', editing.value)
    list.value.push(saved)
    toast.success('เพิ่มรายการแล้ว')
  }
  dlg.value.close()
}

async function toggle(c) { await api.put('/items', c); toast.info(c.is_active ? 'เปิดใช้งาน' : 'ปิดใช้งาน') }
async function remove(c) { if (!confirm('ลบรายการนี้?')) return; await api.del(`/items/${c.id}`); list.value = list.value.filter(x => x.id !== c.id); toast.info('ลบแล้ว') }
</script>
