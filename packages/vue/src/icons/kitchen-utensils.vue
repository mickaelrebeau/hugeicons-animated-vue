<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'KitchenUtensilsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the kitchen utensils separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.44px, -1.24px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.52,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.83px) rotate(-1.03deg)', 'translateY(0.46px) rotate(0.52deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: false,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M11.9831 14.0001V3.00006M11.9831 14.0001C10.3247 14.0001 8.98038 15.4355 8.98038 16.6251C8.98038 18.3751 10.3247 21.0001 11.9831 21.0001C13.6414 21.0001 14.9857 18.3751 14.9857 16.6251C14.9857 15.4355 13.6414 14.0001 11.9831 14.0001Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.98px 12px' }" />
            <motion.path d="M4.97841 10.0283L4.97841 21M3.68615 3.12945L2.90347 3.20753C2.33225 3.26452 1.92596 3.78885 2.01382 4.35564L2.6828 8.67118C2.79612 9.40225 3.426 10.0106 4.16644 10.0106H5.7904C6.53083 10.0106 7.16071 9.40225 7.27404 8.67118L7.94301 4.35564C8.03087 3.78885 7.62458 3.26452 7.05336 3.20753L6.27337 3.12962C5.41311 3.04368 4.54642 3.04363 3.68615 3.12945Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.98px 12.02px' }" />
            <motion.path d="M17.996 13.8182L17.996 3.02594C19.1545 3.34592 21.0815 4.55268 21.4006 7.52842L21.9737 12.0424C22.0743 12.8351 21.8727 13.6261 21.0846 13.7616C20.4244 13.8751 19.4229 13.9122 17.996 13.8182ZM17.996 13.8182L17.996 21.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.04px 12.01px' }" />
          </svg>
        </div>
</template>
