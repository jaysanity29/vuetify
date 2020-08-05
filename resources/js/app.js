import './bootstrap';
import Vue from 'vue';
import vuetify from './vuetify.js';

import Routes from './routes.js';
import App from './views/App';
import Landing from './views/Landing';
Vue.use(vuetify);

const app = new Vue({
    el: '#app',
    vuetify,
    router: Routes,
    render: h=> h(App)
});

export default app;