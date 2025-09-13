<template>
    <section
        class="  flex flex-col items-center justify-center text-center h-150 bg-cover bg-center bg-secondary/50 bg-blend-multiply bg-[url(/src/assets/womans-hands-typing-laptop-workplace.jpg)]">
        <div class="">
            <img class="mx-auto mb-5 h-auto w-40" src="/src/assets/logo1.svg" alt="">
            <h1 class="text-[36px] text-shadow-lg
 text-white">SC TECH (2025) LIMITED PARTNERSHIP</h1>
            <h1 class="text-[24px] text-shadow-lg
 text-white">สร้างสรรค์และนำเสนอเทคโนโลยีที่ทันสมัย <br>
                เพื่อสนับสนุนการเติบโตของลูกค้าและชุมชน</h1>
            <baseButton to="/contact" label="ติดต่อเรา" />


        </div>
    </section>

    <section class="h-140 p-20 grid grid-cols-2 grid-rows-2 gap-4 
                bg-gradient-to-b from-[#FFFFFF] via-[#F5F5F5] to-[#D1E0F6]">
        <div>
            <h1 class="text-[30px] text-fontcolor underline underline-offset-4 decoration-[3px] mb-5">เกี่ยวกับเรา</h1>
            <p class="text-[24px] text-fontcolor">ผู้นำในด้านการพัฒนาแอพพลิเคชันให้บริการโซลูชั่นไอที
                <br>ที่เชื่อถือได้และมีคุณภาพสูง สร้างสรรค์และนำเสนอเทคโนโลยี <br> ที่ทันสมัย
                เพื่อสนับสนุนการเติบโตของลูกค้าและชุมชน <br>
                <br>มุ่งหวังที่จะเป็นพาร์ทเนอร์ที่ลูกค้าสามารถไว้วางใจได้ <br>
                ในการเดินทางสู่อนาคตที่ใช้เทคโนโลยีเป็นหัวใจหลัก <br>
                ในการพัฒนาปรับปรุงองค์กรและธุรกิจ
            </p>
            <baseButton to="/about" label="ดูเพิ่มเติม" />

        </div>
        <div>
            <img src="/src/assets/top-view-woman-s-hands-working-with-laptop.jpg" class="w-150 rounded-xl" alt="">
        </div>
    </section>
    
</template>
<style scoped></style>


<script setup>
import baseButton from '../components/Button.vue';
</script>