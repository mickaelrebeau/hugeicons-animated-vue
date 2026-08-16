<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MailReply01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after mail-01: the envelope flap opens and the body catches its return
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['scaleX(1) scaleY(1)', 'scaleX(1.03) scaleY(0.96)', 'scaleX(0.99) scaleY(1.02)', 'scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.68,
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
            <motion.path d="M1.99989 4.99994L8.91291 8.92456C11.4386 10.3584 12.5612 10.3584 15.0869 8.92456L21.9999 4.99994" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.96px 11.03px' }" />
            <motion.path d="M21.9193 11.0333C21.9193 10.54 21.9141 10.0466 21.9036 9.55189C21.8386 6.47433 21.806 4.93555 20.6795 3.79566C19.5528 2.65578 17.985 2.61607 14.8491 2.53665C12.9164 2.4877 11.0028 2.4877 9.07012 2.53664C5.93431 2.61605 4.3664 2.65576 3.23983 3.79565C2.11325 4.93554 2.08071 6.47432 2.01559 9.55188C1.99465 10.5415 1.99466 11.5251 2.0156 12.5147C2.08071 15.5923 2.11326 17.131 3.23984 18.271C4.3664 19.4108 5.93431 19.4505 9.07013 19.5299C10.0365 19.5544 10.998 19.5666 11.9596 19.5666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.96px 11.03px' }" />
            <motion.path d="M22.0001 21.5003C21.884 18.9757 21.9869 18.0573 20.3438 16.8792C19.5362 16.3002 17.9115 15.9188 15.7177 16.1247M17.4519 13.5927L15.1552 15.7463C14.9611 15.9406 14.9597 16.256 15.1519 16.452L17.4519 18.6401" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.96px 11.03px' }" />
          </svg>
        </div>
</template>
