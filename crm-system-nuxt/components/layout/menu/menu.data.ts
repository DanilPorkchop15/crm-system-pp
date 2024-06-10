export interface IMenuItem {
  name: string;
  href: string;
  icon: string;
}

export const MENU_DATA: IMenuItem[] = [
  {
    name: "home",
    href: "/",
    icon: "tabler:home",
  },
  {
    name: "customers",
    href: "/customers",
    icon: "mingcute:group-line",
  },
  {
    name: "about",
    href: "/about",
    icon: "fluent:receipt-28-regular",
  },
  {
    name: "help",
    href: "/help",
    icon: "radix-icons:question-mark",
  },
  {
    name: "feedback",
    href: "/feedback",
    icon: "fluent:person-feedback-48-regular",
  },
  {
    name: "settings",
    href: "/settings",
    icon: "fluent:settings-24-regular",
  },
];
