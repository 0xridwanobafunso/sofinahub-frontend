import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideView from '../views/GuideView.vue'
import AppView from '../views/App/AppView.vue'
import ProjectView from '../views/App/ProjectView.vue'
import CompanyIndexView from '../views/App/Company/IndexView.vue'
import CompanyCreateProjectView from '../views/App/Company/CreateProjectView.vue'
import BackerIndexView from '../views/App/Backer/IndexView.vue'
import BackerBackedProjectsView from '../views/App/Backer/BackedProjectsView.vue'
import AdminIndexView from '../views/App/Admin/IndexView.vue'
import AdminVerifyProjectView from '../views/App/Admin/VerifyProjectView.vue'

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

export default router
