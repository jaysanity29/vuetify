import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import App from './views/App';
import About from './components/About';
import Landing from './views/Landing';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'landing',
            component: Landing
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: App,        }
    ]
})

export default router;