<template>
    <nav class="bg-primary/90 backdrop-blur-md p-4 sticky top-0 z-50 w-full shadow-sm">
        <div class="w-full">
            <div class="flex items-center">
                <!-- Logo -->
                <router-link to="/" class="flex items-center">
                    <img class="w-12 h-auto" id="logo" src="/src/assets/logo1.svg" alt="logo" />
                </router-link>

                <!-- Hamburger (Mobile) -->
                <button
                    class="ml-auto md:hidden inline-flex items-center justify-center rounded-xl p-2 text-fontcolor focus:outline-none focus:ring-2 focus:ring-secondary"
                    :aria-expanded="isOpen.toString()" :aria-label="isOpen ? 'ปิดเมนู' : 'เปิดเมนู'" @click="toggle()">
                    <!-- Icon: menu -->
                    <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-7 h-7">
                        <path fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z"
                            clip-rule="evenodd" />
                    </svg>
                    <!-- Icon: close -->
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-7 h-7">
                        <path fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>

                <!-- Desktop menu -->
                <ul class="hidden md:flex text-lg items-center ml-auto gap-10 list-none text-fontcolor">
                    <li>
                        <router-link to="/" class="relative px-1 py-2 pb-0 transition-colors duration-200 hover:text-secondary
                     after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full
                     after:origin-center after:scale-x-0 after:bg-secondary after:content-['']
                     after:transition-transform after:duration-600 hover:after:scale-x-100
                     focus-visible:after:scale-x-100 after:rounded-full"
                            active-class="text-secondary after:scale-x-100">หน้าแรก</router-link>
                    </li>
                    <li>
                        <router-link to="/about" class="relative px-1 py-2 pb-0 transition-colors duration-200 hover:text-secondary
                     after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full
                     after:origin-center after:scale-x-0 after:bg-secondary after:content-['']
                     after:transition-transform after:duration-600 hover:after:scale-x-100
                     after:rounded-full" active-class="text-secondary after:scale-x-100">เกี่ยวกับเรา</router-link>
                    </li>
                    <li>
                        <router-link to="/service" class="relative px-1 py-2 pb-0 transition-colors duration-200 hover:text-secondary
                     after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full
                     after:origin-center after:scale-x-0 after:bg-secondary after:content-['']
                     after:transition-transform after:duration-600 hover:after:scale-x-100
                     focus-visible:after:scale-x-100 after:rounded-full"
                            active-class="text-secondary after:scale-x-100">บริการ</router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="relative px-1 py-2 pb-0 transition-colors duration-200 hover:text-secondary
                     after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full
                     after:origin-center after:scale-x-0 after:bg-secondary after:content-['']
                     after:transition-transform after:duration-600 hover:after:scale-x-100
                     focus-visible:after:scale-x-100 after:rounded-full"
                            active-class="text-secondary after:scale-x-100">ติดต่อ</router-link>
                    </li>

                    <router-link to="/quotation"
                        class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3A5E98] to-[#7e96c0] text-white px-4 py-2 rounded-xl shadow-lg border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:from-lightblue1 hover:to-lightblue2 hover:text-fontcolor">
                        ขอใบเสนอราคา
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path
                                d="M13.5 4.5a.75.75 0 0 0-1.5 0v6.75H5.25a.75.75 0 0 0 0 1.5H12v6.75a.75.75 0 0 0 1.5 0V12.75h6.75a.75.75 0 0 0 0-1.5H13.5V4.5Z" />
                        </svg>
                    </router-link>
                </ul>
            </div>

            <transition name="collapse">
                <div v-show="isOpen" class="md:hidden overflow-hidden">
                    <ul class="pt-3 pb-2 space-y-2 text-fontcolor text-base">
                        <li>
                            <router-link to="/"
                                class="block px-2 py-2 rounded-lg transition-colors duration-200 hover:bg-secondary/10"
                                active-class="text-secondary" @click="close()">หน้าแรก</router-link>
                        </li>
                        <li>
                            <router-link to="/about"
                                class="block px-2 py-2 rounded-lg transition-colors duration-200 hover:bg-secondary/10"
                                active-class="text-secondary" @click="close()">เกี่ยวกับเรา</router-link>
                        </li>
                        <li>
                            <router-link to="/service"
                                class="block px-2 py-2 rounded-lg transition-colors duration-200 hover:bg-secondary/10"
                                active-class="text-secondary" @click="close()">บริการ</router-link>
                        </li>
                        <li>
                            <router-link to="/contact"
                                class="block px-2 py-2 rounded-lg transition-colors duration-200 hover:bg-secondary/10"
                                active-class="text-secondary" @click="close()">ติดต่อ</router-link>
                        </li>
                        <li class="pt-1">
                            <router-link to="/quotation"
                                class="block px-2 py-2 rounded-lg transition-colors duration-200 hover:bg-secondary/10"
                                active-class="text-secondary" @click="close()">ขอใบเสนอราคา</router-link>

                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()

function close() {
    isOpen.value = false
}
function toggle() {
    isOpen.value = !isOpen.value
}

watch(
    () => route.fullPath,
    () => {
        isOpen.value = false
    }
)

function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') close()
}

onMounted(() => {
    window.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKey)
})
</script>

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
    transition: max-height 0.25s ease, opacity 0.2s ease;
}

.collapse-enter-from,
.collapse-leave-to {
    max-height: 0;
    opacity: 0;
}

.collapse-enter-to,
.collapse-leave-from {
    max-height: 320px;
    opacity: 1;
}
</style>


<style scoped>
nav {
    box-sizing: border-box;
}

.navbar li:hover {
    color: #3A5E98;
    cursor: pointer;

}

#logo {
    cursor: pointer;
}
</style>
