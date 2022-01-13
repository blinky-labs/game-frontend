<script>
export default {
  data() {
    return {
      faqsList: [
        {
          id: 1,
          question: 'The game looks odd / doesn\'t work in my browser',
          answer:
            'The site is built some styles that may not be supported by certain browsers... it uses some fairly weird CSS styles to give it a pixel-art style. I recommend using the latest version of Chrome or Firefox, but if you see anything odd. Feel free to report bugs on the Discord channel.'
        },
        {
          id: 1,
          question: 'Is there a mobile version?',
          answer:
            'Currently mobile is in the pipeline, but the main focus is to get Desktop and content working first.'
        },
        {
          id: 2,
          question: 'Where is my data saved?',
          answer:
            'All data is saved in local storage, so you might notice some difficulties if you run the game in incognito or delete your cached files. To remedy this, there will eventually be a skip feature for those of you having problems.'
        },
        {
          id: 3,
          question: 'When is the next version releasing?',
          answer:
            'Keep updated on Discord or Patreon for the latest information.'
        }
      ]
    }
  }
}
</script>
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-2xl font-extrabold text-gray-900">FAQs</h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <div v-for="faq in faqsList" v-bind:key="faq.id" class="pt-6">
            <dt class="text-lg">
              <!-- Expand/collapse question button -->
              <button
                type="button"
                class="
                  text-left
                  w-full
                  flex
                  justify-between
                  items-start
                  text-gray-400
                "
                aria-controls="faq-0"
                aria-expanded="false"
              >
                <span class="font-bold text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                  <svg
                    class="rotate-0 h-6 w-6 transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd class="mt-2 pr-12" id="faq-0">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
            </dd>
          </div>

          <!-- More questions... -->
        </dl>
      </div>
    </div>
  </div>
</template>
