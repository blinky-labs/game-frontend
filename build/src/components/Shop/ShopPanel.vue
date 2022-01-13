<script>
import ShopItem from './partials/ShopItem.vue'
import Tabs from '../../components/Global/Tabs.vue'

export default {
  data() {
    return {
      shopItems: [
        {
          id: '1',
          name: 'Broadsword',
          cost: 600,
          atk: 5,
          src: '../../../assets/weapons/sword-1.png',
          tag: {}
        },

        {
          id: '1',
          name: 'Dagger',
          cost: 200,
          atk: 5,
          src: '../../../assets/weapons/sword-2.png',
          tag: {}
        },
        {
          id: '1',
          name: 'Training Sword',
          cost: 200,
          atk: 5,
          src: '../../../assets/weapons/sword-3.png',
          tag: {}
        },
        {
          id: '1',
          name: 'Golden Sword',
          cost: 200,
          atk: 5,
          src: '../../../assets/weapons/sword-4.png',
          tag: {}
        },
        {
          id: '1',
          name: 'Firey Axe',
          cost: 200,
          atk: 5,
          src: '../../../assets/weapons/axe-1.png',
          tag: { type: 'weak fire', effect: 'fire' }
        },
        {
          id: '1',
          name: 'Water Mace',
          cost: 200,
          atk: 5,
          src: '../../../assets/weapons/mace-1.png',
          tag: { type: 'water', effect: 'water' }
        }
      ]
    }
  },
  methods: {
    getImgUrl(pic) {
      return new URL(pic, import.meta.url).href
    }
  },
  components: { ShopItem, Tabs }
}
</script>

<template>
  <div class="w-full relative">
    <div class="shop__header bg-gray-100 px-6 pt-6 sticky top-0">
      <Tabs />
    </div>

    <ul
      role="list"
      class="grid p-6 border-t-2 border-gray-200 bg-gray-100 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
    >
      <ShopItem
        v-for="shopItem in shopItems"
        v-bind:key="shopItem.key"
        :item="shopItem"
        :src="shopItem.src"
      />
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>
