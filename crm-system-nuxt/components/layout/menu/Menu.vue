<script setup lang="ts">
import { MENU_DATA } from "./menu.data";
</script>

<template>
  <div>
    <div>
      <NuxtLink
        v-for="item in MENU_DATA"
        :key="item.name"
        :to="item.href"
        class="flex items-center py-2 px-3 rounded-lg hover:shadow transition-all mb-3 hover:bg-primary hover:text-background"
      >
        <Icon :name="item.icon" class="text-2xl" />
        <span class="ml-3">{{ item.name }}</span>
      </NuxtLink>
    </div>
    <div class="flex py-1 px-3 items-center">
      <Icon name="fluent:dark-theme-20-regular" class="text-2xl" />
      <LayoutMenuDarkModeSwitch class="ml-3" />
    </div>
  </div>
</template>

<style scoped></style>
