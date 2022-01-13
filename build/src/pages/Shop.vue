<script setup>
import Dashboard from '../layouts/Dashboard.vue'
import ShopPanel from '../components/Shop/ShopPanel.vue'
</script>

<template>
  <Dashboard>
    <main>
      <div class="panel"><ShopPanel /></div>
    </main>
  </Dashboard>
</template>

<style scoped lang="scss">
.panel__wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.panel {
  &--side {
    height: 100vh;
  }
}
</style>
