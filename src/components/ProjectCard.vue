<script setup></script>

<template>
  <div>
    <div class="relative">
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
    </div>
  </div>
</template>

<style></style>
