<template>
    <section class=" bg-gradient-to-b from-[#FFFFFF] via-[#F5F5F5] to-[#D1E0F6] pb-20 pt-10">
        <div class="mx-auto max-w-7xl ">
            <h1 class="mx-auto text-center mb-3"><span
                    class=" text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fontcolor to-secondary ">บริการของเรา</span>
            </h1>

            <p class="text-center text-xl sm:text-xl md:text-2xl mb-4 text-secondary">
                โซลูชันเทคโนโลยีครบวงจรเพื่อธุรกิจและองค์กร</p>
            <br>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                <div class="h-full">
                    <ServiceCard title="พัฒนาซอฟต์แวร์ แอปพลิเคชัน"
                        description="เว็บไซต์ โปรแกรมสำเร็จรูป การเขียนโปรแกรมตามวัตถุประสงค์ของโครงการ"
                        :icon="CodingIcon" />
                </div>
                <div class="h-full">
                    <ServiceCard title="จัดหา ติดตั้ง จำหน่าย ซื้อ ขาย นำเข้า "
                        description="ครุภัณฑ์ คอมพิวเตอร์ สำนักงาน ไฟฟ้าและวิทยุ ตามบัญชีราคามาตรฐาน ICT"
                        :icon="ComputerIcon" />
                </div>
                <div class="h-full">
                    <ServiceCard title="จัดหา ติดตั้ง จำหน่าย "
                        description="ระบบผลิตไฟฟ้าจากพลังงานแสงอาทิตย์ ตามบัญชีราคากลาง" :icon="SolarIcon" />
                </div>
                <div class="h-full">
                    <ServiceCard title="รับแปลภาษา"
                        description="บทความ วิชาการ บทภาพยนตร์ ละคร คลิปวีดีโอ รวมทั้งแปลเอกสารต่างๆ" :icon="PenIcon" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ServiceCard from '../../components/ServiceCard.vue';
import MapCard from "../../components/MapCard.vue"
import CodingIcon from '/src/assets/coding.svg';
import ComputerIcon from '/src/assets/computer.svg'
import SolarIcon from '/src/assets/solar.svg'
import PenIcon from '/src/assets/pen.svg'

</script>