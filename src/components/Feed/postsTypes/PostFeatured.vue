<script>
export default {
  props: ['post']
}
</script>

<template>
  <div class="w-full px-6">
    <div
      class="
        featured
        w-full
        text-white
        bg-blue-800
        hover:bg-blue-900
        transition
        ease-in-out
        text-left
        p-10
        my-6
        grow
      "
    >
      <h2 class="text-2xl">{{ post.content.title }}</h2>
      <div class="h-0.5 bg-white opacity-30 w-16 my-4"></div>
      <p class="text-base opacity-70">{{ post.content.text }}</p>
    </div>
  </div>
</template>
