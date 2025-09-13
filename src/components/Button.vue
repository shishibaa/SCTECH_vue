<template>
  <router-link :to="to">
    <button
      class="contact-btn bg-secondary w-32 h-10 mt-5 cursor-pointer
             text-primary rounded-lg transition-all duration-300
             hover:scale-105 hover:shadow-lg hover:bg-btn/90 hover:text-primary">
      {{ label }}
    </button>
  </router-link>
</template>

<script setup>
const props = defineProps({
  to: { type: String, required: true },     // เส้นทางที่จะไป เช่น "/contact"
  label: { type: String, required: true }   // ข้อความในปุ่ม เช่น "ติดต่อเรา"
})
</script>
