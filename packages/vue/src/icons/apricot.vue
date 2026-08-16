<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ApricotIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two halves part a little, then the leaf nods them back together
// authored from scripts/authored
const rightVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(6deg)', 'rotate(-1.5deg)', 'rotate(0deg)'],
    transition: { duration: 0.6, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const leftVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(1.5deg)', 'rotate(0deg)'],
    transition: { duration: 0.6, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const leafVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-12deg)', 'rotate(3deg)', 'rotate(0deg)'],
    transition: { duration: 0.58, delay: 0.08, times: [0, 0.36, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

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
            <motion.path d="M10.201 20C11.3469 21.2447 12.852 22 14.5005 22C18.0903 22 21.0005 18.4183 21.0005 14C21.0005 9.58172 18.0903 6 14.5005 6C11.1858 6 8.39983 9.05369 8 13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 14px' }" />
            <motion.path d="M12 21.3869C11.2304 21.7819 10.3859 22 9.5 22C5.91015 22 3 18.4183 3 14C3 9.58172 5.91015 6 9.5 6C10.3859 6 11.2304 6.21813 12 6.61312" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="leftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 14px' }" />
            <motion.path d="M12 6C12 4.66667 12.6 2 15 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leafVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 4px' }" />
          </svg>
        </div>
</template>
