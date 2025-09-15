<template>
    <h1 class="mx-auto text-center mb-3"><span
                    class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fontcolor to-secondary  ">{{heading}}</span>
            </h1>
            <p class="text-center text-xl sm:text-xl md:text-2xl text-secondary mb-5">{{paragraph}}</p>
</template>

<script setup>
const props = defineProps({
    heading: { type: String},
    paragraph: { type: String}
})
</script>
