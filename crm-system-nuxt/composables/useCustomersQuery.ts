import { useQuery } from "@tanstack/vue-query";
import { COLLECTIONS_CUSTOMERS, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import type { ICustomer } from "~/types/deals.types";

export function useCustomersQuery() {
  return useQuery({
    queryKey: ["customers"],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTIONS_CUSTOMERS),
  });
}
