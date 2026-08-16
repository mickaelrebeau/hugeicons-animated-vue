<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SmartAcIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sparkles: the smart accents answer one another around the primary object
// generated from @hugeicons/core-free-icons
const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.55px) scale(1.2)', 'translateY(0.36px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.42, ease: 'easeOut', delay: i * 0.08 },
  }),
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
            <motion.path d="M16 3C18.3389 3 19.5083 3 20.3621 3.53647C20.8073 3.81621 21.1838 4.19267 21.4635 4.63789C22 5.49167 22 6.66111 22 9C22 11.3389 22 12.5083 21.4635 13.3621C21.1838 13.8073 20.8073 14.1838 20.3621 14.4635C19.5083 15 18.3389 15 16 15L8 15C5.66111 15 4.49167 15 3.63789 14.4635C3.19267 14.1838 2.81621 13.8073 2.53647 13.3621C2 12.5083 2 11.3389 2 9C2 6.66111 2 5.49167 2.53647 4.63789C2.81621 4.19267 3.19267 3.81621 3.63789 3.53647C4.49167 3 5.66111 3 8 3L16 3Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M7 12H17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6 21C7.10457 21 8 20.1046 8 19V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 19.5px' }" />
            <motion.path d="M18 21C16.8954 21 16 20.1046 16 19V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 19.5px' }" />
            <motion.path d="M12 18V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.5px' }" />
            <motion.path d="M18.125 7H18M18.25 7C18.25 7.13807 18.1381 7.25 18 7.25C17.8619 7.25 17.75 7.13807 17.75 7C17.75 6.86193 17.8619 6.75 18 6.75C18.1381 6.75 18.25 6.86193 18.25 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 7px' }" />
          </svg>
        </div>
</template>
