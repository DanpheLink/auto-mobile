import { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
    dropdown: [
      { title: 'Our Mission', path: '/about#mission' },
      { title: 'Our Team', path: '/about#team' },
      { title: 'History', path: '/about#history' },
    ],
  },
  {
    title: 'Programs',
    path: '/programs',
    dropdown: [
      { title: 'Research', path: '/programs/research' },
      { title: 'Education', path: '/programs/education' },
      { title: 'Community', path: '/programs/community' },
    ],
  },
  {
    title: 'News & Events',
    path: '/news',
  },
  {
    title: 'Gallery',
    path: '/gallery',
  },
  {
    title: 'Publications',
    path: '/publications',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];