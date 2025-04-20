export interface NavItem {
  title: string;
  path: string;
  dropdown?: NavItem[];
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface Publication {
  id: number;
  title: string;
  authors: string;
  date: string;
  link: string;
  thumbnail?: string;
}