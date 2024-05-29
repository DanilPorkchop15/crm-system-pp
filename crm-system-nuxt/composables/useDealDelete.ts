import { useMutation, useQueryClient } from "@tanstack/vue-query"
import { DB_ID, COLLECTIONS_DEALS } from "~/app.constants"
import { DB } from "~/lib/appwrite"

export function useDealDelete() {
  const store = useDealSlideStore() || {}
  const queryClient = useQueryClient()


  const { mutate, isPending } = useMutation({
    mutationKey: ["delete deal"],
    mutationFn: (id: string) =>
      DB.deleteDocument(DB_ID, COLLECTIONS_DEALS, id || ""),
    onSuccess: () => {
      store.set(null);
      queryClient.invalidateQueries({ queryKey: ["deals"] , exact: true, refetchType: 'all' })
    },
  });

  const deleteDeal = (id: string) => {
    mutate(id)
  }

  return { deleteDeal, isPendingDelete: isPending }
}