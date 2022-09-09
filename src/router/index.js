import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideView from '../views/GuideView.vue'
import AppView from '../views/App/AppView.vue'
import ProjectView from '../views/App/ProjectView.vue'
import CompanyIndexView from '../views/App/Company/IndexView.vue'
import CompanyCreateProjectView from '../views/App/Company/CreateProjectView.vue'

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
