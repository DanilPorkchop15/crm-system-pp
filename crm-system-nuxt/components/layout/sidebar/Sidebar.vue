<script setup lang="ts">

</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative">
    <NuxtLink to="/" class="block mb-10">
      <NuxtImg src="/logo.svg" alt="logo" width="100px" class="mx-auto"/>
      <Button class="absolute top-2 right-3 transition-colors hover:text-primary rounded-full" variant="outline" size="icon">
        <Icon name="line-md:logout" />
      </Button>
      <LayoutMenu/>
    </NuxtLink>
  </aside>
</template>

<style scoped>

</style>