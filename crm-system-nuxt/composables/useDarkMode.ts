import { useStorage } from '@vueuse/core'


export const useDarkMode = () => {
  if (typeof localStorage !== "undefined"){
    const darkMode = ref(localStorage.getItem("darkMode") === "true");

    const setupDarkMode = () => {
      darkMode.value = localStorage.getItem("darkMode") === "true"
      document.documentElement.classList.toggle('dark', darkMode.value)
    }
    watch(darkMode, (value) => {
      localStorage.setItem('darkMode', value.toString())
      document.documentElement.classList.toggle('dark', value)
    })

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value
    }

    return {
      darkMode,
      toggleDarkMode,
      setupDarkMode
    }
  } else {
    return {
      darkMode: null,
      toggleDarkMode: null, 
      setupDarkMode: null 
    }
  }
}
