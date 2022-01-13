<template>
  <header class="bg-blue-800">
    <div
      class="mx-auto px-4 2xl:container 2xl:mx-auto lg:divide-y lg:divide-gray-700"
    >
      <div class="relative h-16 flex justify-between">
        <router-link to="/" class="relative z-10 px-2 flex lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block h-8 mr-4 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <div>
              <p class="leading-5 text-xl font-bold text-blue-100">
                FantasyBook
              </p>
              <p class="leading-5 text-base opacity-70 text-blue-100">
                Example Subtitle
              </p>
            </div>
          </div>
        </router-link>
        <div
          class="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0"
        ></div>
        <div class="relative z-10 flex items-center">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          ></button>
        </div>
        <div class="lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <!-- Profile dropdown -->
          <p class="text-base text-blue-100">Example Name</p>

          <div class="flex-shrink-0 relative ml-4">
            <div>
              <button
                type="button"
                class="bg-gray-800 flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <img
                  class="h-8 w-8"
                  src="../../assets/portrait-misc.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
