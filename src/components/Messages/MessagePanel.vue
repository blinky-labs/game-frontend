<script>
import Message from './partials/Message.vue'

export default {
  data() {
    return {}
  },
  components: { Message }
}
</script>

<template>
  <div class="feed w-full grid">
    <div class="feed__list grid gap-6 p-6 border-t-2 grid bg-white">
      <Message position="reverse" />
      <Message />
    </div>
  </div>
</template>

<style scoped lang="scss">
.featured {
  border: solid;
  border-width: 4px;
  border-image: url(../assets/border-tiny.png) 2 repeat;
}
</style>
