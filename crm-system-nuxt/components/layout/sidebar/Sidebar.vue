<script setup lang="ts">
import { account } from '~/lib/appwrite';

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();

const logout = async () => {
  isLoadingStore.set(true);
  await account.deleteSession('current');
  authStore.clear();
  await navigateTo('/login');
  isLoadingStore.set(false);
}

</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative">
    <NuxtLink to="/" class="block mb-10">
      <NuxtImg src="/logo.svg" alt="logo" width="100px" class="mx-auto"/>
    </NuxtLink>
      <Button class="absolute top-2 right-3 transition-colors text-primary hover:text-background rounded-full bg-transparent text-md"  size="icon" @click="logout">
        <Icon name="line-md:logout" />
      </Button>
      <LayoutMenu/>
  </aside>
</template>

<style scoped>

</style>