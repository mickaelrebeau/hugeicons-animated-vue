<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Projector01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the projector separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.84px) rotate(-1.05deg)', 'translateY(0.47px) rotate(0.52deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.47px, -1.26px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M11.5 10H6.5C4.62513 10 3.6877 10 3.03054 10.4775C2.8183 10.6317 2.63166 10.8183 2.47746 11.0305C2 11.6877 2 12.6251 2 14.5C2 16.3749 2 17.3123 2.47746 17.9695C2.63166 18.1817 2.8183 18.3683 3.03054 18.5225C3.6877 19 4.62513 19 6.5 19H17.5C19.3749 19 20.3123 19 20.9695 18.5225C21.1817 18.3683 21.3683 18.1817 21.5225 17.9695C22 17.3123 22 16.3749 22 14.5C22 12.6251 22 11.6877 21.5225 11.0305C21.3683 10.8183 21.1817 10.6317 20.9695 10.4775C20.5172 10.1488 19.9321 10.0464 19 10.0145" stroke="currentColor" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.circle cx="15.5" cy="10" r="3.5" stroke="currentColor" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 10px' }" />
            <motion.path d="M6.5 19L5 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.75px 20.5px' }" />
            <motion.path d="M17.5 19L19 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.25px 20.5px' }" />
            <motion.path d="M12.5 5L11.5 4M19.5 4L18.5 5M15.5 4V2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 3.5px' }" />
            <motion.path d="M6.125 14H6M6.25 14C6.25 14.1381 6.13807 14.25 6 14.25C5.86193 14.25 5.75 14.1381 5.75 14C5.75 13.8619 5.86193 13.75 6 13.75C6.13807 13.75 6.25 13.8619 6.25 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 14px' }" />
          </svg>
        </div>
</template>
