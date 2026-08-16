<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AffiliateIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the affiliate take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.25deg)', 'scale(1.1) rotate(2.1deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.84px) rotate(-2.16deg)', 'translateY(0.43px) rotate(0.76deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M21.9644 4.50615C21.9644 4.50615 22.1405 2.72142 21.7095 2.29048M21.7095 2.29048C21.276 1.85699 19.4941 2.0371 19.4941 2.0371M21.7095 2.29048L19 4.99997" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '20.57px 3.43px' }" />
            <motion.path d="M21.9644 19.4938C21.9644 19.4938 22.1405 21.2785 21.7095 21.7095M21.7095 21.7095C21.276 22.143 19.4941 21.9629 19.4941 21.9629M21.7095 21.7095L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '20.57px 20.57px' }" />
            <motion.path d="M2.29048 2.29047L5 4.99997M2.29048 2.29047C2.72397 1.85699 4.50593 2.0371 4.50593 2.0371M2.29048 2.29047C1.85953 2.72142 2.03561 4.50614 2.03561 4.50614" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '3.43px 3.43px' }" />
            <motion.path d="M2.29048 21.7095L5 19M2.29048 21.7095C2.72397 22.143 4.50593 21.9629 4.50593 21.9629M2.29048 21.7095C1.85953 21.2786 2.03561 19.4939 2.03561 19.4939" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '3.43px 20.57px' }" />
            <motion.path d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M11.914 9.30127C10.8094 9.30127 10 9.94342 10 10.6887C10 11.4339 10.5219 11.8999 12 11.8999C13.6282 11.8999 14 12.6423 14 13.3875C14 14.1328 13.2883 14.7214 11.914 14.7214M11.914 9.30127C12.7848 9.30127 13.2451 9.60613 13.6086 10.0165M11.914 9.30127V8.45703M11.914 14.7214C11.0432 14.7214 10.7046 14.5494 10.225 14.1154M11.914 14.7214V15.5088" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.98px' }" />
          </svg>
        </div>
</template>
