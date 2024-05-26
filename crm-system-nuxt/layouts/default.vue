<script setup lang="ts">
import { account } from '~/lib/appwrite';

const authStore = useAuthStore()
const router = useRouter()
const isLoadingStore = useIsLoadingStore()

onMounted(async () => {
  try {
    const user = await account.get()
    if (user) {
      authStore.set(user)
    }
  } catch {
    router.push('/login')
  } finally {
    isLoadingStore.set(false)
  }
})

</script>

<template>
<LayoutLoader v-if="isLoadingStore.isLoading"/>
<section :class="{grid: authStore.isAuth}" style="height: 100dvh" v-else>
  <LayoutSidebar v-if="authStore.isAuth"/>
  <div>
    <slot/>
  </div>
</section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;

}
</style>