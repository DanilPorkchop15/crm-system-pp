<script setup lang="ts">
import { account } from "~/lib/appwrite";
const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const logout = async () => {
  isLoadingStore.set(true);
  await account.deleteSession("current");
  authStore.clear();
  await navigateTo("/login");
  isLoadingStore.set(false);
};
</script>

<template>
  <div>
    <Button @click="logout()" variant="destructive">{{ $t("logout-2") }}</Button>
  </div>
</template>

<style></style>
