
export enum PageType {
  HOME = 'HOME',
  SUITES = 'SUITES',
  DINING = 'DINING',
  INVESTMENT = 'INVESTMENT'
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
