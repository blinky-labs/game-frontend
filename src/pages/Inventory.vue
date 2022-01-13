<script setup>
import Dashboard from '../layouts/Dashboard.vue'
import InventoryPanel from '../components/Inventory/InventoryPanel.vue'
</script>

<template>
  <Dashboard>
    <main>
      <div class="panel h-full">
        <InventoryPanel />
      </div>
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
