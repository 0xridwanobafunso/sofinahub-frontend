<script setup>
import 'xtendui'
import 'xtendui/src/slider'
</script>

<template>
  <div>
    <div class="xt-slider" data-xt-slider>
      <div class="p-2">
        <div
          class="xt-slides transition ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
          data-xt-slider-dragger
        >
          <div class="xt-slide w-full group" data-xt-slider-target>
            <div
              class="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 text-base text-center"
            >
              <div class="xt-h4">
                <img
                  src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade."
                  class="object-center object-cover"
                />
              </div>
            </div>
          </div>

          <div class="xt-slide w-full group" data-xt-slider-target>
            <div
              class="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 text-base text-center"
            >
              <div class="xt-h4">
                <img
                  src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade."
                  class="object-center object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <nav
          aria-label="Slider Navigation"
          class="w-full xt-list xt-list-2 pt-4 items-center justify-center"
          data-xt-slider-pagination
        >
          <button
            type="button"
            class="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
            data-xt-slider-element
            title="Slide xt-num"
          ></button>
        </nav>
      </div>
    </div>
  </div>
</template>

<style></style>
