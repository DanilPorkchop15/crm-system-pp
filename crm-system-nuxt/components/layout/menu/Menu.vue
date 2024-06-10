<script setup lang="ts">
import { MENU_DATA } from "./menu.data";

const localePath = useLocalePath();
</script>

<template>
  <div>
    <div>
      <NuxtLink
        v-for="item in MENU_DATA"
        :key="item.name"
        :to="localePath(item.href)"
        class="flex items-center py-2 px-3 rounded-lg hover:shadow transition-all mb-3 hover:bg-primaryCN hover:text-background"
      >
        <Icon :name="item.icon" class="text-2xl" />
        <span class="ml-3">{{ $t(item.name) }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
