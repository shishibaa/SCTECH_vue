<template>
  <section class="min-h-screen bg-primary py-10 sm:py-12">
    <div class="mx-auto max-w-6xl px-4">
      <!-- Title -->
      <header class="text-center mb-8 sm:mb-10">
        <Typography1 heading="ขอใบเสนอราคา" paragraph="กรอกข้อมูลให้ครบถ้วน ทีมงานจะติดต่อกลับพร้อมใบเสนอราคา"/>
      </header>

      <!-- Grid: form + summary -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <!-- Form column -->
        <form @submit.prevent="onSubmit" class="lg:col-span-2">
          <!-- Contact info card -->
          <div class="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-slate-200">
            <h2 class="text-lg font-semibold text-[#0F3460] mb-4">ข้อมูลผู้ติดต่อ</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- orgName -->
              <div class="sm:col-span-2">
                <label class="form-label" for="orgName">หน่วยงาน / บริษัท</label>
                <input
                  id="orgName"
                  v-model.trim="form.orgName"
                  @blur="touch('orgName')"
                  :aria-invalid="hasError('orgName')"
                  :aria-describedby="hasError('orgName') ? 'orgName_err' : undefined"
                  type="text"
                  class="form-input"
                  placeholder="เช่น หจก. เอส ซี เทค (2025)"
                />
                <p v-if="showError('orgName')" id="orgName_err" class="form-error">{{ errors.orgName }}</p>
              </div>

              <!-- contactName -->
              <div>
                <label class="form-label" for="contactName">ผู้ติดต่อ</label>
                <input
                  id="contactName"
                  v-model.trim="form.contactName"
                  @blur="touch('contactName')"
                  :aria-invalid="hasError('contactName')"
                  :aria-describedby="hasError('contactName') ? 'contactName_err' : undefined"
                  type="text"
                  class="form-input"
                  placeholder="ชื่อ-นามสกุล"
                />
                <p v-if="showError('contactName')" id="contactName_err" class="form-error">{{ errors.contactName }}</p>
              </div>

              <!-- phone -->
              <div>
                <label class="form-label" for="phone">เบอร์โทรศัพท์</label>
                <input
                  id="phone"
                  v-model.trim="form.phone"
                  @blur="touch('phone')"
                  :aria-invalid="hasError('phone')"
                  :aria-describedby="hasError('phone') ? 'phone_err' : undefined"
                  inputmode="tel"
                  type="text"
                  class="form-input"
                  placeholder="0xxxxxxxxx"
                />
                <p v-if="showError('phone')" id="phone_err" class="form-error">{{ errors.phone }}</p>
              </div>

              <!-- email -->
              <div>
                <label class="form-label" for="email">อีเมล</label>
                <input
                  id="email"
                  v-model.trim="form.email"
                  @blur="touch('email')"
                  :aria-invalid="hasError('email')"
                  :aria-describedby="hasError('email') ? 'email_err' : undefined"
                  type="email"
                  class="form-input"
                  placeholder="email@example.com"
                />
                <p v-if="showError('email')" id="email_err" class="form-error">{{ errors.email }}</p>
              </div>

              <!-- address -->
              <div class="sm:col-span-2">
                <label class="form-label" for="address">ที่อยู่สำหรับออกเอกสาร (ถ้ามี)</label>
                <textarea id="address" v-model.trim="form.address" rows="2" class="form-input"></textarea>
              </div>
            </div>
          </div>

          <!-- Project details -->
          <div class="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-slate-200 mt-6">
            <h2 class="text-lg font-semibold text-[#0F3460] mb-4">รายละเอียดงาน</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
              <div class="sm:col-span-2">
                <label class="form-label" for="projectName">ชื่องาน / รายละเอียดโดยย่อ</label>
                <input
                  id="projectName"
                  v-model.trim="form.projectName"
                  @blur="touch('projectName')"
                  :aria-invalid="hasError('projectName')"
                  :aria-describedby="hasError('projectName') ? 'projectName_err' : undefined"
                  type="text"
                  class="form-input"
                  placeholder="เช่น ติดตั้งคอมพิวเตอร์เครือข่ายและระบบไฟฟ้าในอาคาร"
                />
                <p v-if="showError('projectName')" id="projectName_err" class="form-error">{{ errors.projectName }}</p>
              </div>

              <div>
                <label class="form-label" for="dueDate">ต้องการภายใน (วันที่)</label>
                <div class="relative">
                  <input
                    id="dueDate"
                    v-model="form.dueDate"
                    @blur="touch('dueDate')"
                    :aria-invalid="hasError('dueDate')"
                    :aria-describedby="hasError('dueDate') ? 'dueDate_err' : undefined"
                    type="date"
                    class="form-input pr-10"
                  />
                  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2Z"/></svg>
                </div>
                <p v-if="showError('dueDate')" id="dueDate_err" class="form-error">{{ errors.dueDate }}</p>
              </div>

              <!-- Upload -->
              <div class="sm:justify-self-start">
                <label class="form-label ">แนบไฟล์ (ถ้ามี)</label>
                <input ref="fileInput" type="file" multiple class="hidden" @change="onFilesSelected" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx" />
                <button type="button" class="btn-secondary mt-1 cursor-pointer" @click="fileInput?.click()">
                  <span class="inline-flex items-center gap-2">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 4.5a.75.75 0 0 0-1.5 0v6.75H5.25a.75.75 0 0 0 0 1.5H12v6.75a.75.75 0 0 0 1.5 0V12.75h6.75a.75.75 0 0 0 0-1.5H13.5V4.5Z"/></svg>
                    แนบไฟล์
                  </span>
                </button>
                <ul v-if="files.length" class="mt-3 space-y-2">
                  <li v-for="(f, i) in files" :key="f.name + i" class="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm">
                    <span class="truncate mr-3">{{ f.name }} ({{ prettySize(f.size) }})</span>
                    <button type="button" class="text-slate-500 hover:text-red-500" @click="removeFile(i)">ลบ</button>
                  </li>
                </ul>
                <p v-if="showError('files')" class="form-error mt-1">{{ errors.files }}</p>
              </div>
            </div>
          </div>

          <!-- Items table -->
          <div class="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-slate-200 mt-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-semibold text-[#0F3460]">รายการสินค้า/บริการ</h2>
              <button type="button" class="btn-secondary cursor-pointer" @click="addItem">+ เพิ่มรายการ</button>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-slate-50 text-slate-600">
                    <th class="th">รายการ</th>
                    <th class="th w-24">จำนวน</th>
                    <th class="th w-28">หน่วย</th>
                    <th class="th w-36">ราคาต่อหน่วย</th>
                    <th class="th w-36">ราคารวม</th>
                    <th class="th w-16"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(it, idx) in form.items" :key="it.id" class="border-b last:border-b-0">
                    <td class="td">
                      <input
                        v-model.trim="it.name"
                        @blur="touchItem(idx, 'name')"
                        :aria-invalid="hasItemError(idx, 'name')"
                        type="text" class="form-input" placeholder="เช่น เครื่อง Core i5, งานติดตั้งระบบฯ"/>
                      <p v-if="showItemError(idx, 'name')" class="form-error">กรอกชื่อรายการ</p>
                    </td>
                    <td class="td">
                      <input v-model.number="it.qty" @blur="touchItem(idx, 'qty')" :aria-invalid="hasItemError(idx, 'qty')" type="number" min="1" step="1" class="form-input text-right"/>
                      <p v-if="showItemError(idx, 'qty')" class="form-error">จำนวนต้องมากกว่า 0</p>
                    </td>
                    <td class="td">
                      <input v-model.trim="it.unit" @blur="touchItem(idx, 'unit')" :aria-invalid="hasItemError(idx, 'unit')" type="text" class="form-input" placeholder="ชิ้น / เครื่อง / งาน"/>
                      <p v-if="showItemError(idx, 'unit')" class="form-error">กรอกหน่วย</p>
                    </td>
                    <td class="td">
                      <input v-model.number="it.unitPrice" @blur="touchItem(idx, 'unitPrice')" :aria-invalid="hasItemError(idx, 'unitPrice')" type="number" min="0" step="0.01" class="form-input text-right"/>
                      <p v-if="showItemError(idx, 'unitPrice')" class="form-error">ราคาต่อหน่วยต้องไม่ติดลบ</p>
                    </td>
                    <td class="td text-right font-medium">{{ currency(lineTotal(it)) }}</td>
                    <td class="td text-right">
                      <button type="button" class="text-slate-500 hover:text-red-600" @click="removeItem(idx)" aria-label="ลบรายการ">ลบ</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p v-if="showError('items')" class="form-error mt-2">{{ errors.items }}</p>
          </div>

          <!-- Consent + Submit -->
          <div class="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-slate-200 mt-6">
            <label class="relative flex items-start gap-3 cursor-pointer select-none">
              <input type="checkbox" v-model="form.consent" @blur="touch('consent')" :aria-invalid="hasError('consent')" class="peer sr-only" />
              <span :class="['mt-0.5 grid place-items-center h-6 w-6 rounded-md border-2 transition-all',
                             showError('consent') ? 'border-rose-400 ring-2 ring-rose-200' : 'border-slate-300',
                             'bg-white shadow-sm peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-[#1E56A0] peer-checked:bg-[#1E56A0] peer-checked:border-[#1E56A0]']">
                <svg class="w-4 h-4 text-white opacity-0 transition-opacity duration-150 peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l4 4L19 7"/></svg>
              </span>
              <span class="text-slate-700 leading-6">ยินยอมให้เก็บและใช้ข้อมูลที่กรอกเพื่อการติดต่อกลับและจัดทำใบเสนอราคา</span>
            </label>
            <p v-if="showError('consent')" class="form-error mt-2">{{ errors.consent }}</p>

            <div class="mt-6 flex justify-center lg:justify-end">
              <button type="submit" class="btn-primary w-full sm:w-auto cursor-pointer" :disabled="submitting">สั่งทำใบเสนอราคา</button>
            </div>
          </div>
        </form>

        <!-- Summary column -->
        <aside class="lg:col-span-1">
          <div class="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-slate-200 sticky top-6">
            <h2 class="text-lg font-semibold text-[#0F3460] mb-4">ยอดรวม</h2>

            <div class="space-y-2 text-sm">
              <div class="flex items-center justify-between"><span class="text-slate-600">ยอดรวมย่อย</span><span class="font-medium">{{ currency(subtotal) }}</span></div>
              <div class="flex items-center justify-between">
                <span class="text-slate-600">ภาษีมูลค่าเพิ่ม (7%)</span>
                <span class="font-medium">{{ currency(vat) }}</span>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
              <span class="font-semibold">ยอดสุทธิ</span>
              <span class="font-semibold text-[#0F3460]">{{ currency(total) }}</span>
            </div>

            <div class="mt-5 flex items-center justify-between">
              <span class="text-sm text-slate-700">รวมภาษีมูลค่าเพิ่ม</span>
              <label class="relative inline-flex cursor-pointer select-none items-center">
                <input type="checkbox" v-model="form.includeVat" class="peer sr-only" />
                <span class="h-6 w-11 rounded-full bg-slate-300 peer-checked:bg-[#1E56A0] transition-colors"></span>
                <span class="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 shadow"></span>
              </label>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- Toasts -->
    <teleport to="body">
      <div class="fixed top-4 inset-x-0 flex flex-col items-center gap-3 z-[60] px-4">
        <div
          v-for="t in toasts"
          :key="t.id"
          class="w-full max-w-md rounded-xl border shadow-lg p-4"
          :class="t.variant === 'success' ? 'bg-emerald-50 border-emerald-200' : t.variant === 'error' ? 'bg-rose-50 border-rose-200' : 'bg-slate-50 border-slate-200'"
          role="status"
        >
          <div class="flex items-start gap-3">
            <div class="shrink-0 mt-0.5">
              <svg v-if="t.variant==='success'" class="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4.5 4.5L19 7"/></svg>
              <svg v-else-if="t.variant==='error'" class="w-5 h-5 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
              <svg v-else class="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 16h-1v-4h-1m1-4h.01M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/></svg>
            </div>
            <div class="flex-1">
              <p class="font-medium text-slate-900">{{ t.title }}</p>
              <p v-if="t.message" class="text-sm text-slate-700 mt-0.5">{{ t.message }}</p>
            </div>
            <button class="text-slate-500 hover:text-slate-900" @click="dismissToast(t.id)" aria-label="ปิดการแจ้งเตือน">✕</button>
          </div>
        </div>
      </div>
    </teleport>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import Typography1 from '../components/Typography1.vue';
// ---------- Types ----------
interface Item { id: string; name: string; qty: number | null; unit: string; unitPrice: number | null }
interface Toast { id: number; title: string; message?: string; variant?: 'success' | 'error' | 'info' }

// ---------- Form state ----------
const form = reactive({
  orgName: '',
  contactName: '',
  phone: '',
  email: '',
  address: '',
  projectName: '',
  dueDate: '', // yyyy-mm-dd
  includeVat: true,
  consent: false,
  items: [makeItem()],
})

function makeItem(): Item {
  return { id: Math.random().toString(36).slice(2), name: '', qty: 1, unit: '', unitPrice: 0 }
}

// Files
const fileInput = ref<HTMLInputElement | null>(null)
const files = ref<File[]>([])
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ALLOWED = ['application/pdf','image/jpeg','image/png','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']

function onFilesSelected(e: Event) {
  const list = (e.target as HTMLInputElement).files
  if (!list) return
  const newOnes: File[] = []
  for (const f of Array.from(list)) {
    if (f.size > MAX_FILE_SIZE) {
      pushToast({ variant: 'error', title: 'ไฟล์ใหญ่เกินไป', message: `${f.name} เกิน 10MB` })
      continue
    }
    if (!ALLOWED.includes(f.type)) {
      pushToast({ variant: 'error', title: 'ชนิดไฟล์ไม่รองรับ', message: f.name })
      continue
    }
    newOnes.push(f)
  }
  files.value.push(...newOnes)
  ;(e.target as HTMLInputElement).value = ''
}
function removeFile(i: number) { files.value.splice(i, 1) }

// ---------- Validation ----------
const touched = reactive<Record<string, boolean>>({})
const itemTouched = reactive<Record<string, Record<string, boolean>>>({})
const submitAttempted = ref(false)

function touch(field: string) { touched[field] = true }
function touchItem(i: number, field: keyof Item) {
  const key = form.items[i]?.id
  if (!key) return
  if (!itemTouched[key]) itemTouched[key] = {}
  itemTouched[key][field] = true
}

const errors = reactive<Record<string, string>>({})

function validate(): boolean {
  // reset
  Object.keys(errors).forEach(k => delete (errors as any)[k])

  // required
  if (!form.orgName || form.orgName.trim().length < 2) errors.orgName = 'กรอกชื่อหน่วยงานให้ถูกต้อง'
  if (!form.contactName) errors.contactName = 'กรอกชื่อผู้ติดต่อ'

  // contact method: at least one
  if (!form.phone && !form.email) {
    errors.phone = 'กรอกอย่างน้อย 1 ช่องทาง'; errors.email = 'กรอกอย่างน้อย 1 ช่องทาง'
  }
  // phone format
  if (form.phone && !/^0\d{8,9}$/.test(form.phone)) errors.phone = 'กรอกเบอร์รูปแบบ 0XXXXXXXXX'
  // email format
  if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'รูปแบบอีเมลไม่ถูกต้อง'

  // project
  if (!form.projectName) errors.projectName = 'กรอกรายละเอียดงาน'

  // dueDate (optional but if filled must be today or future)
  if (form.dueDate) {
    const d = new Date(form.dueDate)
    const today = new Date(); today.setHours(0,0,0,0)
    if (d < today) errors.dueDate = 'วันที่ต้องไม่น้อยกว่าวันนี้'
  }

  // items
  if (!form.items.length) errors.items = 'เพิ่มรายการสินค้า/บริการอย่างน้อย 1 รายการ'
  form.items.forEach((it, idx) => {
    if (!it.name) setItemErr(idx, 'name')
    if (!it.unit) setItemErr(idx, 'unit')
    if (!(it.qty && it.qty > 0)) setItemErr(idx, 'qty')
    if (!(it.unitPrice != null && it.unitPrice >= 0)) setItemErr(idx, 'unitPrice')
  })

  // consent
  if (!form.consent) errors.consent = 'กรุณายอมรับเงื่อนไขการติดต่อและใช้งานข้อมูล'

  // files (optional) – already filtered in onFilesSelected

  return Object.keys(errors).length === 0
}

function setItemErr(idx: number, field: keyof Item) {
  const key = `item_${idx}_${field}`
  errors[key] = 'invalid'
}
function hasError(field: string) { return !!errors[field] }
function showError(field: string) { return hasError(field) && (touched[field] || submitAttempted.value) }

function hasItemError(i: number, field: keyof Item) { return !!errors[`item_${i}_${field}`] }
function showItemError(i: number, field: keyof Item) {
  const key = form.items[i]?.id
  return hasItemError(i, field) && ((key && itemTouched[key]?.[field]) || submitAttempted.value)
}

// ---------- Items ops ----------
function addItem() { form.items.push(makeItem()) }
function removeItem(i: number) { form.items.splice(i, 1) }
function lineTotal(it: Item) { return (Number(it.qty) || 0) * (Number(it.unitPrice) || 0) }

// ---------- Totals ----------
const subtotal = computed(() => form.items.reduce((s, it) => s + lineTotal(it), 0))
const vat = computed(() => form.includeVat ? subtotal.value * 0.07 : 0)
const total = computed(() => form.includeVat ? subtotal.value + vat.value : subtotal.value)

function currency(n: number) { return new Intl.NumberFormat('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n || 0) }
function prettySize(n: number) { const kb = n/1024; return kb > 1024 ? (kb/1024).toFixed(2)+' MB' : kb.toFixed(0)+' KB' }

// ---------- Submit ----------
const submitting = ref(false)
async function onSubmit() {
  submitAttempted.value = true
  const ok = validate()
  if (!ok) { pushToast({ variant: 'error', title: 'กรอกข้อมูลไม่ครบถ้วน', message: 'โปรดตรวจสอบช่องที่มีข้อความแจ้งเตือนสีแดง' }); return }
  submitting.value = true
  try {
    // เรียก API ที่นี่ได้ตามต้องการ
    await new Promise(r => setTimeout(r, 900))
    pushToast({ variant: 'success', title: 'ส่งคำขอเรียบร้อย', message: 'ทีมงานจะติดต่อกลับโดยเร็ว' })
    // reset (เก็บไฟล์ไว้ให้ผู้ใช้แก้ไขต่อ)
    // Object.assign(form, { orgName:'', contactName:'', phone:'', email:'', address:'', projectName:'', dueDate:'', includeVat:true, consent:false, items:[makeItem()] })
  } finally { submitting.value = false }
}

// ---------- Toasts ----------
const toasts = ref<Toast[]>([])
let toastId = 1
function pushToast(t: Toast) { toasts.value.push({ id: toastId++, variant: t.variant ?? 'info', title: t.title, message: t.message }) }
function dismissToast(id: number) { toasts.value = toasts.value.filter(t => t.id !== id) }
</script>

<style scoped>
@import "tailwindcss";
.form-label { @apply block text-sm font-medium text-slate-700 mb-1; }
.form-input { @apply w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E56A0] focus:border-transparent; }
.form-error { @apply mt-1 text-xs text-rose-600; }

.th { @apply text-left font-medium px-3 py-2; }
.td { @apply px-3 py-2 align-top; }

.btn-primary { @apply inline-flex items-center justify-center rounded-xl bg-[#1E56A0] text-white px-5 py-2.5 font-medium shadow-sm hover:bg-[#1b4c8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E56A0] disabled:opacity-60 disabled:cursor-not-allowed; }
.btn-secondary { @apply inline-flex items-center justify-center rounded-xl bg-[#ECF4FF] text-[#0F3460] px-4 py-2 font-medium border border-[#D1E0F6] shadow-sm hover:bg-[#DDE9FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E56A0]; }
</style>
