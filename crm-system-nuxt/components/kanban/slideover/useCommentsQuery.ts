import { useQuery } from "@tanstack/vue-query"
import { DB_ID, COLLECTIONS_DEALS } from "~/app.constants"
import { DB } from "~/lib/appwrite"
import type { IComment } from "~/types/deals.types"

export function useCommentsQuery() {
  const store = useDealSlideStore()
  const cardId = store.card?.id || ""

  return useQuery({
    queryKey: ["deal", cardId],
    queryFn: () => DB.getDocument(DB_ID, COLLECTIONS_DEALS, cardId),

  })
}