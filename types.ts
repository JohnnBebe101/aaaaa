
export enum PageType {
  HOME = 'HOME',
  SUITES = 'SUITES',
  DINING = 'DINING',
  SERVICES = 'SERVICES',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  INVESTMENT = 'INVESTMENT',
  PRIVACY = 'PRIVACY',
  TERMS = 'TERMS',
  COOKIES = 'COOKIES'
}

export interface NavItem {
  label: string;
  id: PageType;
}

export interface RoomType {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  amenities: string[];
}

export type ThemeVariant = 'forest' | 'cactus' | 'sandstone';
