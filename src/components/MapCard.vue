<script setup>
const props = defineProps({
    mapsEmbedUrl: { type: String, required: true },
    mapsLink: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true }
})
</script>

<template>
    <section class=" max-w-5xl mx-auto ">
        <div class="bg-white rounded-2xl shadow-lg ring-1 ring-black/5 overflow-hidden">
            <div class="grid md:grid-cols-2">
                <div class="relative min-h-[260px] md:min-h-[420px]">
                    <iframe :src="mapsEmbedUrl" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" class="absolute inset-0 w-full h-full"></iframe>
                </div>

                <div class="p-8 md:p-10 flex flex-col items-center justify-center text-center">
                    <h2 class="text-2xl font-semibold text-fontcolor mb-5">ติดต่อเรา</h2>

                    <ul class="space-y-4 text-slate-700">
                        <li class="flex gap-3 items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-1 shrink-0" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M19.5 10.5c0 7.5-7.5 10.5-7.5 10.5S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <p class="leading-relaxed">{{ address }}</p>
                        </li>

                        <li class="flex gap-3 items-start">
                            <!-- ไอคอนโทร -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-1 shrink-0" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.051a1.125 1.125 0 00-.852-1.09l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a.75.75 0 01-1.03.18A12.04 12.04 0 016.806 12.7a.75.75 0 01.18-1.03l1.293-.97a1.125 1.125 0 00.417-1.173L7.59 5.104A1.125 1.125 0 006.5 4.252H5.25A3 3 0 002.25 7.5v-.75z" />
                            </svg>
                            <a :href="`tel:${phone}`" class="font-semibold hover:underline">{{ phone }}</a>
                        </li>

                        <li class="flex gap-3 items-start">
                            <!-- ไอคอนอีเมล -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-1 shrink-0" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M21.75 7.5v9a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 16.5v-9A2.25 2.25 0 014.5 5.25h15A2.25 2.25 0 0121.75 7.5z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M3 7l8.4 5.25a1.5 1.5 0 001.6 0L21 7" />
                            </svg>
                            <a :href="`mailto:${email}`" class="font-medium hover:underline">{{ email }}</a>
                        </li>
                    </ul>

                    <a :href="mapsLink" target="_blank" rel="noopener">
                        <button class="bg-gradient-to-r from-fontcolor to-secondary  w-32 h-10 mt-5 cursor-pointer
             text-primary rounded-xl transition-all duration-300
             hover:scale-105 hover:shadow-lg hover:bg-btn/90 hover:text-primary">Google Maps</button>

                    </a>
                </div>
            </div>
        </div>
    </section>
</template>