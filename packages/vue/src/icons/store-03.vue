<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Store03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the storefront opens from its awning and settles on its foundation
// generated from @hugeicons/core-free-icons
const markVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: ['hidden', 'visible'],
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
}

const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.95px)', 'translateY(0px)'],
    transition: {
      duration: 0.48,
      ease: 'easeInOut',
      times: [0, 0.35, 1],
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
            <motion.path d="M3.00006 10.9871V15.4925C3.00006 18.3243 3.00006 19.7403 3.87874 20.62C4.75742 21.4998 6.17163 21.4998 9.00006 21.4998H15.0001C17.8285 21.4998 19.2427 21.4998 20.1214 20.62C21.0001 19.7403 21.0001 18.3243 21.0001 15.4925V10.9871" stroke="currentColor" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 16.24px' }" />
            <motion.path d="M15.0001 16.9768C14.316 17.584 13.2269 17.9768 12.0001 17.9768C10.7733 17.9768 9.68415 17.584 9.00006 16.9768" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.09px 12.43px' }" />
            <motion.path d="M17.7957 2.50294L6.14989 2.53202C4.41172 2.44248 3.96606 3.78259 3.96606 4.43768C3.96606 5.02359 3.89061 5.87774 2.8253 7.4831C1.75999 9.08846 1.84004 9.56536 2.44077 10.6767C2.93934 11.5991 4.20747 11.9594 4.86868 12.02C6.96889 12.0678 7.99072 10.2517 7.99072 8.97523C9.03257 12.1825 11.9956 12.1825 13.3159 11.8157C14.6386 11.4483 15.7718 10.1331 16.0391 8.97523C16.1951 10.4142 16.6682 11.2538 18.0663 11.8308C19.5145 12.4284 20.76 11.515 21.3848 10.9294C22.0097 10.3439 22.4107 9.04401 21.2968 7.6153C20.5286 6.63001 20.2085 5.7018 20.1033 4.73977C20.0424 4.18234 19.9888 3.58336 19.5972 3.20219C19.0248 2.64515 18.2036 2.47613 17.7957 2.50294Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.09px 12.43px' }" />
          </svg>
        </div>
</template>
