<!-- Header, Footer, Sidebar and Content -->
<script setup>
import Header from '../components/Global/Header.vue'
import Footer from '../components/Global/Footer.vue'
</script>

<template>
  <div class="h-screen">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
