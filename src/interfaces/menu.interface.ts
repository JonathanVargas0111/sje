export interface MenuItem {
    label: string;
    path: string;
    subMenu?: MenuItem[]; // Submenú opcional
  }