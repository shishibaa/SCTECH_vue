<template>
<nav class="bg-primary/90 backdrop-blur-md p-4 !sticky !top-0 !z-50 w-full shadow-sm">
            <div class="flex items-center">
                <router-link to="/">
                    <img class=" w-12 h-auto" id="logo" src="/src/assets/logo1.svg" alt="logo">
                </router-link>

                <ul id class="navbar text-lg flex ml-auto gap-10 list-none text-fontcolor ">
                    <li>
                        <router-link to="/" class="relative px-1 py-2 pb-0 transition-colors duration-200 hover:text-secondary
                   after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full
                   after:origin-center after:scale-x-0 after:bg-secondary after:content-['']
                   after:transition-transform after:duration-600 hover:after:scale-x-100
                   focus-visible:after:scale-x-100 after:rounded-full "active-class="text-secondary after:scale-x-100">
                            หน้าแรก
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/about" class="relative px-1 py-2 pb-0 transition-colors duration-200 hover:text-secondary
                            after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full
                            after:origin-center after:scale-x-0 after:bg-secondary after:content-['']
                            after:transition-transform after:duration-600 hover:after:scale-x-100
                            after:rounded-full" active-class="text-secondary after:scale-x-100">
                            เกี่ยวกับเรา
                        </router-link>

                    </li>

                    <li>
                        <router-link to="/contact" class="relative px-1 py-2 pb-0 transition-colors duration-200 hover:text-secondary
                   after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full
                   after:origin-center after:scale-x-0 after:bg-secondary after:content-['']
                   after:transition-transform after:duration-600 hover:after:scale-x-100
                   focus-visible:after:scale-x-100 after:rounded-full" active-class="text-secondary after:scale-x-100">
                            ติดต่อ
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/service" class="relative px-1 py-2 pb-0 mr-10 transition-colors duration-200 hover:text-secondary
                   after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full
                   after:origin-center after:scale-x-0 after:bg-secondary after:content-['']
                   after:transition-transform after:duration-600 hover:after:scale-x-100
                   focus-visible:after:scale-x-100 after:rounded-full" active-class="text-secondary after:scale-x-100 ">
                            บริการ
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
</template>


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
