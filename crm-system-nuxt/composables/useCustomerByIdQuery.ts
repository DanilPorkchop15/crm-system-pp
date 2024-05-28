import { useQuery } from "@tanstack/vue-query";
import { COLLECTIONS_CUSTOMERS, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import type { ICustomer } from "~/types/deals.types";

export function useCustomerByIdQuery(id: string) {
  return useQuery({
    queryKey: ["customer", id],
    queryFn: () => DB.getDocument(DB_ID, COLLECTIONS_CUSTOMERS, id),
    
  });
}