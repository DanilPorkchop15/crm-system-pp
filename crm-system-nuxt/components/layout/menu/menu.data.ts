export interface  IMenuItem {
  name: string
  href: string
  icon: string
}

export const MENU_DATA: IMenuItem[] = [
  { name: "Home", href: "/", icon: "tabler:home" },
  { name: "Products", href: "/products", icon: "ep:goods" },
  { name: "Payments", href: "/payments", icon: "ph:contactless-payment" },
  { name: "Orders", href: "/orders", icon: "fluent:receipt-28-regular" },
  { name: "Customers", href: "/customers", icon: "mingcute:group-line" },
  { name: "Feedback", href: "/feedback", icon: "fluent:person-feedback-48-regular" },
  { name: "Settings", href: "/settings", icon: "fluent:settings-24-regular" },
  { name: "Help center", href: "/help", icon: "radix-icons:question-mark" },
]