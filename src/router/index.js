import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import SchedulePage from '../views/SchedulePage.vue';
import StatsPage from '../views/StatsPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/stats',
    name: 'StatsPage',
    component: StatsPage,
    props: true,
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
  },
  {
    path: '/schedule',
    name: 'SchedulePage',
    component: SchedulePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
