<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TropicalStormTracks02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cloud-rain: drops fall through the glyph while the cloud holds
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.12px)', 'translateY(0.28px)', 'translateY(0px)'],
    transition: {
      duration: 0.75,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const dropVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
    opacity: 1,
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(3.79px)', 'translateY(-2.7px)', 'translateY(0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.73,
      times: [0, 0.42, 0.5, 1],
      ease: ['easeIn', 'linear', 'easeOut'],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M12.1564 7.23099L11.2883 6.15969L14.2119 4.24954C4.58902 2.72954 3.15548 8.6394 3.09662 8.90429L3.09093 8.9298L3.08206 8.96494C2.87776 9.71974 2.85964 10.5136 3.02917 11.2825C3.1987 12.0514 3.55113 12.774 4.05808 13.3919L4.92616 14.4632L2 16.3749C11.6227 17.904 13.0587 11.9839 13.1177 11.7185L13.1234 11.693L13.1322 11.6579C13.3366 10.9031 13.3547 10.1093 13.1852 9.34036C13.0157 8.57144 12.6633 7.84892 12.1564 7.23099Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.11px 10.32px' }" />
            <motion.circle cx="8.10593" cy="10.312" r="2.23093" stroke="currentColor" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.11px 10.31px' }" />
            <motion.path d="M19.5 7V12.5C19.5 16.6421 16.1421 20 12 20M19.5 7C20.2002 7 21.5085 8.9943 22 9.5M19.5 7C18.7998 7 17.4915 8.9943 17 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 13.5px' }" />
          </svg>
        </div>
</template>
