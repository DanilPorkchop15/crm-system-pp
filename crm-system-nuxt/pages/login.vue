<script lang="ts" setup>
import { account } from '~/lib/appwrite';
import { v5 as uuidv5 } from 'uuid';


useSeoMeta({
  title: 'Login | CRM system',
  description: 'Login page'
})

const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

const login = async () => {
  isLoadingStore.set(true)
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value).catch(() => {
    isLoadingStore.set(false)
    return
  })
  await account.get().then(async (response) => {
    if (!response) return
    authStore.set({
      name: response.name,
      email: response.email,
      status: response.status
    })
    await navigateTo('/')
    isLoadingStore.set(false)
  }).catch(() => {
    isLoadingStore.set(false)
  })
}

const register = async () => {
  if (!emailRef.value || !passwordRef.value || !nameRef.value) { alert('Please fill in all fields'); return }
  await account.create(uuidv5(emailRef.value, uuidv5.DNS),
    emailRef.value,
    passwordRef.value,
    nameRef.value
  )
  await login()
}

</script>

<template>
  <div class=" flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5 shadow">
      <h1 class="text-2xl font-bold text-center mb-5">
        Login
      </h1>
      <form @submit.prevent="login">
        <Input placeholder="Email" type="email" class="mb-3" v-model="emailRef" autocomplete="email"/>
        <Input required placeholder="••••••••" type="password" class="mb-3" v-model="passwordRef" autocomplete="current-password"/>
        <Input required placeholder="Name" type="text" class="mb-3" v-model="nameRef" autocomplete="first-name"/>
        <div class="flex items-center gap-5 justify-center">
          <Button variant="outline" type="submit">
            Login
          </Button>
          <Button variant="outline" type="button" @click="register">
            Register
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>

</style>