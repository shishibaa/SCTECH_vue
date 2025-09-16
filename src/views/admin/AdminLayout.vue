<!-- src/views/admin/AdminLayout.vue -->
<template>
  <div class="min-h-screen bg-[#F4F7FB] grid grid-cols-1 lg:grid-cols-[260px_1fr]">
    <!-- Sidebar -->
    <aside class="bg-[#1E56A0] text-white lg:sticky lg:top-0 lg:h-screen">
      <div class="px-5 py-4 flex items-center gap-3 border-b border-white/15">
        <div class="h-10 w-10 rounded-lg bg-white/10 grid place-items-center font-semibold">SC</div>
        <div class="leading-tight">
          <p class="font-semibold">SC TECH (2025)</p>
          <p class="text-white/80 text-xs">Admin Panel</p>
        </div>
      </div>
      <nav class="px-3 py-3 space-y-1">
        <router-link v-for="i in items" :key="i.to" :to="i.to"
          class="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10"
          :class="route.path === i.to ? 'bg-white/15' : ''">
          <span class="w-5 h-5" v-html="i.icon"></span>
          <span class="font-medium">{{ i.label }}</span>
        </router-link>
      </nav>
    </aside>

    <!-- Main -->
    <div class="min-h-screen flex flex-col">
      <header class="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between">
        <h1 class="text-[#0F3460] font-semibold">{{ pageTitle }}</h1>
        <div class="flex items-center gap-3 text-sm text-slate-600">
          <router-link to="/" class="hover:underline">กลับหน้าเว็บ</router-link>
        </div>
      </header>

      <main class="p-4 sm:p-6 lg:p-8">
        <router-view />
      </main>

      <!-- Toasts -->
      <UiToast ref="toastRef" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, provide } from 'vue'
import { useRoute } from 'vue-router'
import UiToast from './components/UiToast.vue'   // ตรวจพาธนี้ว่ามีไฟล์จริง

const route = useRoute()
const toastRef = ref(null)

// provide toast ให้หน้าอื่นเรียกใช้ได้ (inject('toast'))
provide('toast', {
  success: (m, s='สำเร็จ')  => toastRef.value?.push({ variant:'success', title:s, message:m }),
  error:   (m, s='ผิดพลาด') => toastRef.value?.push({ variant:'error',   title:s, message:m }),
  info:    (m, s='แจ้งเตือน') => toastRef.value?.push({ variant:'info',    title:s, message:m }),
})

const items = [
  { to: '/admin',            label: 'Dashboard',    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z"/></svg>' },
  { to: '/admin/customers',  label: 'ลูกค้า',        icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14Z"/></svg>' },
  { to: '/admin/items',      label: 'สินค้า/บริการ', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 16V8l-9-5-9 5v8l9 5 9-5ZM12 4.3l6.5 3.6L12 11.5 5.5 7.9 12 4.3Z"/></svg>' },
  { to: '/admin/quotations', label: 'ใบเสนอราคา',    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5"/></svg>' },
  { to: '/admin/receipts',   label: 'ใบเสร็จ',      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h12a2 2 0 0 1 2 2v17l-3-2-3 2-3-2-3 2-3-2V4a2 2 0 0 1 2-2Zm3 5h6v2H9V7Zm0 4h6v2H9v-2Z"/></svg>' },
]

const pageTitle = computed(() => {
  const map = {
    '/admin':             'Dashboard',
    '/admin/customers':   'ลูกค้า',
    '/admin/items':       'สินค้า/บริการ',
    '/admin/quotations':  'ใบเสนอราคา',
    '/admin/receipts':    'ใบเสร็จ',
  }
  return map[route.path] ?? 'Admin'
})
</script>
