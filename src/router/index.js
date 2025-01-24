import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import PortfolioPage from '@/views/PortfolioComponent.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: PortfolioPage,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
