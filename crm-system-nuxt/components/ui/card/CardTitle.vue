<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h3
    :class="
      cn('font-semibold leading-none tracking-tight lg:text-xl md:text-lg', props.class)
    "
  >
    <slot />
  </h3>
</template>
