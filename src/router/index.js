import { mdiRouterNetwork } from '@mdi/js'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
  },
  {
    path: '/info/schoolgrade',
    name: 'schoolgrade',
    component: () => import('@/views/info/schoolgrade'),
  },
  {
    path: '/info/pupil',
    name: 'pupil',
    component: () => import('@/views/info/pupil'),
  },
  {
    path: '/info/pupil/edit',
    name: 'editpupil',
    component: () => import('@/views/info/pupil/edit.vue'),
  },
  {
    path: '/info/subject',
    name: 'subject',
    component: () => import('@/views/info/subject'),
  },
  {
    path: '/documents/schooladmision',
    name: 'schooladmision',
    component: () => import('@/views/documents/schooladmision'),
  },
  {
    path: '/documents/studentgrademovement',
    name: 'studentgrademovement',
    component: () => import('@/views/documents/studentgrademovement'),
  },
  {
    path: '/documents/leavingstudentrestudyclass',
    name: 'leavingstudentrestudyclass',
    component: () => import('@/views/documents/leavingstudentrestudyclass'),
  },
  {
    path: '/documents/studentschoolmovement',
    name: 'studentschoolmovement',
    component: () => import('@/views/documents/studentschoolmovement'),
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('@/views/typography/Typography.vue'),
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Icons.vue'),
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/cards/Card.vue'),
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    component: () => import('@/views/simple-table/SimpleTable.vue'),
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
  },
  {
    path: '/pages/account-settings',
    name: 'pages-account-settings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((routeTo, routeFrom, next) => {
  if (routeTo.path != '/pages/login') {
    if (localStorage.getItem('authenticated')) {
      next()
    } else {
      next('/pages/login')
    }
  } else {
    next()
  }
})

export default router
