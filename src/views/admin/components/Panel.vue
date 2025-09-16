<template>
  <section class="rounded-2xl bg-white border border-slate-200 shadow-sm">
    <header class="px-4 py-3 border-b border-slate-200 text-[#0F3460] font-semibold">{{ title }}</header>
    <div class="p-4">
      <slot />
    </div>
  </section>
</template>
<script setup>
defineProps({ title: String })
</script>