<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

// Pastikan sudah install: npm i @vueuse/core

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()"
    class="cursor-pointer relative inline-flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full group"
    aria-label="Toggle Dark Mode">
    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 text-[#E6C687] transition-transform duration-500 rotate-0 group-hover:rotate-90" fill="none"
      viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 3v1m0 18v1m9-9h1M4 12H3m15.364-6.364l.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>

    <svg v-else xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 text-[#C5A059] transition-transform duration-500 -rotate-12 group-hover:rotate-0" fill="none"
      viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  </button>
</template>
