export interface IBaseField {
  $createdAt: string
  $id: string
}

export interface ICustomer extends IBaseField {
  name: string
  email: string
  "avatar-url": string
  "from-source"?: string
}

export interface IComment extends IBaseField {
  text: string
}

export enum EnumStatus {
  'todo'= 'todo',
  'to-be-agreed' = 'to-be-agreed',
  'in-progress' = 'in-progress',
  'produced' = 'produced',
  'done' = 'done'
}

export interface IDeal extends IBaseField {
  name: string
  price: number
  customers: ICustomer
  comments: IComment[]
  status: EnumStatus
}
