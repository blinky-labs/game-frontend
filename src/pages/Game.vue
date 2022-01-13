
<template>
  <Fullscreen>
    <div class="w-screen h-screen flex items-center justify-center bg-gray-900">
      <div :id="containerId" v-if="downloaded" />
      <h3 v-else class="text-white text-sm font-medium">Downloading ...</h3>
    </div>
  </Fullscreen>
</template>

<script>
export default {
  data() {
    return {
      downloaded: false,
      gameInstance: null,
      containerId: 'game-container'
    }
  },
  async mounted() {
    const game = await import(/* webpackChunkName: "game" */ '../game/game')

    this.downloaded = true
    this.$nextTick(() => {
      this.gameInstance = game.launch(this.containerId)
    })
  },
  destroyed() {
    this.gameInstance.destroy(false)
  }
}
</script>

<style lang="scss" scoped>
#game-container {
  width: 100vw;
  height: 100vh;

  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
