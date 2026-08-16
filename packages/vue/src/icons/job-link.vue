<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'JobLinkIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after link-01: the chain pulls taut along its existing overlap and relaxes
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.31px)', 'translateX(-0.19px)', 'translateX(0px)'],
    transition: {
      duration: 0.51,
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
            <motion.path d="M11.0065 21.5H9.60546C6.02021 21.5 4.22759 21.5 3.11379 20.365C2 19.2301 2 17.4034 2 13.75C2 10.0966 2 8.26992 3.11379 7.13496C4.22759 6 6.02021 6 9.60546 6H13.4082C16.9934 6 18.7861 6 19.8999 7.13496C20.7568 8.00819 20.9544 9.2909 21 11.5V13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 13.75px' }" />
            <motion.path d="M19 18.5H16M16 21.5C14.3431 21.5 13 20.1569 13 18.5C13 16.8431 14.3431 15.5 16 15.5M19 21.5C20.6569 21.5 22 20.1569 22 18.5C22 16.8431 20.6569 15.5 19 15.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 13.75px' }" />
            <motion.path d="M15.9998 6L15.9004 5.69094C15.4054 4.15089 15.1579 3.38087 14.5686 2.94043C13.9794 2.5 13.1967 2.5 11.6313 2.5H11.3682C9.8028 2.5 9.02011 2.5 8.43087 2.94043C7.84162 3.38087 7.59411 4.15089 7.0991 5.69094L6.99976 6" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 13.75px' }" />
          </svg>
        </div>
</template>
