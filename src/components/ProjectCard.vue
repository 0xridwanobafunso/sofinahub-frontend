<script setup>
let data = defineProps({
  data: {
    required: true,
    type: Object,
  },
})
</script>

<template>
  <div>
    <div class="block p-4 rounded-lg shadow-sm shadow-indigo-100">
      <img
        alt="123 Wallaby Avenue, Park Road"
        :src="data.data[0][5][0]"
        class="object-cover w-full h-56 rounded-md"
      />
      <div class="mt-2">
        <dl>
          <div>
            <dt class="sr-only">Price</dt>

            <dd class="text-sm text-gray-500">
              {{ data.data[0][0] / Math.pow(10, 18) }} ETH
            </dd>
          </div>

          <div>
            <dt class="sr-only">Project name</dt>

            <dd class="font-medium">
              {{ data.data[0][2] }}
            </dd>

            <p class="mt-1 text-sm text-gray-600">
              {{ data.data[0][3].substring(0, 140) + '...' }}
            </p>
          </div>
        </dl>

        <dl class="flex items-center mt-6 text-xs space-x-2">
          <div class="sm:inline-flex sm:items-center sm:shrink-0">
            <svg
              class="w-4 h-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <div class="sm:ml-3 mt-1.5 sm:mt-0">
              <dt class="text-gray-500">Reward token</dt>

              <dd class="font-medium">${{ data.data[0][11] }}</dd>
            </div>
          </div>

          <div class="sm:inline-flex sm:items-center sm:shrink-0">
            <svg
              class="w-4 h-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>

            <div class="sm:ml-3 mt-1.5 sm:mt-0">
              <dt class="text-gray-500">ROI</dt>

              <dd class="font-medium">{{ data.data[0][8] }} %</dd>
            </div>
          </div>

          <div class="sm:inline-flex sm:items-center sm:shrink-0">
            <svg
              class="w-4 h-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>

            <div class="sm:ml-3 mt-1.5 sm:mt-0">
              <dt class="text-gray-500">ROI Duration</dt>

              <dd class="font-medium">{{ data.data[7] }}</dd>
            </div>
          </div>
        </dl>

        <div class="mt-6">
          <RouterLink :to="`/app/${data.data[5]}/project`">
            <a
              href="#"
              class="relative flex bg-indigo-600 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-white hover:bg-indigo-700"
              >Read more</a
            >
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
