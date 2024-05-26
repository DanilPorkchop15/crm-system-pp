import { useQuery } from "@tanstack/vue-query";
import { COLLECTIONS_DEALS, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import { KANBAN_DATA } from "./kanban.data";
import type { IDeal } from "~/types/deals.types";

export function useKanbanQuery() {
  return useQuery({
    queryKey: ["deals"],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTIONS_DEALS),
    select: (data) => {
      const newBoard = [...KANBAN_DATA]
      const deals = data.documents as unknown as IDeal[]
      
      for (const deal of deals) {
        const column = newBoard.find(col => col.id === deal.status)
        column?.items.push({
          id: deal.$id,
          name: deal.name,
          price: deal.price,
          $createdAt: deal.$createdAt,
          companyName: deal.customer.name,
          status: deal.status
        })
      }
      return newBoard
    }
  })
}