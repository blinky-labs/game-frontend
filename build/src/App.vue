<script setup>
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">

// Global (yuck) styles. Sorry about that, we can add them into a global SCSS file, but it works well with pixel art borders
// Just a heads up - index.css contains a type file that is linked to my work's Adobe Fonts account... It has great pixel fonts
// We'll probably need to switch that out if we go live... it's a placeholder for now ;)

#app {
  height: 100%;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}

html {
  min-height: 100vh;
}

html,
body {
  padding: 0;
  margin: 0;
  background-color: white;
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-thumb {
  position: relative;
  border: solid;
  border-width: 20px;
  border-image: url(./assets/border-scroll.png) 2 repeat;
  z-index: 1;
}

::-webkit-scrollbar-track {
  background-color: #0a0c0f;
}

body,
img,
.aliased {
  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
}

* {
  box-sizing: border-box;
  font-smooth: never;
  -webkit-font-smoothing: none;
}

html,
body {
  cursor: url(./assets/cursor-normal.png), auto;
}

.cursor-pointer,
a {
  cursor: url(./assets/cursor-hover.png), auto;
}

.cursor-purchase {
  cursor: url(./assets/cursor-purchase.png), auto;
}

p,
span {
  font-family: lores-12, monospace;
}

h1,
h2,
h3,
.heading {
  font-family: 'lores-9-wide';
}

/* Borders */

.border-tiny{
  border: solid;
  border-width: 4px;
  border-image: url(./assets/border-tiny.png) 2 repeat;
}

.border-small{

}

.border-large{
  border: solid;
  border-width: 12px;
  border-image: url(./assets/border-shop-item.png) 6 repeat;
  background-color: #2b3858;
}

</style>
