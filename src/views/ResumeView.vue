<script setup lang="ts">
import TheSidebar from '@/components/TheSidebar.vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SidebarProvider } from '@/components/ui/sidebar';

const skills = [
  {
    id: 1,
    skill: "HTML",
  },
  {
    id: 2,
    skill: "CSS",
  },
  {
    id: 3,
    skill: "Laravel",
  },
  {
    id: 4,
    skill: "Vue.js",
  },
  {
    id: 5,
    skill: "Typscript",
  },
  {
    id: 6,
    skill: "React.js",
  },
  {
    id: 7,
    skill: "Javascript",
  },
  {
    id: 8,
    skill: "Tailwindcss",
  },
];
</script>
<template>
  <section id="resume" class="relative min-h-screen flex items-center justify-center">
    <div class="absolute inset-0 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-700"></div>
    <SidebarProvider>
      <div class="relative z-10 px-[5%]">
        <div class="grid grid-cols-3">
          <div>
            <TheSidebar class="pt-17" />
          </div>
          <div class="col-span-2">
            <Section id="pendidikan">
              <Card class="shadow-transparent bg-transparent border-0">
                <CardHeader>
                  <CardTitle class="text-3xl font-bold text-[#C5A059] dark:text-[#E6C687] mb-4">Pendidikan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="flex flex-col gap-5">
                    <Card class="min-w-3xl">
                      <CardContent>
                        <span class="text-[#C5A059] dark:text-[#E6C687]">2022 - 2025</span><br>
                        <span class="text-[#1A1A1A] dark:text-[#F5F5F5] text-2xl">Politeknik Pajajaran</span><br>
                        <span class="text-[#1A1A1A] dark:text-[#F5F5F5] text-xl">Teknologi Komputer</span>
                      </CardContent>
                    </Card>
                    <Card class="min-w-3xl">
                      <CardContent>
                        <span class="text-[#C5A059] dark:text-[#E6C687]">2019 - 2022</span><br>
                        <span class="text-[#1A1A1A] dark:text-[#F5F5F5] text-2xl">SMK Merdeka Bandung</span><br>
                        <span class="text-[#1A1A1A] dark:text-[#F5F5F5] text-xl">Teknik Komputer dan Jaringan</span>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </Section>
            <Section id="pengalaman">
              <Card class="shadow-transparent bg-transparent border-0">
                <CardHeader>
                  <CardTitle class="text-3xl font-bold text-[#C5A059] dark:text-[#E6C687] mb-4">Pengalaman
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="flex flex-col gap-5">
                    <Card class="min-w-3xl">
                      <CardContent>
                        <span class="text-[#C5A059] dark:text-[#E6C687]">Februari - April 2025</span><br>
                        <span class="text-[#1A1A1A] dark:text-[#F5F5F5] text-2xl">Staff IT</span><br>
                        <span class="text-[#1A1A1A] dark:text-[#F5F5F5] text-xl">Yayasan PGII Bandung (Magang)</span>
                      </CardContent>
                    </Card>
                    <Card class="min-w-3xl">
                      <CardContent>
                        <span class="text-[#C5A059] dark:text-[#E6C687]">September - Oktober 2021</span><br>
                        <span class="text-[#1A1A1A] dark:text-[#F5F5F5] text-2xl">Staff IT</span><br>
                        <span class="text-[#1A1A1A] dark:text-[#F5F5F5] text-xl">Politeknik LP3I (Magang)</span>
                      </CardContent>
                    </Card>
                    <Card class="min-w-3xl">
                      <CardContent>
                        <span class="text-[#C5A059] dark:text-[#E6C687]">Februari - April 2021</span><br>
                        <span class="text-[#1A1A1A] dark:text-[#F5F5F5] text-2xl">Store Crew</span><br>
                        <span class="text-[#1A1A1A] dark:text-[#F5F5F5] text-xl">QNH Computer (Magang)</span>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </Section>
            <Section id="keahlian">
              <Card class="shadow-transparent bg-transparent border-0">
                <CardHeader>
                  <CardTitle class="text-3xl font-bold text-[#C5A059] dark:text-[#E6C687] mb-4">Keahlian
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="item in skills" :key="item.id" class="rounded-lg overflow-hidden shadow-xs card-hover">
                      <Card class="">
                        <CardContent class="text-[#1A1A1A] dark:text-[#F5F5F5] text-xl">
                          {{ item.skill }}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Section>
          </div>
        </div>
      </div>
    </SidebarProvider>
  </section>
</template>
