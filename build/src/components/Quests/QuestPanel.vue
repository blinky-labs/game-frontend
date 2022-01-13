<script>
export default {
  data() {
    return {
      missions: [
        {
          id: 1,
          title: 'Hunting Slimes',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          difficulty: 5,
          waves: 2,
          img: '../../assets/ui/ui-menu-feed.png',
          rewards: ['Copper Chest', '100g']
        },
        {
          id: 1,
          title: 'Rat Killer',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          difficulty: 5,
          waves: 2,
          rewards: ['Copper Chest', '100g']
        }
      ]
    }
  }
}
</script>

<template>
  <div class="w-full grid">
    <div class="feed__list grid p-6">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <ul role="list" class="grid grid-cols-1 gap-6">
        <li
          v-for="mission in missions"
          v-bind:key="mission.id"
          class="bg-white border-2"
        >
          <router-link to="/game">
            <div class="w-full flex items-center justify-between p-6 space-x-6">
              <img
                class="w-12 h-12 bg-gray-300 flex-shrink-0"
                :src="mission.img"
                alt=""
              />
              <div class="flex-1">
                <div class="flex items-center space-x-3">
                  <h3 class="text-gray-900 text-sm font-medium">
                    {{ mission.title }}
                  </h3>
                  <span
                    class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
                    >Admin</span
                  >
                </div>
                <p class="mt-1 text-gray-500 max-w-lg text-sm">
                  {{ mission.description }}
                </p>
              </div>
              <div class="quest__rewards flex flex-col">
                <h3
                  class="text-gray-900 text-sm font-medium truncate text-center"
                >
                  Rewards
                </h3>
                <div class="flex mt-1">
                  <img
                    class="w-12 h-12 bg-gray-300 flex-shrink-0"
                    :src="mission.img"
                    alt=""
                  />
                  <img
                    class="w-12 h-12 bg-gray-300 flex-shrink-0 ml-2"
                    :src="mission.img"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </router-link>
        </li>

        <!-- More people... -->
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
