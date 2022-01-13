<!-- Header, Footer, Sidebar and Content -->
<script setup>
import MenuPanel from '../components/Global/MenuPanel.vue'
import Header from '../components/Global/Header.vue'
import Footer from '../components/Global/Footer.vue'
</script>

<template>
  <div class="">
    <Header />
    <div class="2xl:container 2xl:mx-auto">
      <!-- Player Details -->
      <div class="view__dashboard">
        <div class="panel relative">
          <MenuPanel class="panel h-full sticky top-0 border-r-2" />
        </div>
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.view__dashboard {
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: calc(100vh - theme('spacing.16'));
}
.panel {
  &--fixed {
    position: fixed; // See link
    top: 0; //to make it stick to the top of the screen
    // height: 100vh; // make the height equal to 100 view height
  }
}
</style>
