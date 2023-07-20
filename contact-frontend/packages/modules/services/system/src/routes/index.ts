import { RouteRecordRaw } from 'vue-router'
import { ROUTE_NAME } from '@cskefu/models'

import Layout from '../layouts/MenusLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/system',
    name: 'system',
    component: Layout,
    redirect: '/system/index',
    children: [
      {
        path: 'index',
        name: ROUTE_NAME.SYSTEM_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '系统信息',
          isAuth: true,
          icon: 'el-icon-setting',
        },
      },
      {
        path: 'social',
        name: ROUTE_NAME.SYSTEM_SOCIAL_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '第三方登录',
          isAuth: true,
          icon: 'el-icon-setting',
        },
      },
      {
        path: 'oss',
        name: ROUTE_NAME.SYSTEM_OSS_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '对象存储设置',
          isAuth: true,
          icon: 'el-icon-setting',
        },
      },
      {
        path: 'cdn',
        name: ROUTE_NAME.SYSTEM_CDN_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: 'CDN 设置',
          isAuth: true,
          icon: 'el-icon-setting',
        },
      },
      {
        path: 'sms',
        name: ROUTE_NAME.SYSTEM_SMS_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '短信平台设置',
          isAuth: true,
          icon: 'el-icon-setting',
          comingSoon: true,
          disabled: true,
        },
      },
      {
        path: 'call',
        name: ROUTE_NAME.SYSTEM_CALL_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '呼叫平台设置',
          isAuth: true,
          icon: 'el-icon-setting',
          comingSoon: true,
          disabled: true,
        },
      },
      {
        path: 'gpt',
        name: ROUTE_NAME.SYSTEM_GPT_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: 'GPT 设置',
          isAuth: true,
          icon: 'el-icon-setting',
          comingSoon: true,
          disabled: true,
        },
      },
      {
        path: 'source',
        name: ROUTE_NAME.SYSTEM_SOURCE_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '元数据',
          isAuth: true,
          icon: 'el-icon-setting',
        },
      },
      {
        path: 'notification',
        name: ROUTE_NAME.SYSTEM_NOTIFICATION_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '通知设置',
          isAuth: true,
          icon: 'el-icon-setting',
        },
      },
      {
        path: 'notification',
        name: ROUTE_NAME.SYSTEM_LOG_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '日志查看',
          isAuth: true,
          icon: 'el-icon-setting',
        },
      },
    ],
  },
]

export default routes