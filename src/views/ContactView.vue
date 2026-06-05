<script setup lang="ts">
import { Card, CardContent, CardHeader } from '@/components/ui/card';


</script>
<template>
  <section id="contact" class="relative min-h-screen flex items-center justify-center">
    <div class="absolute inset-0 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-700"></div>
    <div class="relative z-10 px-[5%]">
      <div class="grid grid-cols-2 gap-8">
        <div class="px-[20%]">
          <Card class="rounded-xl">
            <CardContent>
              <h2>
                <img src="/src/assets/profile.jpg" alt="Profile Image" class="w-80 h-auto rounded-xl">
              </h2>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card class="shadow-transparent bg-transparent border-0">
            <CardHeader>
              <h2 class="text-3xl font-bold text-[#C5A059] dark:text-[#E6C687] mb-4">Contact</h2>
            </CardHeader>
            <CardContent class="min-w-xl">
              <p class="text-lg text-[#1A1A1A] dark:text-[#F5F5F5] leading-relaxed">
                Jika Anda ingin menghubungi saya, klik pada bagian email, phone atau instagram.
              </p>
              <div class="grid grid-cols-1 gap-y-4 pt-10 text-base md:text-lg max-w-md">
                <!-- Baris Nama -->
                <div
                  class="flex flex-col sm:flex-row sm:border-b sm:border-neutral-200 dark:sm:border-neutral-800 pb-2">
                  <span class="font-semibold text-[#C5A059] dark:text-[#E6C687] sm:w-32">Name</span>
                  <span class="text-[#1A1A1A] dark:text-[#F5F5F5] font-medium">Faiz Muhammad Rijal Fikri</span>
                </div>

                <!-- Baris Email -->
                <div
                  class="flex flex-col sm:flex-row sm:border-b sm:border-neutral-200 dark:sm:border-neutral-800 pb-2">
                  <span class="font-semibold text-[#C5A059] dark:text-[#E6C687] sm:w-32">Email</span>
                  <a href="mailto:faiz.mrf74@gmail.com"
                    class="text-[#1A1A1A] dark:text-[#F5F5F5] hover:text-[#C5A059] dark:hover:text-[#E6C687] transition-colors">
                    faiz.mrf74@gmail.com
                  </a>
                </div>

                <!-- Baris Lokasi -->
                <div
                  class="flex flex-col sm:flex-row sm:border-b sm:border-neutral-200 dark:sm:border-neutral-800 pb-2">
                  <span class="font-semibold text-[#C5A059] dark:text-[#E6C687] sm:w-32">Location</span>
                  <span class="text-[#1A1A1A] dark:text-[#F5F5F5]">Bandung, Indonesia</span>
                </div>

                <!-- Baris Telepon -->
                <div
                  class="flex flex-col sm:flex-row sm:border-b sm:border-neutral-200 dark:sm:border-neutral-800 pb-2">
                  <span class="font-semibold text-[#C5A059] dark:text-[#E6C687] sm:w-32">Phone</span>
                  <a href="tel:+6282318188517"
                    class="text-[#1A1A1A] dark:text-[#F5F5F5] hover:text-[#C5A059] dark:hover:text-[#E6C687] transition-colors">
                    +62 823 1818 8517
                  </a>
                </div>

                <!-- Baris Instagram -->
                <div
                  class="flex flex-col sm:flex-row sm:border-b sm:border-neutral-200 dark:sm:border-neutral-800 pb-2">
                  <span class="font-semibold text-[#C5A059] dark:text-[#E6C687] sm:w-32">Instagram</span>
                  <a href="https://www.instagram.com/fzmf_73?igsh=eHVpdTRlM2pyaWVh"
                    class="text-[#1A1A1A] dark:text-[#F5F5F5] hover:text-[#C5A059] dark:hover:text-[#E6C687] transition-colors">
                    @fzmf_73
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
