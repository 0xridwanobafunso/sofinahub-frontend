<script setup>
import HeaderAlert from './HeaderAlert.vue'

import { ref } from 'vue'

let visibility = ref(false)
</script>

<template>
  <HeaderAlert />
  <header class="relative">
    <div>
      <nav class="bg-gray-900 py-3 md:py-3">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="-ml-2 mr-2 flex items-center md:hidden">
                <!-- Mobile menu button -->
                <button
                  type="button"
                  @click="visibility = !visibility"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <!--
                    Icon when menu is closed.

                    Heroicon name: outline/menu

                    Menu open: "hidden", Menu closed: "block"
                  -->
                  <svg
                    class="block h-6 w-6"
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <!--
                    Icon when menu is open.

                    Heroicon name: outline/x

                    Menu open: "block", Menu closed: "hidden"
                  -->
                  <svg
                    class="hidden h-6 w-6"
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
              <div class="flex-shrink-0 flex items-center">
                <RouterLink to="/">
                  <span class="text-white font-bold text-xl md:text-2xl"
                    >SofinaHub</span
                  >
                </RouterLink>
              </div>
              <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <RouterLink to="/">
                  <a
                    href="#"
                    class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                    >Home</a
                  >
                </RouterLink>

                <RouterLink to="/guide">
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >Guide</a
                  >
                </RouterLink>

                <a
                  href="https://en.wikipedia.org/wiki/Web3"
                  target="_blank"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >What's Web3</a
                >

                <a
                  href="https://github.com/0xridwanobafunso"
                  target="_blank"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >GitHub</a
                >
              </div>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <RouterLink to="/app"
                  ><button
                    type="button"
                    class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    <span>Launch App</span>
                  </button></RouterLink
                >
              </div>
              <div
                class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center"
              >
                <button
                  type="button"
                  class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span class="sr-only">View notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                    />
                  </svg>
                </button>

                <!-- Profile dropdown -->
                <div class="ml-3 relative">
                  <div>
                    <button
                      type="button"
                      class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-8 w-8 rounded-full"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA8NJREFUeF7t3bFtG0EURdEh3ABDAyrCgBS7D6WKnRpwYIdKBCiUY6XqQaFKcA0qw6DhFngIfA1wmX8u983b+9/sLGcPrzfH04LPj/dvUO2lD1e//UvgG3Y//0MGgNFfa2WACGAOwmolYATAAYgAEQAtZOURoBBIDqoFkHyFwO1TMI7/9ucfAdABhcBCIFrIyguBhUByUC2A5CsEbh+CcPy3P/8IgA4oBBYC0UJWXggsBJKDuAXQ0S9Q/P3u7QLfcv5XPD5/Pb/4A1RmAByEDIACankEMAUjgOm3IgAKqOURwBSMAKZfBED9uDwCmIQRwPSLAKgfl0cAkzACmH4RAPXj8ghgEkYA0y8CoH5cHgFMwghg+kUA1I/LI4BJGAFMv/0JcP35J+0P8PfXLUmoiym7P5KlBPt0/0L6HzIA6bf0kawMgE/URIAIYJcwVkeAMgBZqBZQCyADFQI3/19CBIgAEUAUaBbQLED8w7XNApoFkInKAGUAMlCzgGYBZKDWAki+1VpAq4G2W3kZoAxADOIM8OXpDz0PML2erwQi9ddaOgDT08hDBjALZIBhhEcA2yElAhgAagFlALsXXwbAGzm1gFoAQtzKC4GFQHJQLaAWQAbSO4nNAkj+bgTxX6P0iZ5CYCEQr2ErLwQWAslBhcBCIBmoEIjPJJL6rQauQiD+PXu8BUy/Pl4F0Ct4ul5nQaof7xAyfQLTA6jHn9YvA+gIYn0GGH7nD44fl2eADEAmKgOQfPPFESACkAsjAMk3XxwBIgC5MAKQfPPFESACkAsjAMk3XxwBIgC5MAKQfPPFESACkAsjAMk3XzxOAN0uXh2oAswPof2Caf14j6DpEzD556un9csAwx7IAPhU8PD48eEzQAYgE2mGqgWQ/F4cASIAuSgCkHzzxREgApALIwDJN18cASIAuTACkHzzxREgApALIwDJN18cASIAuTACkHzzxdsTQHfpmt5rWC2gA6hbvOgmVbwWkAF6ZQxdRBHA9vmLAMMhshaAu3RFgAhALUSnQXTw1XsDVyGwEEgXUS2gFkAGqgXYO4u6D0D2KwOUAfC/jd0JHN5uHgHQ28ObBTQLoIuoWUCzADJQs4BmAWQgLd5+LWD39wXsTgD9/WrA7beLVwGnCaC/PwNsvhycAfBGigoYAW6OJxFBB0ARpseXc/9fO/379fhlAHSADoAaWI+fATJALUA8oFdgBCgEiv84g9QCSP5C4JpGmB4fx5+vQP392oIiADpAByADlAHIgmrACEDylwHKAMMEiwAtBhHD/gHxZY4NZBDgEgAAAABJRU5ErkJggg=="
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden" id="mobile-menu" v-if="visibility">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <RouterLink to="/">
              <a
                href="#"
                class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
                >Home</a
              >
            </RouterLink>

            <RouterLink to="/guide">
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >Guide</a
              >
            </RouterLink>

            <a
              href="https://en.wikipedia.org/wiki/Web3"
              target="_blank"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >What's Web3</a
            >

            <a
              href="https://github.com/0xridwanobafunso/"
              target="_blank"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >GitHub</a
            >
          </div>
          <div class="pt-4 pb-3 border-t border-gray-700">
            <div class="flex items-center px-5 sm:px-6">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA8NJREFUeF7t3bFtG0EURdEh3ABDAyrCgBS7D6WKnRpwYIdKBCiUY6XqQaFKcA0qw6DhFngIfA1wmX8u983b+9/sLGcPrzfH04LPj/dvUO2lD1e//UvgG3Y//0MGgNFfa2WACGAOwmolYATAAYgAEQAtZOURoBBIDqoFkHyFwO1TMI7/9ucfAdABhcBCIFrIyguBhUByUC2A5CsEbh+CcPy3P/8IgA4oBBYC0UJWXggsBJKDuAXQ0S9Q/P3u7QLfcv5XPD5/Pb/4A1RmAByEDIACankEMAUjgOm3IgAKqOURwBSMAKZfBED9uDwCmIQRwPSLAKgfl0cAkzACmH4RAPXj8ghgEkYA0y8CoH5cHgFMwghg+kUA1I/LI4BJGAFMv/0JcP35J+0P8PfXLUmoiym7P5KlBPt0/0L6HzIA6bf0kawMgE/URIAIYJcwVkeAMgBZqBZQCyADFQI3/19CBIgAEUAUaBbQLED8w7XNApoFkInKAGUAMlCzgGYBZKDWAki+1VpAq4G2W3kZoAxADOIM8OXpDz0PML2erwQi9ddaOgDT08hDBjALZIBhhEcA2yElAhgAagFlALsXXwbAGzm1gFoAQtzKC4GFQHJQLaAWQAbSO4nNAkj+bgTxX6P0iZ5CYCEQr2ErLwQWAslBhcBCIBmoEIjPJJL6rQauQiD+PXu8BUy/Pl4F0Ct4ul5nQaof7xAyfQLTA6jHn9YvA+gIYn0GGH7nD44fl2eADEAmKgOQfPPFESACkAsjAMk3XxwBIgC5MAKQfPPFESACkAsjAMk3XxwBIgC5MAKQfPPFESACkAsjAMk3XzxOAN0uXh2oAswPof2Caf14j6DpEzD556un9csAwx7IAPhU8PD48eEzQAYgE2mGqgWQ/F4cASIAuSgCkHzzxREgApALIwDJN18cASIAuTACkHzzxREgApALIwDJN18cASIAuTACkHzzxdsTQHfpmt5rWC2gA6hbvOgmVbwWkAF6ZQxdRBHA9vmLAMMhshaAu3RFgAhALUSnQXTw1XsDVyGwEEgXUS2gFkAGqgXYO4u6D0D2KwOUAfC/jd0JHN5uHgHQ28ObBTQLoIuoWUCzADJQs4BmAWQgLd5+LWD39wXsTgD9/WrA7beLVwGnCaC/PwNsvhycAfBGigoYAW6OJxFBB0ARpseXc/9fO/379fhlAHSADoAaWI+fATJALUA8oFdgBCgEiv84g9QCSP5C4JpGmB4fx5+vQP392oIiADpAByADlAHIgmrACEDylwHKAMMEiwAtBhHD/gHxZY4NZBDgEgAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-white">
                  Ethereum Network
                </div>
                <div class="text-sm font-medium text-gray-400">
                  0x002feDA...
                </div>
              </div>
              <button
                type="button"
                class="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style></style>
