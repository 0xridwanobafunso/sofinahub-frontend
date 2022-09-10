<script setup></script>

<template>
  <div>
    <!-- <div class="relative">
      <div class="relative w-full h-72 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          class="w-full h-full object-center object-cover"
        />
      </div>
      <div class="relative mt-4">
        <h3 class="text-sm font-medium text-gray-900">
          Duplex Building At Ajah, Lagos, Nigeria.
        </h3>
        <p class="mt-1 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          magnam sint atque exercitationem labore...
        </p>
      </div>
      <div
        class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden"
      >
        <div
          aria-hidden="true"
          class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
        ></div>
        <p class="relative text-lg font-bold text-white flex">
          5 ETH
          <svg
            class="h-6 w-6 mt-[2.5px] ml-3"
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
        </p>
      </div>
    </div>
    <div class="mt-6">
      <RouterLink to="/app/0x00000000000000000000/project">
        <a
          href="#"
          class="relative flex bg-indigo-600 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-white hover:bg-indigo-700"
          >Read more</a
        >
      </RouterLink>
    </div> -->
    <div class="block p-4 rounded-lg shadow-sm shadow-indigo-100">
      <img
        alt="123 Wallaby Avenue, Park Road"
        src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        class="object-cover w-full h-56 rounded-md"
      />

      <div class="mt-2">
        <dl>
          <div>
            <dt class="sr-only">Price</dt>

            <dd class="text-sm text-gray-500">5 ETH</dd>
          </div>

          <div>
            <dt class="sr-only">Project name</dt>

            <dd class="font-medium">
              Duplex Building At Ajah, Lagos, Nigeria.
            </dd>

            <p class="mt-1 text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              magnam sint atque exercitationem labore...
            </p>
          </div>
        </dl>

        <dl class="flex items-center mt-6 text-xs space-x-8">
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

              <dd class="font-medium">DDP</dd>
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

              <dd class="font-medium">2 %</dd>
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

              <dd class="font-medium">40 days</dd>
            </div>
          </div>
        </dl>

        <div class="mt-6">
          <RouterLink to="/app/0x00000000000000000000/project">
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
