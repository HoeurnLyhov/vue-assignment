import { createRouter, createWebHistory } from "vue-router";
import SignIn from '@/components/auth/SignIn.vue';
import SignUp from '@/components/auth/SignUp.vue';
import Dashboard from '@/components/pages/Dashboard.vue';

const routes = [
    {
        path: '/',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: Dashboard,
    },
    {
        path: '/:path(.*)*',
        redirect: { name: 'SignIn' }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
