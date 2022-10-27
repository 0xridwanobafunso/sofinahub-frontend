<script setup>
import Breadcrumb from '../../components/Breadcrumb.vue'
import ProjectImageSlider from '../../components/ProjectImageSlider.vue'
import ProjectVideoSlider from '../../components/ProjectVideoSlider.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, watchEffect, onBeforeMount, reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, decimal } from '@vuelidate/validators'

import { useAppStore } from '../../stores/app'

let visibility = ref(false)

const route = useRoute()
watchEffect(() => route.params)

const router = useRouter()

let store = useAppStore()

let input = reactive({
  amount: '',
})

const rules = {
  amount: { required, decimal },
}

const v$ = useVuelidate(rules, input)

async function donate(projectAddress) {
  v$.value.$touch()

  if (v$.value.$errors.length == 0) {
    let res = await store.donate(projectAddress, input.amount)

    return res
  }
}

onBeforeMount(async () => {
  await store.getProject(route.params.address)
})
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
          <a
            :href="`https://goerli.etherscan.io/address/${route.params.address}`"
            target="_blank"
            class="font-medium text-indigo-600 hover:text-indigo-500"
            >View on etherscan<span aria-hidden="true"> &rarr;</span></a
          >
        </div>
      </div>

      <div class="mt-4">
        <div
          class="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
          v-if="route.query['success-detail'] == 'donation-created'"
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
            <span class="font-medium">Success!</span> You've donated to the
            project successfully.
            <a
              :href="router.currentRoute.value.fullPath.split('?')[0]"
              class="font-bold underline"
              >Okay</a
            >
          </div>
        </div>

        <div
          class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
          v-if="route.query['failed-detail'] == 'donation-created'"
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
            <span class="font-medium">Failed!</span> Error occured while
            donating to the project.
            <RouterLink
              :to="router.currentRoute.value.fullPath.split('?')[0]"
              class="font-bold underline"
              >Okay</RouterLink
            >
            <ul class="mt-2">
              <li>1. Make sure you've connected your wallet.</li>
              <li>
                2. Contribution did not send successfully because project
                deadline has passed. Your donated funds will be refunded.
              </li>
            </ul>
          </div>
        </div>

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
                    v-if="!store._project.data[0][15]"
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
                        {{ store._project.data[0][2] }}
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
                        {{ store._project.data[0][3] }}
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
                          :href="`https://goerli.etherscan.io/address/${store._project.data[5]}`"
                          target="_blank"
                          class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {{ store._project.data[5].substring(0, 30) + '...' }}
                        </a>
                        <br />
                        <div
                          class="mt-3 rounded-lg inline-flex text-green-700 ring-4 ring-white"
                          v-if="store._project.data[0][15]"
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
                        {{ store._project.data[3] }}
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
                        {{
                          store._project.data[0][0] / Math.pow(10, 18) + ' ETH'
                        }}
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
                        {{ store._project.data[6] }}
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
                          :href="`https://goerli.etherscan.io/address/${store._project.data[0][14]}`"
                          target="_blank"
                          class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {{ store._project.data[0][10] }}
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
                        {{ '$' + store._project.data[0][11] }}
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
                          {{ store._project.data[0][12] }}
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
                          {{ store._project.data[0][13] }}
                        </dd>
                      </div>
                      <div
                        class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">ROI</dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          {{ store._project.data[0][8] }} %
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
                          {{ store._project.data[7] }}
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
                            {{
                              store._project.data[0][4].substring(0, 25) + '...'
                            }}
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
                              v-for="url of store._project.data[0][7]"
                              :key="url"
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
                                  {{ store._project.data[5] }}.doc
                                </span>
                              </div>
                              <div class="ml-4 flex-shrink-0">
                                <a
                                  :href="url"
                                  target="_blank"
                                  class="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  View
                                </a>
                              </div>
                            </li>
                          </ul>
                        </dd>
                      </div>
                      <div
                        class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">
                          Funds raised by backers
                        </dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          {{ store._project.data[1] / Math.pow(10, 18) }} ETH
                        </dd>
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
                          <div
                            v-for="(value, address) in store._project
                              .contributors"
                            :key="address"
                          >
                            <span href="#" class="text-gray-500">
                              {{ address.substring(0, 30) + '...' }}
                              <b class="underline">{{
                                ' donated ' + value + ' ETH'
                              }}</b>
                            </span>
                          </div>
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
              <div class="mt-5 shadow-md px-4 py-7 text-gray-500">
                <h4 class="text-lg font-bold">Do you want to donate?</h4>
                <div class="mt-2">
                  <ol>
                    <li>Simply connect your wallet before trying to donate.</li>
                    <li>
                      Load this project
                      <a
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                        :href="`https://goerli.etherscan.io/address/${store._project.data[0][14]}`"
                        target="_blank"
                        >reward token smart contract</a
                      >
                      in your wallet.
                    </li>
                  </ol>
                </div>
                <div class="mt-5">
                  <label for="" class="font-bold">Amount (in ETH)</label>
                  <div class="mt-2 relative text-gray-700">
                    <input
                      class="w-full h-10 pl-3 pr-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      type="text"
                      placeholder="e.g 0.5"
                      v-model="input.amount"
                      :class="
                        v$.amount.$errors.length > 0
                          ? 'focus:ring-red-500 focus:border-red-500'
                          : 'focus:ring-indigo-500 focus:border-indigo-500'
                      "
                      @blur="v$.amount.$touch()"
                    />
                    <button
                      class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700"
                      @click="
                        donate(store._project.data[5]).then((res) => {
                          if (typeof res == 'boolean') {
                            if (res) {
                              router.push(
                                `${router.currentRoute.value.fullPath}?success-detail=donation-created`
                              )
                            } else {
                              router.push(
                                `${router.currentRoute.value.fullPath}?failed-detail=donation-created`
                              )
                            }
                          }
                        })
                      "
                    >
                      Donate
                    </button>
                  </div>

                  <div
                    class="mt-1 text-red-600 text-sm"
                    v-for="error of v$.amount.$errors"
                    :key="error.$uid"
                  >
                    {{
                      error.$message
                        .toLowerCase()
                        .replace(
                          'value',
                          error.$property.charAt(0).toUpperCase() +
                            error.$property.slice(1)
                        )
                    }}
                  </div>
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
