<script>
export default {
  props: ['text', 'type']
}
</script>
<template>
  <div class="rounded-md">
    <a
      href="#"
      class="button"
      :class="{
        'button--primary': type == 'primary',
        'button--secondary': type == 'secondary'
      }"
    >
      <span>{{ text }}</span>
    </a>
  </div>
</template>

<style scoped lang="scss">
.button {
  @apply w-full flex items-center justify-center px-8 py-4 rounded-md;

  &--primary {
    @apply uppercase text-base text-white bg-indigo-600 hover:bg-indigo-700 font-bold tracking-wide;

    border: solid;
    border-width: 4px;
    border-image: url(../assets/border-button-primary.png) 2 repeat;
  }
  &--secondary {
    @apply uppercase text-base text-black bg-white hover:bg-gray-100 font-bold tracking-wide;

    border: solid;
    border-width: 4px;
    border-image: url(../assets/border-button-primary.png) 2 repeat;
  }
}
</style>
