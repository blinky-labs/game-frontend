<script>
import Tabs from '../../components/Global/Tabs.vue'
export default {
  data() {
    return {
      inventoryItems: [
        {
          id: '1',
          name: 'Hammer',
          cost: 200,
          atk: 5,
          tags: ['weak poison', 'weak fire']
        },
        { id: '2', name: 'Test One', cost: 400, atk: 2, tags: ['weak fire'] },
        { id: '3', name: 'Test One', cost: 700, atk: 1, tags: [] },
        { id: '4', name: 'Test One', cost: 600, atk: 2, tags: [] },
        { id: '5', name: 'Test One', cost: 800, atk: 1, tags: [] }
      ]
    }
  },
  components: { Tabs }
}
</script>

<template>
  <div class="w-full h-full">
    <div class="grid grid-cols-2 h-full">
      <div class="bg-gray-100 h-full"></div>

      <div class="flow-root border-x-2 h-full">
        <div class="shop__header bg-gray-100 px-6 pt-6 sticky top-0">
          <Tabs />
        </div>

        <ul
          role="list"
          class="cursor-pointer border-t-2 border-gray-200 bg-gray-100 divide-y-2 divide-gray-200"
        >
          <li v-for="item in inventoryItems" v-bind:key="item.id">
            <div class="flex items-center space-x-4 py-3 px-6 hover:bg-white">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8"
                  src="../../assets/portrait-misc.png"
                  alt=""
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-bold text-gray-900 truncate">
                  {{ item.name }}
                </p>
                <p class="text-sm text-gray-500 truncate">
                  <span class="mr-1">Atk: {{ item.atk }},</span>
                  <span
                    v-for="tag in item.tags"
                    v-bind:key="tag.id"
                    class="px-1"
                    >{{ tag }},</span
                  >
                </p>
              </div>
              <div>
                <a
                  href="#"
                  class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                >
                  Equip
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
