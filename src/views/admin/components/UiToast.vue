<template>
  <teleport to="body">
    <div class="fixed top-4 inset-x-0 z-[70] px-4 flex flex-col items-center gap-3">
      <div v-for="t in toasts" :key="t.id" class="w-full max-w-md rounded-xl border shadow-lg p-4 flex gap-3"
           :class="t.variant==='success' ? 'bg-emerald-50 border-emerald-200' : t.variant==='error' ? 'bg-rose-50 border-rose-200' : 'bg-slate-50 border-slate-200'">
        <div class="mt-0.5">
          <svg v-if="t.variant==='success'" class="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4.5 4.5L19 7"/></svg>
          <svg v-else-if="t.variant==='error'" class="w-5 h-5 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
          <svg v-else class="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>
        </div>
        <div class="flex-1">
          <p class="font-medium text-slate-900">{{ t.title }}</p>
          <p v-if="t.message" class="text-sm text-slate-700">{{ t.message }}</p>
        </div>
        <button class="text-slate-500 hover:text-slate-900" @click="dismiss(t.id)">✕</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref } from 'vue'
const toasts = ref([])
let id = 1
function push(t) { toasts.value.push({ id: id++, variant: t.variant||'info', title: t.title||'', message: t.message||'' }) }
function dismiss(i) { toasts.value = toasts.value.filter(x=>x.id!==i) }

defineExpose({ push })
</script>