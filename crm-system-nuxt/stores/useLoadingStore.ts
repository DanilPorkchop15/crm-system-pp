import { defineStore } from "pinia";

export const useIsLoadingStore = defineStore("loading", () => {
  const isLoading = ref<boolean>(false);


  const set = (data: boolean) => {
    isLoading.value = data;
  };

  return { isLoading, set };
});
