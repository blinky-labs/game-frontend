<script>
export default {
  data() {
    return {
      profile: {
        level: 2,
        money: 23000
      },
      menu: [
        {
          id: '1',
          name: 'Feed',
          url: 'feed',
          img: '../../assets/ui/ui-menu-feed.png'
        },
        {
          id: '2',
          name: 'Messages',
          url: 'messages',
          img: '../../assets/ui/ui-menu-messages.png'
        },
        {
          id: '6',
          name: 'Quests',
          url: 'quests',
          img: '../../assets/ui/ui-menu-battle.png'
        },
        {
          id: '5',
          name: 'Inventory',
          url: 'inventory',
          img: '../../assets/ui/ui-menu-inventory.png'
        },
        {
          id: '4',
          name: 'Shop',
          url: 'shop',
          img: '../../assets/ui/ui-menu-shop.png'
        },
        {
          id: '3',
          name: 'Skills',
          url: 'skills',
          img: '../../assets/ui/ui-menu-skills.png'
        },
        {
          id: '7',
          name: 'FantasyBook+',
          url: 'support',
          img: '../../assets/ui/ui-menu-premium.png'
        }
      ]
    }
  },
  methods: {
    getImgUrl(pic) {
      return new URL(pic, import.meta.url).href
    }
  },
  computed: {
    formatNumber() {
      return this.profile.money.toLocaleString('en-US')
    }
  }
}
</script>

<template>
  <div class="w-full flex flex-col">
    <!-- Profile -->
    <div
      class="profile px-4 py-6 w-full flex flex-row items-center cursor-pointer transition ease-in-out"
    >
      <div class="shrink-0">
        <img
          class="friend__image aliased mr-4"
          width="52"
          height="52"
          src="../../assets/portrait-misc.png"
        />
      </div>
      <div>
        <h2 class="profile__name text-sm uppercase tracking-tight">
          Example Name
        </h2>
        <p class="profile__bio opacity-50 text-sm">
          Lvl {{ this.profile.level }}, Warrior
        </p>
        <p class="profile__bio opacity-50 text-sm">
          ${{ formatNumber }} Essence
        </p>
      </div>
    </div>

    <!-- Menu -->
    <nav class="flex-1 px-2 bg-white" aria-label="Sidebar">
      <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
      <router-link
        v-for="menuItem in menu"
        v-bind:key="menuItem.id"
        :to="`/${menuItem.url}`"
        class="text-gray-600 grayscale opacity-70 transition duration-300 ease-in-out hover:grayscale-0 hover:opacity-100 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-3 text-sm font-medium rounded-md"
      >
        <img
          :src="getImgUrl(menuItem.img)"
          class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
        />
        <p class="heading text-gray-800 text-sm font-bold uppercase">
          {{ menuItem.name }}
        </p>
      </router-link>
    </nav>
  </div>
</template>

<style scoped lang="scss"></style>
