<script>
export default {
  data() {
    return {
      menu: [
        {
          id: '1',
          name: 'Discord',
          url: 'https://www.google.com',
          img: 'https://via.placeholder.com/20'
        },
        {
          id: '2',
          name: 'Twitter',
          url: 'https://www.google.com',
          img: 'https://via.placeholder.com/20'
        },
        {
          id: '3',
          name: 'Patreon',
          url: 'https://www.google.com',
          img: 'https://via.placeholder.com/20'
        }
      ]
    }
  }
}
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <footer class="bg-gray-900">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav
        class="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        <div
          v-for="menuItem in menu"
          v-bind:key="menuItem.id"
          class="px-5 py-2"
        >
          <router-link
            :to="menuItem.url"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            <p>{{ menuItem.name }}</p>
          </router-link>
        </div>
      </nav>
      <p class="mt-8 text-center text-sm text-gray-400">
        &copy; 2020 FantasyBook, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>
