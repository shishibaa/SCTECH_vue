<template>
     <section
        class=" bg-gradient-to-b from-[#FFFFFF] via-[#F5F5F5] to-[#D1E0F6] pb-20 pt-10">
        <div class="animate-fade animate-duration-500">
         <h1 class="mx-auto text-center mb-3"><span
                    class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fontcolor to-secondary  ">ติดต่อเรา</span>
            </h1>
            <p class="text-center text-xl sm:text-xl md:text-2xl text-secondary mb-5">ดูแผนที่ หรือติดต่อทีมเราได้ทางอีเมลและโทรศัพท์</p>
        <MapCard
            maps-embed-url="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d478.8095309358353!2d103.04955189814909!3d16.247344038437564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDE0JzUwLjMiTiAxMDPCsDAyJzU4LjciRQ!5e0!3m2!1sen!2sth!4v1757831814686!5m2!1sen!2sth"
            maps-link="https://maps.app.goo.gl/BG61L7riUT1nTpK78"
            address="ที่อยู่ 159 ม. 23 ต.หัวขวาง อ.โกสุมพิสัย จ.มหาสารคาม 44140" phone="095-606-5832"
            email="sctech95@gmail.com" />
            </div>
    </section>
</template>

<script setup>
import MapCard from "../../components/MapCard.vue"

</script>