import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import Detail from '../pages/detail/loadable'
/* eslint-disable */
export default [
    { path: '/', name: 'home', component: Home, auth: false },
    { path: '/login', name: 'login', component: Login, auth: false },
    { path: '/register', name: 'register', component: Register, auth: false },
    { path: '/detail', name: 'detail', component: Detail, auth: true }
]
