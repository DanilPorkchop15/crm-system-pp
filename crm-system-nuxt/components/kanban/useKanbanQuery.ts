import { useQuery } from "@tanstack/vue-query";
import { COLLECTIONS_DEALS, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import { KANBAN_DATA } from "./kanban.data";
import type { IDeal } from "~/types/deals.types";
import type { ICard, IColumn } from "./kanban.types";

export function useKanbanQuery() {
  return useQuery({
    queryKey: ["deals"],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTIONS_DEALS),
    select: (data) => {
      const newBoard: IColumn[] = KANBAN_DATA.map(column => ({
        ...column,
        items: []
      }));
      const deals = data.documents as unknown as IDeal[];   
      
      deals.forEach((deal) => {
        const column = newBoard.find(col => col.id === deal.status);
        if( column ) {
          column.items.push({ 
            id: deal.$id,
            name: deal.name,
            price: deal.price,
            $createdAt: deal.$createdAt,
            companyName: deal.customers.name,
            status: deal.status
          } as ICard); 
        }
      })
      
      return newBoard;
    }
  });
}