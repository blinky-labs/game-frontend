<script>
export default {
  props: ['post']
}
</script>

<template>
  <div
    class="
      flex
      w-full
      pl-6
      pr-12
      py-8
      bg-white
      hover:bg-gray-100
      transition
      ease-in-out
    "
  >
    <div class="shrink-0 cursor-pointer">
      <img
        class="post__image aliased mr-4"
        width="52"
        height="52"
        src="../../../assets/portrait-misc.png"
      />
    </div>

    <!-- Post -->
    <div class="grow post__wrapper">
      <div class="post__user mb-2 cursor-pointer">
        <h3 class="post__name text-sm uppercase font-bold tracking-tight">
          {{ post.user.name }}
        </h3>
        <p class="opacity-50 text-sm">
          {{ post.user.handle }} - {{ post.meta.postAge }}h
        </p>
      </div>

      <!-- Text -->
      <p class="post__text text-base mb-2">
        {{ post.content.text }}
      </p>

      <!-- Hashtags-->
      <ul class="post__hashtag-list">
        <li
          v-for="hashtag in post.content.hashtags"
          v-bind:key="hashtag"
          class="post__hashtag-item inline-block mr-2 text-base"
        >
          <span
            class="
              post__hashtag-text
              text-sm text-blue-500
              hover:underline
              cursor-pointer
            "
            >#{{ hashtag }}</span
          >
        </li>
      </ul>

      <!-- Media -->
      <div v-if="post.content.media">
        <div
          class="
            post__media
            mt-4
            cursor-pointer
            hover:opacity-50
            transition
            ease-in-out
          "
        >
          <img
            class="post__media w-full max-w-lg"
            src="https://via.placeholder.com/200x240"
          />
        </div>
      </div>

      <!-- Meta -->
      <div class="post__meta text-sm grid grid-cols-4 mt-4">
        <div class="post__likes flex items-center">
          <img class="w-6 mr-2" src="https://via.placeholder.com/150" />
          <span>{{ post.meta.likes }}</span>
        </div>

        <div class="post__comments flex">
          <img class="w-6 mr-2" src="https://via.placeholder.com/150" />
          <span>{{ post.meta.likes }}</span>
        </div>

        <div class="post__comments flex">
          <img class="w-6 mr-2" src="https://via.placeholder.com/150" />
          <span>{{ post.meta.likes }}</span>
        </div>

        <div class="post__comments flex">
          <img class="w-6 mr-2" src="https://via.placeholder.com/150" />
          <span>{{ post.meta.likes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
