import { home, profile, experience, contact } from '../path';

const routes = [
  {
    path: '/contact',
    component: contact,
  },
  {
    path: '/experience',
    component: experience,
  },
  {
    path: '/profile',
    component: profile,
  },
  {
    path: '/home',
    component: home,
  },
  {
    path: '/',
    component: home,
  },
];

export default routes;
