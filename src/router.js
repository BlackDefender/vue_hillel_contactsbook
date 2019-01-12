import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import ContactsList from './views/ContactsList'
import Register from '@/views/Register';
import Login from '@/views/Login';
import ContactEditor from '@/views/ContactEditor'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'ContactsList',
          component: ContactsList,
          meta:{
              title: 'Contacts'
          }
      },
      {
          path: '/users/register/',
          name: 'Register',
          component: Register,
          meta:{
              title: 'Register'
          }
      },
      {
          path: '/users/login/',
          name: 'Login',
          component: Login,
          meta:{
              title: 'Login'
          }
      },
      {
          path: '/contacts/add/',
          name: 'AddContact',
          component: ContactEditor,
          meta:{
              title: 'Add New Contact'
          }
      },
      {
          path: '/contacts/edit/',
          name: 'EditContact',
          component: ContactEditor,
          meta:{
              title: 'Edit Contact'
          }
      }
    /*{
      path: '/',
      name: 'home',
      component: Home
    },
    */
  ]
})
