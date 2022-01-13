<script>
export default {
  data() {
    return {
      emojis: [
        { id: 1, description: 'Happy', src: '../../assets/portrait-misc.png' },
        { id: 2, description: 'Sad', src: '../../assets/portrait-misc.png' },
        { id: 3, description: 'Happy', src: '../../assets/portrait-misc.png' }
      ]
    }
  },
  props: ['position']
}
</script>

<template>
  <div>
    <div class="flex gap-4 items-end" :class="{ 'flex-row-reverse': position }">
      <div class="flex-shrink-0">
        <img
          class="inline-block h-10 w-10"
          src="../../../assets/portrait-misc.png"
          alt=""
        />
      </div>

      <div class="min-w-0 flex-1 relative">
        <div
          class="rounded-xl py-4 px-6"
          :class="
            position
              ? ' bg-blue-800 text-white bg-red rounded-bl-xl rounded-br-none'
              : 'bg-gray-200 rounded-xl rounded-bl-none'
          "
        >
          <p>Example text here</p>

          <!-- Spacer element to match the height of the toolbar -->
          <div class="py-2" aria-hidden="true"></div>
        </div>

        <!--  -->
        <div
          class="absolute bottom-0 inset-x-0 pl-3 pr-2 pt-2 pb-4 flex justify-between"
        >
          <div class="flex items-center space-x-5">
            <div class="flex items-center">
              <div>
                <label id="listbox-label" class="sr-only"> Your mood </label>
                <div class="relative">
                  <button
                    type="button"
                    class="relative w-10 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                  >
                    <span class="flex items-center justify-center">
                      <!-- Placeholder label, show/hide based on listbox state. -->
                      <span>
                        <!-- Heroicon name: solid/emoji-happy -->
                        <svg
                          class="flex-shrink-0 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </button>

                  <ul
                    class="hidden absolute z-10 mt-1 -ml-6 w-60 bg-white shadow rounded-lg p-3 text-base grid grid-cols-4 gap-2 ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm"
                  >
                    <li
                      v-for="emoji in emojis"
                      v-bind:key="emoji.id"
                      class="bg-white cursor-default select-none relative"
                      id="listbox-option-0"
                      role="option"
                    >
                      <img
                        class="flex-shrink-0 inline-block h-10 w-10"
                        src="../../sassets/portrait-misc.png"
                        alt=""
                      />
                    </li>

                    <!--
                    Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

                    Highlighted: "bg-gray-100", Not Highlighted: "bg-white"
                  --></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
