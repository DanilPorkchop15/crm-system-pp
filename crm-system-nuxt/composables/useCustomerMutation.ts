import type { ICustomerFormState } from '@/types/editCustomer.types';
import { useMutation } from "@tanstack/vue-query";
import { DB_ID, COLLECTIONS_CUSTOMERS } from "~/app.constants";
import { DB } from "~/lib/appwrite";

export function useCustomerMutation(customer: ICustomerFormState, id: string) {
  return useMutation({
    mutationFn: (customer: ICustomerFormState) => {
      return DB.updateDocument(DB_ID, COLLECTIONS_CUSTOMERS, id, customer);
    },
  });
}