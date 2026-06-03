<template>
  <section id="projects" class="relative min-h-[80vh] items-center justify-center text-center">
    <div class="absolute inset-0 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-700"></div>
    <div class="relative z-10 px-[5%]">
      <Card class="shadow-transparent bg-transparent border-0">
        <CardHeader class="px-[25%]">
          <CardTitle class="text-3xl font-bold text-[#C5A059] dark:text-[#E6C687] mb-4">Projects
          </CardTitle>
          <CardDescription> Proyek ini adalah aplikasi web modern yang responsif, terstruktur, dan
            siap digunakan untuk kebutuhan nyata dengan fokus pada UI yang bersih
            dan performa yang optimal.</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="project in projects" :key="project.id" class="rounded-lg overflow-hidden shadow-xs card-hover">
              <Card class="">
                <CardContent class="text-[#1A1A1A] dark:text-[#F5F5F5] text-xl">
                  <div class="h-48 overflow-hidden">
                    <img :src="project.image" :alt="project.title"
                      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <div class="p-6">
                    <div class="flex flex-wrap gap-2 mb-4 justify-center">
                      <span v-for="tag in project.tags" :key="tag"
                        class="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                        {{ tag }}
                      </span>
                    </div>

                    <h4 class="text-lg font-semibold mb-1 pt-2 text-center">{{ project.title }}</h4>
                    <p class="text-muted-foreground text-sm mb-4 px-4 text-center">
                      {{ project.description }}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div class="mt-12">
              <a href="https://github.com/FaizMR" target="_blank"
                class="cosmic-button w-fit flex items-center mx-auto gap-2">
                Check My Github
                <ArrowRight :size="16" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: "Perpuskit Landing Page",
    description: "A beautiful landing page using Vue and Tailwind",
    image: "/projects/Perpuskit.png",
    tags: ["Vue", "TailwindCSS", "MySQL"]
  },
  {
    id: 2,
    title: "UMKM Landing Page",
    description: "A beautiful landing page using Vue and Tailwind",
    image: "/projects/Umkm.png",
    tags: ["Vue", "TailwindCSS", "Typscript"]
  },
  {
    id: 3,
    title: "Company Landing Page",
    description: "A beautiful landing page using Vue and Tailwind",
    image: "/projects/Company.png",
    tags: ["Vue", "TailwindCSS", "Typscript"]
  },
];
</script>
