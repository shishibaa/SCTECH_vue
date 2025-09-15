<script setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }
})
</script>

<template>
<router-link to="/">
  <div class="service-card flex items-center gap-4 p-6 rounded-2xl shadow-md h-50 w-150
              bg-gradient-to-b from-[#ECF4FF] to-[#D1E0F6] max-w-md
              transform transition duration-600 ease-in-out hover:scale-105 cursor-pointer">
    
    <div class="relative w-30 h-30 flex items-center justify-center">
      <img src="/src/assets/Ellipse1.svg" class="absolute inset-0 w-full h-full" alt="circle background">
      <img :src="icon" class="relative w-10 h-10 text-white" alt="icon">
    </div>

    <div>
      <h3 class="text-secondary font-semibold mb-1">
        {{ title }}
      </h3>
      <p class="text-fontcolor text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
  </router-link>

</template>

<style scoped>

</style>