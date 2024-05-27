import { defineStore } from 'pinia'
import type { ICard } from '~/components/kanban/kanban.types'

export const useDealSlideStore = defineStore("dealSlide", () => {
  const isOpen = ref<boolean>(false)
  const card = ref<ICard | null>()

  const set = (data: ICard | null) => {
    card.value = data
    isOpen.value = !!data
  }

  const clear = () => {
    card.value = null
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  return { isOpen, set, clear, toggle, card }
})