import { createRouter, createWebHistory } from 'vue-router'

// pages
import HomeView from '../views/HomeView.vue'
import GuideView from '../views/GuideView.vue'
import AppView from '../views/App/AppView.vue'
import AppAdminView from '../views/App/AppAdminView.vue'
import ProjectView from '../views/App/ProjectView.vue'

// company
import CompanyIndexView from '../views/App/Company/IndexView.vue'
import CompanyCreateProjectView from '../views/App/Company/CreateProjectView.vue'
import CompanyDepositView from '../views/App/Company/DepositView.vue'

// backer
import BackerIndexView from '../views/App/Backer/IndexView.vue'
import BackerBackedProjectsView from '../views/App/Backer/BackedProjectsView.vue'
import BackerRefundView from '../views/App/Backer/RefundView.vue'
import BackerClaimView from '../views/App/Backer/ClaimView.vue'

// admin
import AdminIndexView from '../views/App/Admin/IndexView.vue'
import AdminVerifyProjectView from '../views/App/Admin/VerifyProjectView.vue'

import { useAppStore } from '../stores/app'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        selector: to.hash,
      }
    }

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/guide',
      name: 'guide',
      component: GuideView,
    },
    {
      path: '/app',
      children: [
        {
          path: '',
          name: 'app',
          component: AppView,
        },
        {
          path: 'admin',
          name: 'app-admin',
          component: AppAdminView,
        },
        {
          path: ':address/project',
          name: 'app-project',
          component: ProjectView,
        },
        {
          path: 'dashboard/company',
          name: 'app-dashboard-company',
          component: CompanyIndexView,
        },
        {
          path: 'dashboard/company/project/create',
          name: 'app-dashboard-company-project-create',
          component: CompanyCreateProjectView,
        },
        {
          path: 'dashboard/company/project/deposit',
          name: 'app-dashboard-company-project-deposit',
          component: CompanyDepositView,
        },
        {
          path: 'dashboard/backer',
          name: 'app-dashboard-backer',
          component: BackerIndexView,
        },
        {
          path: 'dashboard/backer/projects/backed',
          name: 'app-dashboard-backer-projects-backed',
          component: BackerBackedProjectsView,
        },
        {
          path: 'dashboard/backer/projects/refund',
          name: 'app-dashboard-backer-projects-refund',
          component: BackerRefundView,
        },
        {
          path: 'dashboard/backer/projects/claim',
          name: 'app-dashboard-backer-projects-claim',
          component: BackerClaimView,
        },
        {
          path: 'dashboard/admin',
          name: 'app-dashboard-admin',
          component: AdminIndexView,
        },
        {
          path: 'dashboard/admin/project/verify',
          name: 'app-dashboard-admin-project-verify',
          component: AdminVerifyProjectView,
        },
      ],
    },
    // {
    //   path: '*',
    //   name: 'not-found',
    //   component: HomeView,
    // },
  ],
})

// beforeEach guard
router.beforeEach(async (to, from, next) => {
  let store = useAppStore()

  // check if wallet connect is available in local storage
  // if present. call store.connect()
  let walletconnect = JSON.parse(localStorage.getItem('walletconnect'))

  if (Object.keys(walletconnect || {}).includes('connected')) {
    if (walletconnect.connected) {
      await store.connect()
    }
  }

  if (
    to.name.startsWith('app-dashboard-backer') ||
    to.name.startsWith('app-dashboard-company')
  ) {
    store._wallet.is_connected ? next() : next('/app')
  } else if (to.name.startsWith('app-dashboard-admin')) {
    store._wallet.is_connected ? next() : next('/app/admin')
  } else {
    next()
  }
})

export default router
