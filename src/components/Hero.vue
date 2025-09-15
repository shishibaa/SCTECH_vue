<template>
<section
role="banner"
:aria-labelledby="titleId"
class="relative isolate w-full overflow-hidden bg-cover bg-center"
:style="bgStyle"
>
<!-- overlay -->
<div class="absolute inset-0" :class="overlayClassComputed"></div>
<!-- bottom fade to page bg to blend nicely -->
<div class="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F4F7FB]/90 to-transparent"></div>


<div
class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8
min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh]
flex items-center"
>
<div :class="align === 'center' ? 'mx-auto text-center' : 'text-left'" class="w-full">
<!-- Breadcrumbs -->
<nav v-if="hasCrumbs" aria-label="breadcrumb" class="mb-3 hidden sm:block">
<ol class="flex flex-wrap items-center gap-1 text-sm text-white/90">
<li v-for="(b, i) in breadcrumbs" :key="i" class="inline-flex items-center gap-1">
<router-link v-if="b.to" :to="b.to" class="hover:underline focus:outline-none focus:ring-2 focus:ring-white/40 rounded px-1">{{ b.label }}</router-link>
<span v-else class="px-1">{{ b.label }}</span>
<span v-if="i < breadcrumbs.length - 1" aria-hidden="true" class="opacity-70">/</span>
</li>
</ol>
</nav>


<!-- Title & subtitle -->
<h1 :id="titleId" class="text-white drop-shadow font-bold text-3xl sm:text-4xl md:text-5xl">
{{ title }}
</h1>
<p v-if="subtitle" class="mt-3 text-white/95 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl" :class="align === 'center' ? 'mx-auto' : ''">
{{ subtitle }}
</p>


<!-- Actions -->
<div v-if="hasActions" class="mt-6 flex gap-3" :class="align === 'center' ? 'justify-center' : 'justify-start'">
<slot name="actions">
<baseButton v-if="ctaTo && ctaLabel" :to="ctaTo" :label="ctaLabel" />
</slot>
</div>
</div>
</div>
</section>
</template>


<script setup lang="ts">
import { computed } from 'vue'
// Props
const props = withDefaults(defineProps<{
title: string
subtitle?: string
image?: string
align?: 'center' | 'left'
overlayClass?: string
ctaTo?: any
ctaLabel?: string
breadcrumbs?: Array<{ label: string; to?: any }>
}>(), {
align: 'center',
overlayClass: 'bg-secondary/60',
breadcrumbs: () => [],
})


const titleId = 'hero-' + Math.random().toString(36).slice(2)
const hasCrumbs = computed(() => props.breadcrumbs && props.breadcrumbs.length > 0)
const hasActions = computed(() => !!(props.ctaTo && props.ctaLabel) || true)


const bgStyle = computed(() => props.image ? { backgroundImage: `url('${props.image}')` } : {})
const overlayClassComputed = computed(() => props.overlayClass)
</script>


<style scoped>
</style>