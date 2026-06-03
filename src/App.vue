<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';

const myNav = [
  { name: 'Home', link: '/#home' },
  { name: 'About', link: '/#about' },
  { name: 'Resume', link: '/#resume' },
  { name: 'Projects', link: '/#projects' },
  { name: 'Contact', link: '/#contact' },
];
</script>

<template>

  <TheNavbar :menu-items="myNav" />
  <RouterView />
  <TheFooter />
</template>
