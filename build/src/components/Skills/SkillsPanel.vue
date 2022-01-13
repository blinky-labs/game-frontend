<script>
export default {
  data() {
    return {
      skills: [
        { id: '1', name: 'Strength', val: 18, modifier: 2, img:'../../assets/ui/ui-skills-strength.png' },
        { id: '2', name: 'Intelligence', val: 28, modifier: 2, img:'../../assets/ui/ui-skills-intelligence.png' },
        { id: '3', name: 'Agility', val: 2, modifier: 2, img:'../../assets/ui/ui-skills-agility.png' },
        { id: '4', name: 'Luck', val: 2, modifier: 2, img:'../../assets/ui/ui-skills-luck.png' },
        { id: '5', name: 'Health', val: 2, modifier: 2, img:'../../assets/ui/ui-skills-health.png' },
        { id: '6', name: 'Mana', val: 2, modifier: 2, img:'../../assets/ui/ui-skills-mana.png' },
        { id: '7', name: 'Charm', val: 2, modifier: 2, img:'../../assets/ui/ui-skills-charm.png' },
        { id: '8', name: 'Speech', val: 2, modifier: 2, img:'../../assets/ui/ui-skills-speech.png' }
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
<div>
    <div>
      <div>
        <img
          class="w-full object-cover h-48"
          src="../../assets/profile-bg-forest.png"
          alt=""
        />
      </div>
      <div class="max-w-6xl mx-auto p-6">
        <div class="-mt-16 flex items-end space-x-5">
          <div class="">
            <img
              class="h-24 w-24"
              src="../../assets/portrait-misc.png"
              alt=""
            />
          </div>
          <div
            class="
              mt-6
              sm:flex-1
              sm:min-w-0
              sm:flex
              sm:items-center
              sm:justify-end
              sm:space-x-6
              sm:pb-1
            "
          >
            <div class="md:block mt-8 min-w-0 flex-1">
              <h1 class="text-xl font-bold text-gray-900 leading-7 truncate">
                Example Name
              </h1>
              <p class="text-base text-gray-700 opacity-70 text-lg truncate leading-7">
                $23,000 Essence
              </p>
            </div>
            <div
              class="
                mt-6
                flex flex-col
                justify-stretch
                space-y-3
                sm:flex-row sm:space-y-0 sm:space-x-4
              "
            >
              <button
                type="button"
                class="
                  inline-flex
                  justify-center
                  px-4
                  py-2
                  border border-gray-300
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-gray-700
                  bg-white
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-pink-500
                "
              >
                <span>View Inventory</span>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
          <h1 class="text-2xl font-bold text-gray-900 truncate">Name Here</h1>
        </div>
      </div>
    </div>

  <div
    class="
      mt-4
      border-t border-gray-200
      bg-white
      grid grid-cols-1
      divide-y divide-gray-200
      sm:grid-cols-3 sm:divide-y-0 sm:divide-x
    "
  >
    <div class="px-6 py-3 flex items-center justify-center text-sm font-medium text-center">
      <div>
        <img class="inline-block mr-3" width="24" height="24" src="../../assets/ui-flag.png" />
      </div>
      <div class="text-left">
        <p class="header text-gray-900 font-bold text-lg leading-5 tracking-tight">Level 21,</p>
        <p class="text-gray-600 text-sm leading-4">Barbarian</p>
      </div>
    </div>

    <div class="px-6 py-3 flex items-center justify-center text-sm font-medium text-center">
      <div>
        <img class="inline-block mr-3" width="24" height="24" src="../../assets/ui-sword.png" />
      </div>
      <div class="text-left">
        <p class="header text-gray-900 font-bold text-lg leading-5 tracking-tight">2,100</p>
        <p class="text-gray-600 text-sm leading-4">Attack Damage</p>
      </div>
    </div>

    <div class="px-6 py-3 flex items-center justify-center text-sm font-medium text-center">
      <div>
        <img class="inline-block mr-3" width="24" height="24" src="../../assets/ui-shield.png" />
      </div>
      <div class="text-left">
        <p class="header text-gray-900 font-bold text-lg leading-5 tracking-tight">3,200</p>
        <p class="text-gray-600 text-sm leading-4">Armor</p>
      </div>
    </div>

  </div>

  <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="grid gap-5 p-6 grid-cols-4 border-t-2 border-gray-200 bg-gray-100"
    >
      <div
        v-for="skill in skills"
        v-bind:key="skill.id"
        class="relative px-4 py-8 flex flex-col text-center justify-center h-64 border-large"
      >
        <div class="inline-block mx-auto">
          <!-- Heroicon name: outline/users -->
          <img
            :src="getImgUrl(skill.img)"
            :alt="`${skill.name}-img`"
            width="50"
            height="50"
          />
        </div>
        <div class="mt-2 grid grid-col-1">
        <p class="heading uppercase text-base font-semibold text-white">
          {{ skill.name }}
        </p>
        <p class="heading text-4xl font-bold text-white">
          {{ skill.val }}
        </p>
        <p class="heading mt-1 text-sm uppercase text-green-600">+{{ skill.modifier }} Modifier</p>
        </div>
      </div>
    </div>

    </div>
</template>
