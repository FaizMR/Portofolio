<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const menuItems = [
  { name: 'Pendidikan', link: '#pendidikan' },
  { name: 'Pengalaman', link: '#pengalaman' },
  { name: 'Keahlian', link: '#keahlian' },
];
</script>
<template>
  <Sidebar variant="floating" class="relative scrollbar-track-transparent">
    <SidebarContent>
      <SidebarMenu class="flex flex-col gap-4">
        <SidebarMenuItem v-for="item in menuItems" :key="item.name">
          <a :href="item.link" class="block w-full">
            <SidebarMenuButton
              class="text-2xl cursor-pointer hover:bg-transparent hover:text-[#C5A059] dark:hover:text-[#E6C687] text-[#1A1A1A] dark:text-[#F5F5F5]">
              {{ item.name }}
            </SidebarMenuButton>
          </a>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
  </Sidebar>
</template>
