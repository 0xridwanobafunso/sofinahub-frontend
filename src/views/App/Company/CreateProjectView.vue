<script setup>
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'

const route = useRoute()
watchEffect(() => route.name)

let visibility = ref(false)

let confirmVisibility = ref(false)
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
              <RouterLink to="/app/dashboard/company">
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

              <RouterLink to="/app/dashboard/company/project/create">
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

                  Create Project
                </a>
              </RouterLink>

              <RouterLink to="/app/dashboard/company/project/backers">
                <a
                  href="#"
                  class="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"
                >
                  <!-- Heroicon name: outline/clock -->
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
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>

                  My Backers
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
            <RouterLink to="/app/dashboard/company">
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

            <RouterLink to="/app/dashboard/company/project/create">
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

                Create Project
              </a>
            </RouterLink>

            <RouterLink to="/app/dashboard/company/project/backers">
              <a
                href="#"
                class="text-gray-700 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <!-- Heroicon name: outline/clock -->

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
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>

                My Backers
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
          <div class="flex-1 min-w-0">
            <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
              Home
            </h1>
          </div>
          <div class="mt-4 flex sm:mt-0 sm:ml-4">
            <button
              type="button"
              class="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0"
            >
              Disconnect
            </button>
          </div>
        </div>
        <!-- All projects -->
        <div class="px-4 mt-6 sm:px-6 lg:px-8">
          <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Create Project
          </h2>

          <div class="mt-10 sm:mt-8">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Project Details
                  </h3>
                  <p class="mt-1 text-sm text-gray-600">
                    This information will be displayed publicly for the project
                    transparency.
                  </p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="title"
                            class="block text-sm font-medium text-gray-700"
                            >Title</label
                          >
                          <input
                            type="text"
                            placeholder="Duplex Building At Ajah Lagos, Nigeria"
                            autocomplete="title"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6">
                          <label
                            for="street-address"
                            class="block text-sm font-medium text-gray-700"
                            >Description</label
                          >
                          <textarea
                            type="text"
                            name="street-address"
                            id="street-address"
                            autocomplete="street-address"
                            placeholder="Describe your project here"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            rows="4"
                          ></textarea>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="first-name"
                            class="block text-sm font-medium text-gray-700"
                            >Goal (in ETH)</label
                          >
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            placeholder="5.4"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            class="block text-sm font-medium text-gray-700"
                            >Deadline</label
                          >
                          <input
                            type="date"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6">
                          <label
                            for="image-sources"
                            class="block text-sm font-medium text-gray-700"
                            >Image source(s)</label
                          >
                          <textarea
                            type="text"
                            name="image-sources"
                            id="image-sources"
                            autocomplete="street-address"
                            placeholder="Image sources seperated by comma"
                            rows="3"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          ></textarea>
                        </div>

                        <div class="col-span-6">
                          <label
                            for="video-sources"
                            class="block text-sm font-medium text-gray-700"
                            >Video source(s)</label
                          >
                          <textarea
                            type="text"
                            name="video-sources"
                            id="video-sources"
                            autocomplete="video-sources"
                            placeholder="Video sources seperated by comma"
                            rows="3"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          ></textarea>
                        </div>

                        <div class="col-span-6">
                          <label
                            for="document-sources"
                            class="block text-sm font-medium text-gray-700"
                            >Document source(s)</label
                          >
                          <textarea
                            type="text"
                            name="document-sources"
                            id="document-sources"
                            autocomplete="document-sources"
                            placeholder="Document sources seperated by comma"
                            rows="3"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
              <div class="border-t border-gray-200"></div>
            </div>
          </div>

          <div class="mt-5">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Token (ERC-20) Details
                  </h3>
                  <p class="mt-1 text-sm text-gray-600">
                    This information will be displayed publicly for the project
                    transparency.
                  </p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="title"
                            class="block text-sm font-medium text-gray-700"
                            >Token name</label
                          >
                          <input
                            type="text"
                            placeholder="BAT Coin"
                            autocomplete="title"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="title"
                            class="block text-sm font-medium text-gray-700"
                            >Token symbol</label
                          >
                          <input
                            type="text"
                            placeholder="BATC"
                            autocomplete="title"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="title"
                            class="block text-sm font-medium text-gray-700"
                            >Token decimal</label
                          >
                          <input
                            type="number"
                            placeholder="4"
                            autocomplete="title"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="title"
                            class="block text-sm font-medium text-gray-700"
                            >Token total supply</label
                          >
                          <input
                            type="number"
                            placeholder="10000"
                            autocomplete="title"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
              <div class="border-t border-gray-200"></div>
            </div>
          </div>

          <div class="mt-5">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Return on Investment (ROI)
                  </h3>
                  <p class="mt-1 text-sm text-gray-600">
                    This information will be displayed publicly for the project
                    backers.
                  </p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="title"
                            class="block text-sm font-medium text-gray-700"
                            >ROI (in %)</label
                          >
                          <input
                            type="number"
                            placeholder="4"
                            autocomplete="title"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="title"
                            class="block text-sm font-medium text-gray-700"
                            >ROI Duration</label
                          >
                          <input
                            type="date"
                            placeholder="4"
                            autocomplete="title"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 text-right sm:px-6">
                      <button
                        @click.prevent="confirmVisibility = true"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Create Project
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-if="confirmVisibility"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
      <div
        class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
      >
        <div>
          <div
            class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-yellow-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3
              class="text-lg leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              All data up-to date?
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Are you sure the data submitted is up-to date. Note that the
                data submitted is stored on Ethereum blockchain which is
                immutable.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Yes, Create Project
          </button>
          <p
            @click="confirmVisibility = false"
            class="mt-5 text-xs text-gray-500 text-center cursor-pointer"
          >
            Let us check again
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
