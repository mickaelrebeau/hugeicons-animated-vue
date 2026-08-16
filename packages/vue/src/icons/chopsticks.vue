<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChopsticksIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the chopsticks loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.48px) scaleY(0.82)', 'translateY(-3.58px) scaleY(1.08)', 'translateY(0.53px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M16.4548 9.76893L18.1572 11.4713M13.7311 8.04518L12.0287 6.34283M20.5523 7.05701L21.2095 7.71427C21.6057 8.11046 21.5952 8.75196 21.1865 9.12111L8.30613 20.7545C7.92529 21.0985 7.33645 21.0787 6.96729 20.7095L6.93352 20.6758C6.55091 20.2932 6.54562 19.6781 6.92169 19.3021L19.1786 7.04518C19.5546 6.6691 20.1697 6.6744 20.5523 7.05701ZM16.443 3.94772L15.7857 3.29045C15.3895 2.89426 14.748 2.90477 14.3789 3.3135L2.74549 16.1939C2.40152 16.5747 2.4213 17.1636 2.79046 17.5327L2.82423 17.5665C3.20683 17.9491 3.82186 17.9544 4.19793 17.5783L16.4548 5.32142C16.8309 4.94535 16.8256 4.33032 16.443 3.94772Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.1px' }" />
          </svg>
        </div>
</template>
