<template>
  <router-link :to="to">
    <button
      class=" bg-gradient-to-r from-fontcolor to-secondary mt-5 px-10 py-2 cursor-pointer
             text-primary rounded-xl transition-all duration-300
             hover:scale-105 hover:shadow-lg hover:bg-btn/90 hover:text-primary text-xl sm:text-xl md:text-2xl ">
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
