import { createRouter, createWebHistory } from 'vue-router';
import Auth from '../views/AuthView.vue';
const routes = [
 {
 path: '/',
 name: 'Auth',
 component: Auth,
 },
];
const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes,
});
export default router;
