import Main from '@/components/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/line-state',
    name: 'line-state',
    meta: {
      title: 'line state',
      icon: 'ios-albums-outline'
    },
    component: () => import('@/view/plcdata-show/linestate/index.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/plcdata-show/overview/index.vue')
      }
    ]
  },
  {
    path: '/machine',
    name: 'machine',
    meta: {
      icon: 'ios-paper-outline',
      title: '设备数据',
      access: ['role', 'auth', 'employee']
    },
    component: Main,
    children: [
      {
        path: '/data',
        name: 'data',
        meta: {
          icon: 'ios-paper',
          title: '数据',
          access: ['role', 'auth', 'employee']
        },
        component: resolve => require(['@/view/machine/data.vue'], resolve)
      },
      {
        path: '/query',
        name: 'query',
        meta: {
          icon: 'ios-search',
          title: '查询',
          access: ['role', 'auth', 'employee']
        },
        component: resolve => require(['@/view/machine/query.vue'], resolve)
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      icon: 'md-settings',
      title: '系统管理',
      access: ['role', 'auth', 'employee']
    },
    component: Main,
    children: [
      {
        path: '/auth',
        name: 'auth',
        meta: {
          icon: 'ios-paper',
          title: '权限管理',
          access: ['auth']
        },
        component: resolve => require(['@/view/system/auth.vue'], resolve)
      },
      {
        path: '/role',
        name: 'role',
        meta: {
          icon: 'md-document',
          title: '角色管理',
          access: ['role']
        },
        component: resolve => require(['@/view/system/role.vue'], resolve)
      },
      {
        path: '/employee',
        name: 'employee',
        meta: {
          icon: 'ios-people',
          title: '员工管理',
          access: ['employee']
        },
        component: resolve => require(['@/view/system/employee.vue'], resolve)
      }
    ]
  },
  {
    path: '/updatepwd',
    name: 'updatepwd',
    meta: {
      hideInMenu: true,
      hideInBread: true
    },
    children: [
      {
        path: '/updatepwd',
        name: 'updatepwd',
        meta: {
          icon: 'ios-unlock',
          title: '修改密码'
        },
        component: resolve => require(['@/view/updatepwd/updatepwd.vue'], resolve)
      }
    ]
  },
  /* {

    path: '/overview',
    name: 'overview',
    component: Main,
    children: [{
      path: '/overview',
      name: 'overview',
      meta: {
        title: '设备总览图',
        icon: 'md-home'
      },
      component: () => import('@/view/plcdata-show/overview/index.vue')
    }]

  },
*/
  {
    path: '/inferiorproduct',
    name: 'inferiorproduct',
    meta: {
      title: '设备不良品统计',
      icon: 'ios-construct'
    },
    component: () => import('@/view/plcdata-show/inferiorproduct/index.vue')
  },
  {
    path: '/alarming',
    name: 'alarming',
    meta: {
      title: '设备报警统计',
      icon: 'md-bonfire'
    },
    component: () => import('@/view/plcdata-show/alarming/index.vue')
  },
  {
    path: '/timesum',
    name: 'timesum',
    meta: {
      title: '设备时间统计',
      icon: 'md-time'
    },
    component: () => import('@/view/plcdata-show/timesum/index.vue')
  },
  {
    path: '/manufacture',
    name: 'manufacture',
    meta: {
      title: '设备生产统计',
      icon: 'ios-build-outline'
    },
    component: () => import('@/view/plcdata-show/manufacture/index.vue')
  },
  /*
  {
    path: '/error_store',
    name: 'error_store',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'error_store_page',
        name: 'error_store_page',
        meta: {
          icon: 'ios-bug',
          title: '错误收集'
        },
        component: () => import('@/view/error-store/error-store.vue')
      }
    ]
  },
  {
    path: '/error_logger',
    name: 'error_logger',
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'error_logger_page',
        name: 'error_logger_page',
        meta: {
          icon: 'ios-bug',
          title: '错误收集'
        },
        component: () => import('@/view/single-page/error-logger.vue')
      }
    ]
  },

  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'md-menu',
      title: '多级菜单'
    },
    component: Main,
    children: [

      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: true,
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: 'level_2_2_1',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: 'level_2_2_2',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-funnel',
          title: '二级-3'
        },
        component: () => import('@/view/multilevel/level-2-3.vue')
      }
    ]
  },
  */
  {
    path: '/refresh',
    name: 'refresh',
    meta: {
      hideInMenu: true,
      hideInBread: true
    },
    // component: Main,
    component: resolve => require(['@/view/refresh/refresh.vue'], resolve)
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
