<script lang="ts" setup>

interface IProps {
  label: string
}

const props = defineProps<IProps>()
</script>

<template>
  <div>
    <p class="text-sm text-muted-foreground mb-1">
      {{ $t(label) }}
    </p>
    <slot />
  </div>
</template>

<style>

</style>