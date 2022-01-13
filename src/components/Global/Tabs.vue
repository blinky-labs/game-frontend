<script>
export default {
  data() {
    return {
      shopMenu: [
        { id: 1, title: 'Weapons', src: '../../assets/ui-sword.png', active: true},
        { id: 2, title: 'Defence', src: '../../assets/ui-shield.png' },
        { id: 3, title: 'Tomes', src: '../../assets/ui-tome.png' },
        { id: 4, title: 'Other', src: '../../assets/ui-other.png' }
      ]
    }
  },
  methods: {
    getImgUrl(pic) {
      return new URL(pic, import.meta.url).href
    }
  },
}
</script>

<template>
        <nav class="flex" aria-label="Tabs">
          <a
            v-for="menuItem in shopMenu"
            v-bind:key="menuItem.id"
            href="#"
            class="
              text-gray-500
              border-transparent
              border-b-4
              hover:text-gray-700 hover:border-blue-500 hover:border-b-4
              group
              flex
              flex-col
              content-center
              items-center
              pt-4
              pb-2
              w-28
              font-medium
              text-sm
            "
            :class="menuItem.active ? 'border-gray-200 border-2 border-b-0 bg-white' : 'cursor-pointer bg-gray-100'"
          >
            <img :src="getImgUrl(menuItem.src)" width="24" height="24" class="flex-shrink-0" />
            <p class="mt-2 heading text-gray-800 text-sm font-bold uppercase leading-5 tracking-tighter">
              {{ menuItem.title }}
            </p>
          </a>
        </nav>
</template>

<style scoped lang="scss"></style>
