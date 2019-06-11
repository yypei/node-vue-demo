import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import axios from '@/config'
import 'element-ui/lib/theme-chalk/index.css'
import '@/static/common/css/CommonStyle.css'
// import HelloWorld from '@/components/HelloWorld'
import Register from '@/pages/register'
import chat from '@/pages/chat'
import Login from '@/pages/Login'
import PermissionList from '@/pages/PermissionList'
import VueSocketIO from 'vue-socket.io';


/*Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://127.0.0.1:3000',
    // vuex: {
    //     store,
    //     actionPrefix: 'SOCKET_',
    //     mutationPrefix: 'SOCKET_'
    // },
    options: { path: "/chat" } //Optional options
}));*/
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(Router);
Vue.prototype.axios=axios;

export default new Router({
  routes: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
       {
          path: '/permissionlist',
          name: 'PermissionList',
          component: PermissionList
       },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/chat',
            name: 'chat',
            component: chat
        }
  ]
})
