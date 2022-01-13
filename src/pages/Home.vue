<script setup>
import Standard from '../layouts/Standard.vue'
import Button from '../components/Global/Button.vue'
import FAQs from '../components/Global/FAQs.vue'
</script>

<template>
  <Standard>
    <div class="relative bg-gray-50">
      <main class="lg:relative">
        <div
          class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-40 lg:text-left"
        >
          <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1
              class="text-2xl max-w-sm tracking-tight font-extrabold text-gray-900 lg:text-4xl"
            >
              <span class="block xl:inline">Social Networking for </span>
              <span class="block text-indigo-600 xl:inline">people</span> &
              <span class="block text-indigo-600 xl:inline">monsters</span>
            </h1>
            <p
              class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div
              class="grid gap-4 mt-10 sm:flex sm:justify-center lg:justify-start"
            >
              <Button text="Example Here" type="primary" />
              <Button text="Example Here" type="secondary" />
            </div>
          </div>
        </div>
        <div
          class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
        >
          <img
            class="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </main>
    </div>

    <FAQs />
  </Standard>

  <!-- Eventually we'll put a roadmap and patreon supporters here -->
</template>

<style scoped lang="scss">
.view__dashboard {
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: calc(100vh - theme('spacing.16'));
}
</style>
