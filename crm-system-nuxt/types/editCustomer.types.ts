import type { ICustomer } from "~/types/deals.types";

export interface ICustomerFormState
  extends Pick<ICustomer, "name" | "email" | "avatar-url" | "from-source"> {}

export interface InputFileEvent extends Event {
  target: HTMLInputElement;
}