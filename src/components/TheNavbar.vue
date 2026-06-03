<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'; // 1. Import RouterLink
import DarkModeToggle from './DarkModeToggle.vue';

defineProps<{
  menuItems: { name: string; link: string }[]
}>();

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Fungsi tambahan agar menu mobile tertutup saat link diklik
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <nav
    class="flex justify-between items-center py-4 p-2 px-[5%] bg-[#FFFFFF] dark:bg-[#121212] dark:border-white/10 border-black/5 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b">

    <RouterLink to="/" class="text-xl text-[#1A1A1A] uppercase dark:text-[#F5F5F5]">
      <span class="font-bold text-2xl">FZ</span>Muhammad
    </RouterLink>

    <div :class="{
      'fixed top-17 right-0 w-64 h-screen flex flex-col p-6 z-9999 gap-2 bg-[#FFFFFF] dark:bg-[#121212]': isMenuOpen,
      'hidden': !isMenuOpen
    }"
      class="items-center md:flex md:space-x-1 md:static md:w-auto md:h-auto md:bg-transparent md:p-0 md:shadow-none md:flex-row ">

      <RouterLink v-for="item in menuItems" :key="item.name" :to="item.link" @click="closeMenu"
        class="inline-block font-medium tracking-wide rounded-sm px-5 py-1.5 text-sm leading-normal hover:text-[#C5A059] dark:hover:text-[#E6C687] text-[#1A1A1A] dark:text-[#F5F5F5]">
        {{ item.name }}
      </RouterLink>

    </div>

    <DarkModeToggle />

    <div class="block md:hidden">
      <button @click="toggleMenu" id="hamburger-menu" class="focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-menu text-[#1A1A1A] dark:text-[#F5F5F5] backdrop-blur-xl border-l border-black/5 dark:border-white/10">
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>
    </div>
  </nav>
</template>
