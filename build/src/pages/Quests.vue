<script setup>
import Dashboard from '../layouts/Dashboard.vue'
import QuestsPanel from '../components/Quests/QuestPanel.vue'
</script>

<template>
  <Dashboard>
    <main>
      <div class="panel h-full">
        <QuestsPanel />
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
