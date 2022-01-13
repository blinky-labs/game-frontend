<!-- This will eventually be the loading screen for dynamically loaded items -->
<script></script>

<template>
  <div class="logo">
  </div>
</template>

<style scoped lang="scss">
.logo {
  border: solid;
  border-width: 28px;
  border-image: url(../assets/border-large.png) 14 repeat;
  z-index: 1;

  img {
    display: block;
    margin: 1rem auto;
  }
}

.loading {
  max-width: 320px;
  width: 100%;

  &__progress {
    margin: 2rem auto;
    height: 60px;
    border: 4px solid white;
  }
  &__innerbar {
    width: 50%;
    height: 100%;
    border: 4px solid #1a1e25;
    background-color: white;
  }
}

.animation {
  &.animation-spin {
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      50% {
        // -webkit-filter: blur(1px);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
