<script lang="ts" setup>
import { account } from "~/lib/appwrite";
import { v5 as uuidv5 } from "uuid";

useSeoMeta({
  title: "Login | CRM system",
  description: "Login page",
});

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const localePath = useLocalePath(); 

const emailRef = ref("");
const passwordRef = ref("");
const nameRef = ref("");

const login = async () => {
  isLoadingStore.set(true);
  await account
    .createEmailPasswordSession(emailRef.value, passwordRef.value)
    .catch(() => {
      isLoadingStore.set(false);
      return;
    });
  await account
    .get()
    .then(async (response) => {
      if (!response) return;
      authStore.set({
        name: response.name,
        email: response.email,
        status: response.status,
      });
      await navigateTo(localePath("/"));
      isLoadingStore.set(false);
    })
    .catch(() => {
      isLoadingStore.set(false);
    });
};

const register = async () => {
  if (!emailRef.value || !passwordRef.value || !nameRef.value) {
    alert("Please fill in all fields");
    return;
  }
  await account.create(
    uuidv5(emailRef.value, uuidv5.DNS),
    emailRef.value,
    passwordRef.value,
    nameRef.value
  );
  await login();
};
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen max-h-screen w-full"
  >
    <div class="rounded bg-sidebar w-1/4 p-5 shadow">
      <h1 class="text-2xl font-bold text-center mb-5">
        {{ $t("login-title") }}
      </h1>
      <form @submit.prevent="login">
        <Input
          :placeholder="$t('email')"
          type="email"
          class="mb-3"
          v-model="emailRef"
          autocomplete="email"
        />
        <Input
          required
          placeholder="••••••••"
          type="password"
          class="mb-3"
          v-model="passwordRef"
          autocomplete="current-password"
        />
        <Input
          required
          :placeholder="$t('name')"
          type="text"
          class="mb-3"
          v-model="nameRef"
          autocomplete="first-name"
        />
        <div class="flex items-center gap-5 justify-center">
          <Button variant="outline" type="submit">
            {{ $t("login") }}
          </Button>
          <Button variant="outline" type="button" @click="register">
            {{ $t("register") }}
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
