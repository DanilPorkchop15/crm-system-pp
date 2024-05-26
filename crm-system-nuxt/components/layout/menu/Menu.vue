<script setup lang="ts">
import {MENU_DATA} from "./menu.data";
</script>

<template>
  <NuxtLink v-for="item in MENU_DATA" :key="item.name" :to="item.href" class="flex items-center py-1 px-3 rounded-lg hover:shadow hover:bg-gray-100 transition-all mb-3">
    <Icon :name="item.icon" class="text-2xl"/>
    <span class="ml-3">{{ item.name }}</span>
  </NuxtLink>
</template>

<style scoped>

</style>