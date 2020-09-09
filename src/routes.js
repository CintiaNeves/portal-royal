import Login from './components/Login.vue';
import ListComissao from './components/ListComissao.vue';
import Register from './components/Register.vue';
import ForgotPassword from './components/ForgotPassword.vue';

export const routes = [
    { path: '/', name : 'login', component: Login},
    { path: '/comissao', name : 'comissao',component: ListComissao},
    { path: '/register', name : 'register',component: Register},
    { path: '/forgot', name : 'forgot', component: ForgotPassword}
];