import { createWebHistory, createRouter } from 'vue-router';
import Login from '@/components/Login';
import Doctors from '@/pages/Doctors';

import Signup from '@/components/Signup';
import Home from '@/pages/Home';


const routes = [
	{
        path: '/',
        name: 'Login',
        component: Login 
    },
    {
        path: '/doctors',
        name: 'Doctors',
        component: Doctors
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;