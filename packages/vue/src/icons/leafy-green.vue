<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LeafyGreenIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the leafy green move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.87px) rotate(-2.2deg)', 'translateY(0.44px) rotate(0.77deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M3.94906 20.051L3 21M3.94906 20.051C5.52151 18.4785 8.07096 18.4785 9.64341 20.051C10.8664 21.274 12.8493 21.274 14.0723 20.051C14.6519 19.4714 14.9559 18.7211 14.9862 17.962C16.0741 18.3212 17.3195 18.0692 18.1849 17.2038C19.1704 16.2184 19.3615 14.7398 18.7589 13.5627C19.2436 13.4195 19.7006 13.1574 20.083 12.775C21.3061 11.552 21.3054 9.56849 20.0824 8.34549C21.2833 7.12081 21.2764 5.15506 20.0608 3.93949C18.8452 2.72392 16.8788 2.71643 15.6541 3.91725C14.4311 2.69425 12.4482 2.69425 11.2252 3.91725C10.8428 4.29961 10.58 4.75625 10.4368 5.24072C9.25978 4.63862 7.78146 4.83012 6.79623 5.81533C5.93105 6.6805 5.67858 7.92572 6.03748 9.0134C5.27852 9.04379 4.5285 9.34841 3.94906 9.92785C2.72604 11.1508 2.72604 13.1337 3.94906 14.3567C5.52151 15.9291 5.52151 18.4785 3.94906 20.051Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.02px 21.27px' }" />
            <motion.path d="M5 19L15 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.02px 21.27px' }" />
          </svg>
        </div>
</template>
