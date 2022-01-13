<script>
export default {
  data() {
    return {
      subs: [
        { id: '1', name: 'Test One', posts: 1, messages: 2 },
        { id: '2', name: 'Test Face', posts: 1, messages: 2 },
        { id: '3', name: 'Test Face', posts: 0, messages: 0 },
        { id: '4', name: 'Test Face', posts: 0, messages: 0 },
        { id: '5', name: 'Test Face', posts: 0, messages: 0 },
        { id: '6', name: 'Test Face', posts: 0, messages: 0 }
      ]
    }
  }
}
</script>

<template>
  <div class="subs w-full gap-y-4 py-6">
    <div class="grid">
      <p class="subs__title text-xl font-bold mx-4">Your Subs</p>
      <div class="subs__list my-4 grid">
        <div
          v-for="sub in subs"
          v-bind:key="sub.id"
          class="
            sub
            px-4
            py-4
            w-full
            flex flex-row
            items-center
            cursor-pointer
            bg-white
            hover:bg-gray-100
            transition
            ease-in-out
          "
          :class="{ 'sub--inactive': sub.posts <= 0 && sub.messages <= 0 }"
        >
          <div class="shrink-0">
            <img
              class="sub__image aliased mr-4 h-10 w-10"
              src="../../assets/portrait-misc.png"
            />
          </div>
          <div class="sub__info">
            <h3
              class="
                sub__name
                text-sm
                uppercase
                font-bold
                tracking-tight
                leading-4
              "
            >
              {{ sub.name }}
            </h3>
            <p class="sub__posts text-sm leading-4">
              <span class="sub__text active">{{ sub.posts }} New Posts</span>
            </p>
          </div>
        </div>
      </div>
      <p class="subs__show text-base mx-4 underline">Show more</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sub--inactive {
  @apply opacity-30 grayscale hover:bg-white;
}
.sub__text {
  @apply opacity-50 text-gray-700;
  &.active {
    @apply underline opacity-100 text-black;
  }
}
</style>
