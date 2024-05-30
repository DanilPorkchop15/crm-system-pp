<script setup lang="ts">
import { account } from "~/lib/appwrite";

const authStore = useAuthStore();
const router = useRouter();
const isLoadingStore = useIsLoadingStore();

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
    router.push("/login");
  } finally {
    isLoadingStore.set(false);
  }
});
</script>

<template>
  <div
    class="mobile-not-supported w-screen h-screen flex flex-col pb-auto"
    v-if="isMobile"
  >
  <div class="text-center">
    <Icon name="carbon:warning-alt" class="text-5xl text-destructive mx-auto" />
    <p class="text-center text-xl font-bold">
      Sorry, mobile is not supported yet
    </p>
  </div>
  </div>
  <div class="" v-else>
    <LayoutLoader v-if="isLoadingStore.isLoading" />
    <section :class="{ grid: authStore.isAuth }" style="height: 100dvh" v-else>
      <LayoutSidebar v-if="authStore.isAuth" />
      <div>
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

function useIsMobile() { throw new Error("Function not implemented."); }
