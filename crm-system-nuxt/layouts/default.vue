<script setup lang="ts">
import { account } from "~/lib/appwrite";

const authStore = useAuthStore();
const router = useRouter();
const isLoadingStore = useIsLoadingStore();
const localePath = useLocalePath();

const isMobile = useIsMobile();

onMounted(async () => {
  const darkMode = useDarkMode();
  if (darkMode.setupDarkMode) {
    darkMode.setupDarkMode();
  }
  isLoadingStore.set(true);
  try {
    const user = await account.get();
    if (user) {
      authStore.set(user);
    }
  } catch {
    router.push(localePath("/login"));
  } finally {
    isLoadingStore.set(false);
  }
});
</script>

<template>
  <LayoutNotSupported v-if="isMobile" />
  <div v-else>
    <LayoutLoader v-if="isLoadingStore.isLoading" />
    <section :class="{ grid: authStore.isAuth }" style="height: 100dvh" v-else>
      <LayoutSidebar v-if="authStore.isAuth" />
      <div class="p-10">
        <slot />
      </div>
    </section>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
