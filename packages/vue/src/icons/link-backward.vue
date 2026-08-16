<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LinkBackwardIcon' })

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
    transform: ['translateX(0px)', 'translateX(1.53px)', 'translateX(-0.22px)', 'translateX(0px)'],
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
            <motion.path d="M11 8.5H10.5V4.69635C10.5 4.31176 10.1882 4 9.80365 4C9.61002 4 9.42513 4.08062 9.29338 4.22252L3.34023 10.6336C3.12154 10.8691 3 11.1786 3 11.5C3 11.8214 3.12154 12.1309 3.34023 12.3664L9.29338 18.7775C9.42513 18.9194 9.61002 19 9.80365 19C10.1882 19 10.5 18.6882 10.5 18.3037V14.5C16.0544 14.5 19.0531 18.5162 19.808 19.6847C19.9326 19.8776 20.1429 20 20.3725 20C20.7191 20 21 19.7191 21 19.3725V18.5C21 12.9772 16.5228 8.5 11 8.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
