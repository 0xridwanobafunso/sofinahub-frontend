<script setup>
import Breadcrumb from '../../components/Breadcrumb.vue'
import ProjectCard from '../../components/ProjectCard.vue'
import { useAppStore } from '../../stores/app'
import { onBeforeMount } from 'vue'

let store = useAppStore()

async function connect() {
  await store.connect()
}

onBeforeMount(async () => {
  if (store._projects.data.length == 0) await store.getProjectsForGuest()
})
</script>

<template>
  <div class="bg-gray-900">
    <main class="mx-auto max-w-7xl px-4">
      <div class="text-center py-10">
        <h1
          class="text-3xl tracking-tight font-extrabold text-white sm:text-5xl md:text-4xl"
        >
          <span class="block xl:inline">Fundraising on SofinaHub</span>
          <span class="block text-indigo-600 xl:inline">
            takes just a few minutes.</span
          >
        </h1>
        <p
          class="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
        >
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow" v-if="store._wallet.is_connected">
            <RouterLink to="/app/dashboard/company">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-8"
              >
                Company
              </a>
            </RouterLink>
          </div>
          <div
            class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"
            v-if="store._wallet.is_connected"
          >
            <RouterLink to="/app/dashboard/backer">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-3 md:text-lg md:px-8"
              >
                Backer
              </a>
            </RouterLink>
          </div>
          <div class="rounded-md shadow" v-if="!store._wallet.is_connected">
            <button
              type="button"
              @click="connect()"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-8"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- breadcrumb -->
  <Breadcrumb />

  <div class="bg-white -mt-10">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">
        Trending Projects
      </h1>

      <div
        class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-2"
        v-if="store._projects.total > 0"
      >
        <ProjectCard
          v-for="project of store._projects.data"
          :data="project"
          :key="project"
        />
      </div>
      <div class="mt-8" v-else>
        <i class="text-gray-900"
          >Loading or no data connection or no project yet. Thanks</i
        >
        <div
          class="bg-white p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none"
        >
          <div
            class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse"
          ></div>
          <div class="flex flex-col flex-1 gap-5 sm:p-2">
            <div class="flex flex-1 flex-col gap-3">
              <div
                class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl"
              ></div>
              <div
                class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"
              ></div>
              <div
                class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"
              ></div>
              <div
                class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"
              ></div>
              <div
                class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"
              ></div>
            </div>
            <div class="mt-auto flex gap-3">
              <div
                class="bg-gray-200 w-20 h-8 animate-pulse rounded-full"
              ></div>
              <div
                class="bg-gray-200 w-20 h-8 animate-pulse rounded-full"
              ></div>
              <div
                class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
