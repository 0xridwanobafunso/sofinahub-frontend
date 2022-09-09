<script setup>
import Breadcrumb from '../../components/Breadcrumb.vue'
import ProjectImageSlider from '../../components/ProjectImageSlider.vue'
import ProjectVideoSlider from '../../components/ProjectVideoSlider.vue'

import { ref } from 'vue'

let visibility = ref(false)
</script>

<template>
  <!-- breadcrumb -->
  <Breadcrumb />
  <div class="bg-white -mt-14">
    <div class="max-w-7xl mx-auto px-2 py-16 sm:py-24">
      <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">
        Project Information
      </h1>

      <div
        class="text-sm border-b border-gray-200 mt-2 pb-5 sm:flex sm:justify-between"
      >
        <dl class="flex">
          <dt class="text-gray-500">Creator details and application</dt>
        </dl>
        <div class="mt-4 sm:mt-0">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
            >View on etherscan<span aria-hidden="true"> &rarr;</span></a
          >
        </div>
      </div>

      <div class="mt-4">
        <h2 class="sr-only">Project details</h2>

        <div class="space-y-24">
          <div
            class="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
          >
            <div
              class="sm:col-span-4 md:col-span-5 md:row-end-2 md:row-span-2 mt-2"
            >
              <div
                class="aspect-w-1 aspect-h-1 bg-gray-50 rounded-lg overflow-hidden"
              >
                <ProjectImageSlider />
              </div>
              <div
                class="mt-5 aspect-w-1 aspect-h-1 bg-gray-50 rounded-lg overflow-hidden"
              >
                <ProjectVideoSlider />
              </div>
            </div>
            <div class="sm:col-span-12 md:col-span-7 mt-2">
              <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                <div>
                  <div
                    class="flex p-4 text-sm text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800"
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      class="flex-shrink-0 inline w-5 h-5 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                      <span class="font-medium">Scam alert!</span> Do your own
                      research (DYOR) before investing in any real estate
                      project as a backer.
                    </div>
                  </div>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl class="divide-y divide-gray-200">
                    <div
                      class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Project title
                      </dt>
                      <dd
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        Duplex Building At Ajah, Lagos, Nigeria.
                      </dd>
                    </div>
                    <div
                      class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Project description
                      </dt>
                      <dd
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt in eligendi facilis nisi ratione consectetur
                        odio consequatur. Quisquam voluptatem, dolores ex,
                        eligendi nobis accusantium mollitia, beatae numquam et
                        sit quod!
                      </dd>
                    </div>
                    <div
                      class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Project address
                      </dt>
                      <dd
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        <a
                          href="#"
                          class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          0x98765670000000
                        </a>
                        <br />
                        <div
                          class="mt-3 rounded-lg inline-flex text-green-700 ring-4 ring-white"
                        >
                          <!-- Heroicon name: outline/cash -->
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
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                          <span class="mt-[2px] ml-2 text-gray-900"
                            >Project verified by <b>SofinaHub</b>
                          </span>
                        </div>
                      </dd>
                    </div>
                    <div
                      class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Project backers
                      </dt>
                      <dd
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        0
                      </dd>
                    </div>
                    <div
                      class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Funding goal
                      </dt>
                      <dd
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        <b>2 ETH</b>
                      </dd>
                    </div>
                    <div
                      class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Funding deadline
                      </dt>
                      <dd
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        12-01-2020:07:02:55Z
                      </dd>
                    </div>

                    <div
                      class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Token name (ERC-20)
                      </dt>
                      <dd
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        <a
                          href="#"
                          class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          DDP Building
                        </a>
                      </dd>
                    </div>
                    <div
                      class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Token symbol
                      </dt>
                      <dd
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        DDP
                      </dd>
                    </div>
                    <div
                      class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <span
                        class="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                        @click="visibility = !visibility"
                      >
                        {{
                          visibility
                            ? 'Hide More Details...'
                            : 'View More Details...'
                        }}
                      </span>
                    </div>
                    <!-- hide/show here-->
                    <div class="divide-y divide-gray-200" v-if="visibility">
                      <div
                        class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">
                          Token decimal
                        </dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          4
                        </dd>
                      </div>
                      <div
                        class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">
                          Token total supply
                        </dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          10,000,000
                        </dd>
                      </div>
                      <div
                        class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">ROI</dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          3 %
                        </dd>
                      </div>
                      <div
                        class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">
                          ROI matured date
                        </dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          40 Days After Deadline
                        </dd>
                      </div>
                      <div
                        class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">
                          Creator address
                        </dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          <a
                            href="#"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            0x000000000000000001
                          </a>
                        </dd>
                      </div>

                      <div
                        class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">
                          Documents
                        </dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          <ul
                            role="list"
                            class="border border-gray-200 rounded-md divide-y divide-gray-200"
                          >
                            <li
                              class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                            >
                              <div class="w-0 flex-1 flex items-center">
                                <!-- Heroicon name: solid/paper-clip -->
                                <svg
                                  class="flex-shrink-0 h-5 w-5 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                <span class="ml-2 flex-1 w-0 truncate">
                                  0x0000000000000.pdf
                                </span>
                              </div>
                              <div class="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  class="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                            <li
                              class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                            >
                              <div class="w-0 flex-1 flex items-center">
                                <!-- Heroicon name: solid/paper-clip -->
                                <svg
                                  class="flex-shrink-0 h-5 w-5 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                <span class="ml-2 flex-1 w-0 truncate">
                                  0x0000000000000.pdf
                                </span>
                              </div>
                              <div class="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  class="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                          </ul>
                        </dd>
                      </div>
                      <div class="py-4 sm:py-5 sm:gap-4 sm:px-6">
                        <p class="font-medium text-gray-900">
                          Funds raised by backers:
                          <span class="text-gray-900 ml-2 font-bold"
                            >0.66 ETH</span
                          >
                        </p>
                        <div class="mt-6">
                          <div class="bg-gray-200 rounded-full overflow-hidden">
                            <div
                              class="h-2 bg-indigo-600 rounded-full"
                              style="width: calc((1 * 2 + 1) / 8 * 100%)"
                            ></div>
                          </div>
                          <div
                            class="hidden sm:grid grid-cols-4 font-medium text-gray-600 mt-6"
                          >
                            <div class="text-indigo-600">25%</div>
                            <div class="text-center text-indigo-600">50%</div>
                            <div class="text-center">75%</div>
                            <div class="text-right">100%</div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">
                          Backers (contributors)
                        </dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          <a
                            href="#"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            0x000000000000000005
                          </a>
                          <br />
                          <a
                            href="#"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            0x000000000000000005
                          </a>
                          <br />
                          <a
                            href="#"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            0x000000000000000005
                          </a>
                          <br />
                          <a
                            href="#"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            0x000000000000000005
                          </a>
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <!-- More products... -->
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
