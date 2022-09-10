<script setup>
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import ProjectCard from '../../../components/ProjectCard.vue'

const route = useRoute()
watchEffect(() => route.name)

let visibility = ref(false)
</script>

<template>
  <div class="min-h-full">
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div
      class="fixed inset-0 flex z-40 lg:hidden"
      role="dialog"
      aria-modal="true"
      v-if="visibility"
    >
      <!--
              Off-canvas menu overlay, show/hide based on off-canvas menu state.
        
              Entering: "transition-opacity ease-linear duration-300"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "transition-opacity ease-linear duration-300"
                From: "opacity-100"
                To: "opacity-0"
            -->
      <div
        class="fixed inset-0 bg-gray-600 bg-opacity-75"
        aria-hidden="true"
      ></div>

      <!--
              Off-canvas menu, show/hide based on off-canvas menu state.
        
              Entering: "transition ease-in-out duration-300 transform"
                From: "-translate-x-full"
                To: "translate-x-0"
              Leaving: "transition ease-in-out duration-300 transform"
                From: "translate-x-0"
                To: "-translate-x-full"
            -->
      <div
        class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"
      >
        <!--
                Close button, show/hide based on off-canvas menu state.
        
                Entering: "ease-in-out duration-300"
                  From: "opacity-0"
                  To: "opacity-100"
                Leaving: "ease-in-out duration-300"
                  From: "opacity-100"
                  To: "opacity-0"
              -->
        <div class="absolute top-0 right-0 -mr-12 pt-2">
          <button
            type="button"
            class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            @click="visibility = false"
          >
            <span class="sr-only">Close sidebar</span>
            <!-- Heroicon name: outline/x -->
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="flex-shrink-0 flex items-center px-4">
          <RouterLink to="/">
            <span class="text-gray-700 font-bold text-xl md:text-xl"
              >SofinaHub v1.0.0</span
            >
          </RouterLink>
        </div>
        <div class="mt-5 flex-1 h-0 overflow-y-auto">
          <nav class="px-2">
            <div class="space-y-1">
              <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:text-gray-900 hover:bg-gray-50" -->
              <RouterLink to="/app/dashboard/admin">
                <a
                  href="#"
                  class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"
                  aria-current="page"
                >
                  <!--
                        Heroicon name: outline/home
        
                        Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
                      -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="text-gray-500 mr-3 flex-shrink-0 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  Home
                </a>
              </RouterLink>

              <RouterLink to="/app/dashboard/admin/project/verify">
                <a
                  href="#"
                  class="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"
                >
                  <!-- Heroicon name: outline/view-list -->

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>

                  Verify Project
                </a>
              </RouterLink>
            </div>
            <div class="mt-8">
              <h3
                class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                id="mobile-teams-headline"
              >
                Network
              </h3>
              <div
                class="mt-1 space-y-1"
                role="group"
                aria-labelledby="mobile-teams-headline"
              >
                <a
                  href="#"
                  class="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span
                    class="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full"
                    aria-hidden="true"
                  ></span>
                  <span class="truncate"> Ethereum </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100"
    >
      <div class="flex items-center flex-shrink-0 px-6">
        <RouterLink to="/">
          <span class="text-gray-700 font-bold text-xl md:text-xl"
            >SofinaHub v1.0.0</span
          >
        </RouterLink>
      </div>
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
        <!-- User account dropdown -->
        <div class="px-3 relative inline-block text-left">
          <div>
            <button
              type="button"
              class="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500"
              id="options-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="flex w-full justify-between items-center">
                <span
                  class="flex min-w-0 items-center justify-between space-x-3"
                >
                  <img
                    class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA8NJREFUeF7t3bFtG0EURdEh3ABDAyrCgBS7D6WKnRpwYIdKBCiUY6XqQaFKcA0qw6DhFngIfA1wmX8u983b+9/sLGcPrzfH04LPj/dvUO2lD1e//UvgG3Y//0MGgNFfa2WACGAOwmolYATAAYgAEQAtZOURoBBIDqoFkHyFwO1TMI7/9ucfAdABhcBCIFrIyguBhUByUC2A5CsEbh+CcPy3P/8IgA4oBBYC0UJWXggsBJKDuAXQ0S9Q/P3u7QLfcv5XPD5/Pb/4A1RmAByEDIACankEMAUjgOm3IgAKqOURwBSMAKZfBED9uDwCmIQRwPSLAKgfl0cAkzACmH4RAPXj8ghgEkYA0y8CoH5cHgFMwghg+kUA1I/LI4BJGAFMv/0JcP35J+0P8PfXLUmoiym7P5KlBPt0/0L6HzIA6bf0kawMgE/URIAIYJcwVkeAMgBZqBZQCyADFQI3/19CBIgAEUAUaBbQLED8w7XNApoFkInKAGUAMlCzgGYBZKDWAki+1VpAq4G2W3kZoAxADOIM8OXpDz0PML2erwQi9ddaOgDT08hDBjALZIBhhEcA2yElAhgAagFlALsXXwbAGzm1gFoAQtzKC4GFQHJQLaAWQAbSO4nNAkj+bgTxX6P0iZ5CYCEQr2ErLwQWAslBhcBCIBmoEIjPJJL6rQauQiD+PXu8BUy/Pl4F0Ct4ul5nQaof7xAyfQLTA6jHn9YvA+gIYn0GGH7nD44fl2eADEAmKgOQfPPFESACkAsjAMk3XxwBIgC5MAKQfPPFESACkAsjAMk3XxwBIgC5MAKQfPPFESACkAsjAMk3XzxOAN0uXh2oAswPof2Caf14j6DpEzD556un9csAwx7IAPhU8PD48eEzQAYgE2mGqgWQ/F4cASIAuSgCkHzzxREgApALIwDJN18cASIAuTACkHzzxREgApALIwDJN18cASIAuTACkHzzxdsTQHfpmt5rWC2gA6hbvOgmVbwWkAF6ZQxdRBHA9vmLAMMhshaAu3RFgAhALUSnQXTw1XsDVyGwEEgXUS2gFkAGqgXYO4u6D0D2KwOUAfC/jd0JHN5uHgHQ28ObBTQLoIuoWUCzADJQs4BmAWQgLd5+LWD39wXsTgD9/WrA7beLVwGnCaC/PwNsvhycAfBGigoYAW6OJxFBB0ARpseXc/9fO/379fhlAHSADoAaWI+fATJALUA8oFdgBCgEiv84g9QCSP5C4JpGmB4fx5+vQP392oIiADpAByADlAHIgmrACEDylwHKAMMEiwAtBhHD/gHxZY4NZBDgEgAAAABJRU5ErkJggg=="
                    alt=""
                  />
                  <span class="flex-1 flex flex-col min-w-0">
                    <span class="text-gray-900 text-sm font-medium truncate"
                      >Ethereum Network</span
                    >
                    <span class="text-gray-500 text-sm truncate"
                      >0x0068Dfb05741A0F61aF947332fa6c7fc7c4928fe</span
                    >
                  </span>
                </span>
                <!-- Heroicon name: solid/selector -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <!-- Navigation -->
        <nav class="px-3 mt-6">
          <div class="space-y-1">
            <!-- Current: "bg-gray-200 text-gray-900", Default: "text-gray-700 hover:text-gray-900 hover:bg-gray-50" -->

            <RouterLink to="/app/dashboard/admin">
              <a
                href="#"
                class="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                aria-current="page"
              >
                <!--
                      Heroicon name: outline/home
        
                      Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
                    -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="text-gray-500 mr-3 flex-shrink-0 h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                Home
              </a>
            </RouterLink>

            <RouterLink to="/app/dashboard/admin/project/verify">
              <a
                href="#"
                class="text-gray-700 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <!-- Heroicon name: outline/view-list -->

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>

                Verify Project
              </a>
            </RouterLink>
          </div>
          <div class="mt-8">
            <!-- Secondary navigation -->
            <h3
              class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              id="desktop-teams-headline"
            >
              Network
            </h3>
            <div
              class="mt-1 space-y-1"
              role="group"
              aria-labelledby="desktop-teams-headline"
            >
              <a
                href="#"
                class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
              >
                <span
                  class="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full"
                  aria-hidden="true"
                ></span>
                <span class="truncate"> Ethereum </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Main column -->
    <div class="lg:pl-64 flex flex-col">
      <!-- Search header -->
      <div
        class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden"
      >
        <!-- Sidebar toggle, controls the 'sidebarOpen' sidebar state. -->
        <button
          type="button"
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
          @click="visibility = true"
        >
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: outline/menu-alt-1 -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <div class="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
          <div class="flex items-center">
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  type="button"
                  class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <!-- <img
                            class="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          /> -->
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main class="flex-1">
        <!-- Page title & actions -->
        <div
          class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        >
          <div class="flex-1 min-w-0"></div>
          <div class="mt-4 flex sm:mt-0 sm:ml-4">
            <button
              type="button"
              class="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0"
            >
              Disconnect
            </button>
            <RouterLink
              to="/app/dashboard/admin/project/verify"
              class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:order-1 sm:ml-3"
            >
              Verify
            </RouterLink>
          </div>
        </div>
        <!-- My projects -->
        <div class="px-4 mt-6 sm:px-6 lg:px-4">
          <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
            All Project
          </h2>
          <div class="bg-white">
            <div class="max-w-2xl mx-auto pb-5 lg:max-w-7xl">
              <div
                class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-2 xl:grid-cols-3"
              >
                <ProjectCard v-for="project of 4" :key="project" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style></style>
