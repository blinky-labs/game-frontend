<script>
export default {
  props: ['post']
}
</script>

<template>
  <div
    class="
      advert
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
    <div class="post__wrapper grow">
      <div class="post__user mb-2 cursor-pointer">
        <h3 class="post__name text-sm uppercase font-bold tracking-tight">
          {{ post.business.name }}
        </h3>
        <p class="text-sm">
          <strong class="text-blue-800">Promoted Content</strong>
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
            src="https://via.placeholder.com/300x150"
          />
        </div>
      </div>
    </div>
  </div>
</template>
