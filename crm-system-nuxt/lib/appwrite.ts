import { Client, Account, Databases, Storage } from "appwrite";
import { APP_WRITE_ID, APP_WRITE_ENDPOINT } from "@/app.constants"

export const client = new Client();

client
  .setEndpoint(APP_WRITE_ENDPOINT)
  .setProject(APP_WRITE_ID);

export { ID } from "appwrite";
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
