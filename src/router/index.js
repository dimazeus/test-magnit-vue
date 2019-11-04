import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    beforeEnter(to, from, next) {
      next('/branchProjects')
    }
  },
  {
    name: 'branchProjects',
    path: '/branchProjects',
    component: () => import(/* webpackChunkName: "BranchProjects" */ '@/views/projects/BranchProjects.vue'),
    meta: {
      title: 'Проекты филиала'
    }
  },
  {
    name: 'projectInfo',
    path: '/projectInfo/:id',
    component: () => import(/* webpackChunkName: "ProjectInfo" */ '@/views/projects/ProjectInfo.vue'),
    meta: {
      title: 'Проекты филиала'
    },
  },
  {
    name: 'workPlan',
    path: '/plan/:id',
    component: () => import(/* webpackChunkName: "WorkPlan" */ '@/views/projects/WorkPlan.vue'),
    meta: {
      title: 'Динамический план'
    }
  },
  {
    name: 'historyReq',
    path: '/history/:id',
    component: () => import(/* webpackChunkName: "HistoryReq" */ '@/views/projects/HistoryReq.vue'),
    meta: {
      title: 'История заявок'
    }
  },

  {
    name: 'myDocuments',
    path: '/myDocuments',
    component: () => import(/* webpackChunkName: "MyDocuments" */ '@/views/documents/MyDocuments.vue'),
    meta: {
      title: 'Мои документы'
    },
  },
  {
    name: 'documentPackage',
    path: '/documentPackage/:id',
    component: () => import(/* webpackChunkName: "DocumentPackage" */ '@/views/documents/DocumentPackage.vue'),
    meta: {
      title: 'Пакет документов'
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
