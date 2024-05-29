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
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
  const response = await account.get()
  if (response) {
    authStore.set({
      name: response.name,
      email: response.email,
      status: response.status
    })
  }
  emailRef.value = ''
  passwordRef.value = ''
  nameRef.value = ''
  await navigateTo('/')
  isLoadingStore.set(false)
}

const register = async () => {
  await account.create(uuidv5(emailRef.value, uuidv5.DNS),
    emailRef.value,
    passwordRef.value,
    nameRef.value
  )
  await login().catch(() => {navigateTo('/login')})
}

</script>

<template>
  <div class=" flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5 shadow">
      <h1 class="text-2xl font-bold text-center mb-5">
        Login
      </h1>
      <form>
        <Input placeholder="Email" type="email" class="mb-3" v-model="emailRef" autocomplete="email"/>
        <Input placeholder="Password" type="password" class="mb-3" v-model="passwordRef" autocomplete="current-password"/>
        <Input placeholder="Name" type="text" class="mb-3" v-model="nameRef" autocomplete="first-name"/>
        <div class="flex items-center gap-5 justify-center">
          <Button variant="outline" type="button" @click="login">
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