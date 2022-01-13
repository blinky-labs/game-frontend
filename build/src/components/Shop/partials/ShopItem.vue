<script>
import Button from '../../Global/Button.vue'

export default {
  methods: {
    getImgUrl(pic) {
      return new URL(pic, import.meta.url).href
    }
  },
  props: ['item', 'active']
}
</script>

<template>
  <li
    class="shopItem cursor-purchase col-span-1 flex justify-center flex-col text-center border-large"
    :class="[
      item.tag.effect ? activeClass : '',
      `animation animation--${item.tag.effect}`
    ]"
  >
    <div class="flex flex-col items-center p-6 z-20">
      <div
        class="item-backdrop relative h-20 w-20 flex items-center justify-center"
      >
        <img
          class="flex-shrink-0 mx-auto"
          width="60"
          height="60"
          :src="getImgUrl(item.src)"
          alt=""
        />
        <p
          class="item-cost absolute -bottom-2 left-0 right-0 heading text-yellow-300 text-base font-bold tracking-tighter uppercase"
        >
          {{ item.cost }}g
        </p>
      </div>

      <p
        class="mt-6 heading text-white text-base font-bold uppercase leading-5"
      >
        {{ item.name }}
      </p>
      <dl class="flex flex-col justify-between">
        <dt class="sr-only">Damage</dt>
        <p class="mt-1 text-white opacity-70 text-sm uppercase leading-5">
          Damage: {{ item.atk }}
        </p>
        <dt class="sr-only">Effects</dt>
        <dd v-if="item.tag.type" class="mt-3 grid gap-2">
          <span
            class="heading truncate mx-auto px-4 py-2 text-white text-xs uppercase bg-black tracking-widest rounded-full"
            >{{ item.tag.type }}</span
          >
        </dd>
      </dl>
    </div>

    <!-- <Button text="Example Here" type="primary" /> -->
  </li>
</template>

<style scoped lang="scss">
.item-cost {
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
}
.item-backdrop {
  background-size: cover;
  background-image: url(../../../assets/shop-item-bg.png);
}
.shopItem {
  @apply relative h-64 uppercase text-base rounded font-bold tracking-wide transition ease-in-out duration-300;

  /* Animation pseudo element */
  &.animation {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: bottom center;
      background-size: 105px;
      background-repeat: repeat-x;
      transition: all 300ms ease-in-out;
      opacity: 0;
      z-index: 10;
    }
  }

  /* Hover effects */
  &:hover {
    background-color: #49609a;

    &.animation::after {
      opacity: 1;
    }

    &.animation--fire {
      background-color: #8e2860;

      &::after {
        background-image: url(../../../assets/effects/fire.gif);
      }
    }

    &.animation--water {
      background-color: rgb(42, 92, 167) 47;

      &::after {
        background-image: url(../../../assets/effects/water.gif);
      }
    }
  }
}
</style>
