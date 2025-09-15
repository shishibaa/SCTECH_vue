<template>
  <footer class="bg-secondary text-white">
    <div class="mx-auto max-w-7xl px-5 py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div class="col-span-2 ">
          <div class="flex items-center gap-4 ">
            <img src="/src/assets/logo2.svg" class="w-16 h-auto" alt="SC TECH logo" />
            <h1 class="text-xl leading-tight font-semibold">
             <span class="text-[32px]">SC TECH (2025)</span>  <br>LIMITED PARTNERSHIP
            </h1>
          </div>

        </div>

        <div>
          <h2 class="text-lg font-semibold mb-3">ติดต่อเรา</h2>
          <address class="not-italic space-y-1 text-white/90">
            <p>ที่อยู่ 159 ม. 23 ต.หัวขวาง</p>
            <p>อ.โกสุมพิสัย จ.มหาสารคาม 44140</p>
            <p>
              โทรศัพท์
                095-606-5832
            </p>
            <p>
              อีเมล
                sctech95@gmail.com
            </p>
          </address>
          
        </div>

        <nav class="sm:order-last lg:order-none">
          <h2 class="text-lg font-semibold mb-3">เมนูลัด</h2>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/"
                class="inline-block hover:translate-x-0.5 transition-transform underline-offset-4"
                >หน้าแรก</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="inline-block hover:translate-x-0.5 transition-transform underline-offset-4"
                >เกี่ยวกับเรา</router-link
              >
            </li>
            <li>
              <router-link
                to="/service"
                class="inline-block hover:translate-x-0.5 transition-transform underline-offset-4"
                >บริการ</router-link
              >
            </li>
            <li>
              <router-link
                to="/contact"
                class="inline-block hover:translate-x-0.5 transition-transform underline-offset-4"
                >ติดต่อ</router-link
              >
            </li>
            <li>
              <router-link
                to="/quotation"
                class="inline-block hover:translate-x-0.5 transition-transform underline-offset-4 "
                >ขอใบเสนอราคา</router-link
              >
            </li>
          </ul>
        </nav>

 
      </div>

      <div class="mt-10 border-t border-white/20 pt-6  items-center gap-4">
        <p class="text-sm text-center text-white/70">
          © {{ currentYear }} SC TECH (2025) LIMITED PARTNERSHIP.
        </p>
      </div>
      
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>

</style>
