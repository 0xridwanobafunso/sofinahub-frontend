<script setup>
import NavBar from './components/NavBar.vue'

import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
watchEffect(() => route.name)

const routeToExcludeNavBar = ref([
  'app-dashboard-company',
  'app-dashboard-company-project-create',
  'app-dashboard-company-project-deposit',
  'app-dashboard-backer',
  'app-dashboard-backer-projects-backed',
  'app-dashboard-backer-projects-refund',
  'app-dashboard-backer-projects-claim',
  'app-dashboard-admin',
  'app-dashboard-admin-project-verify',
])
</script>

<template>
  <div class="relative overflow-hidden">
    <NavBar v-if="!routeToExcludeNavBar.includes(route.name)" />
    <RouterView />
  </div>
</template>

<style scoped></style>
