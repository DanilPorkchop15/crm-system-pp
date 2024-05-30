export const useIsMobile = () : Ref<boolean> => {
  return ref(
    typeof window !== 'undefined' && (window.innerWidth < 1200  || window.innerHeight < 1000)
  )
}
