export interface Repository {
  name: string;
  visibility: "Public" | "Private";
  language: string;
  size: string;
  updatedAt: string;
}

export interface SidebarLink {
  icon: React.ComponentType;
  label: string;
  href: string;
}
