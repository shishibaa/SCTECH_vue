<template>
  <RouterLink :to="toResolved" class="group block outline-none" :aria-label="ariaLabelResolved">
    <article class="service-card w-full h-full min-h-[220px]  flex-col flex mx-auto items-start gap-4 p-10 rounded-2xl shadow-md max-w-md
             bg-gradient-to-b from-[#ECF4FF] to-[#D1E0F6]
             transition-transform duration-300 ease-in-out hover:scale-[1.02]
             group-focus-visible:ring-2 group-focus-visible:ring-secondary group-focus-visible:ring-offset-2">
      <div class="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0">
        <img src="/src/assets/Ellipse1.svg" alt="" aria-hidden="true"
          class="absolute inset-0 w-full h-full select-none pointer-events-none" />
        <!-- รองรับทั้ง Component และ URL string -->
        <component v-if="isComponent" :is="icon" class="relative w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" />
        <img v-else-if="typeof icon === 'string'" :src="icon as string" :alt="iconAltResolved"
          class="relative w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      <div class="text-left">
        <h3 class="text-secondary font-semibold text-base sm:text-lg mb-1">{{ title }}</h3>
        <p v-if="description" class="text-fontcolor text-sm sm:text-base leading-relaxed">{{ description }}</p>
      </div>
    </article>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps < {
  title: string
  description?: string
  icon?: unknown // รองรับทั้ง SFC/Component และ URL string
  iconAlt?: string
  to?: string | Record < string, any>
  ariaLabel ?: string
}> ()

const isComponent = computed(() => props.icon && typeof props.icon !== 'string')
const toResolved = computed(() => props.to ?? '/service')
const ariaLabelResolved = computed(() => props.ariaLabel ?? props.title)
const iconAltResolved = computed(() => props.iconAlt ?? '')
</script>

<style scoped>
</style>
