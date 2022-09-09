<script setup></script>

<template>
  <main>
    <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-10 lg:overflow-hidden">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center md:-mt-16"
          >
            <div class="lg:py-24">
              <a
                href="#"
                class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span
                  class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full"
                  >We're live</span
                >
                <span class="ml-4 text-sm font-bold">ON ETHEREUM TESTNET</span>
                <!-- Heroicon name: solid/chevron-right -->
                <svg
                  class="ml-2 w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <h1
                class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-5xl"
              >
                <span class="block">A decentralized way to</span>
                <span class="block text-indigo-400"
                  >fund real estate property.</span
                >
              </h1>
              <p
                class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat.
              </p>
              <div class="mt-10 sm:mt-12">
                <div>
                  <RouterLink to="/app"
                    ><button
                      type="button"
                      class="relative inline-flex items-center px-5 py-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-600"
                    >
                      <span>Launch App</span>
                    </button></RouterLink
                  >
                  <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                    Start by launching the app then connect your ETH wallet (i.e
                    Trust, Metamask, CoinbaseWallet). It works with all kind
                    wallet using
                    <a href="#" class="font-medium text-white"
                      >WalletConnect library</a
                    >.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div
              class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
            >
              <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
              <img
                class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- More main page content here... -->
  </main>
</template>

<style></style>
