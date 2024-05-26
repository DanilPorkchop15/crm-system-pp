import { defineStore } from 'pinia'

interface IUseAuthStore {
  email: string
  name: string
  status: boolean
}

const defaultValue: {user: IUseAuthStore} = {
  user: {
    email: '',
    name: '',
    status: false
  }
}

export const useAuthStore = defineStore('auth', () => {
  const authState = ref(defaultValue)

  const isAuth = computed(() => authState.value.user.status);
  const clear = () => (authState.value.user = defaultValue.user);
  const set = (user: IUseAuthStore) => (authState.value.user = user);

  return { authState, isAuth, clear, set }
})
