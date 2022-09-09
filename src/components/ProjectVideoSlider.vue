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
                <iframe
                  width="500"
                  height="315"
                  src="https://www.youtube.com/embed/y881t8ilMyc"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div class="xt-slide w-full group" data-xt-slider-target>
            <div
              class="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 text-base text-center"
            >
              <div class="xt-h4">
                <iframe
                  width="500"
                  height="315"
                  src="https://www.youtube.com/embed/y881t8ilMyc"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
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
