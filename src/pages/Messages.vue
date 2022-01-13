<script setup>
import Dashboard from '../layouts/Dashboard.vue'
import SubPanel from '../components/Global/FriendsPanel.vue'
import MessagePanel from '../components/Messages/MessagePanel.vue'
</script>

<template>
  <Dashboard>
    <main class="panel__wrapper">
      <div class="panel">
        <MessagePanel class="" />
      </div>

      <!-- Friends -->
      <div class="panel relative">
        <SubPanel class="panel--side sticky top-0 border-l-2" />
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
