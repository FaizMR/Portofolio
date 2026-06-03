<script setup lang="ts">
import { ref, onMounted } from 'vue';
// Import fungsi spesifik dari animejs
import { animate, splitText, stagger, type AnimatableParams } from 'animejs';
import AboutView from './AboutView.vue';
import ResumeView from './ResumeView.vue';
import ProjectView from './ProjectView.vue';
import ContactView from './ContactView.vue';

const square = ref(null);
const text = ref(null);

onMounted(() => {

  // Fungsi untuk menjalankan animasi pada satu elemen
  const runAnimation = (element: HTMLElement | null, config: AnimatableParams) => {
    if (!element) return;
    const { chars } = splitText(element, { words: false, chars: true });
    animate(chars, config);
  };

  // Sekarang Anda bisa memanggilnya untuk tiap elemen secara unik
  runAnimation(square.value, {
    opacity: [0, 1],
    duration: 100,
    delay: stagger(100),
  });

  runAnimation(text.value, {
    y: [
      { to: '-2.75rem', ease: 'outExpo', duration: 600 },
      { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
    ],
    rotate: { from: '-1turn', to: 0, delay: 0 },
    delay: stagger(50),
    ease: 'inOutCirc',
  });

});
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center">
    <div class="absolute inset-0 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-700"></div>
    <div class="relative z-10 w-full mx-auto px-[20%] text-center">
      <p ref="square" class="text-lg text-[#1A1A1A] dark:text-[#F5F5F5] leading-relaxed">
        Hallo, saya
      </p>
      <h1 ref="text" class="text-5xl font-bold text-[#C5A059] dark:text-[#E6C687] mb-4 tracking-tighter leading-[1.1]">
        Faiz Muhammad Rijal Fikri.
      </h1>
      <p ref="square" class="pt-2 text-xl text-[#1A1A1A] dark:text-[#F5F5F5] leading-relaxed">
        Saya sebagai <span class="text-[#C5A059] dark:text-[#E6C687]">Web Developer</span>
      </p>
    </div>
  </section>
  <AboutView />
  <ResumeView />
  <ProjectView />
  <ContactView />
</template>
