<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ThumbsDownEllipseIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the thumb jabs down inside the ring
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const thumbVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.2px)',
      'translate(0px, -0.24px)',
      'translate(0px, 0.6px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.66, times: [0, 0.24, 0.5, 0.72, 1], ease: 'easeInOut' },
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
            <motion.path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M13.1525 15.2136L12.975 14.6571C12.8295 14.201 12.7567 13.973 12.8127 13.793C12.8579 13.6473 12.9573 13.5217 13.0927 13.4391C13.26 13.3369 13.5131 13.3369 14.0194 13.3369H14.2887C16.0021 13.3369 16.8588 13.3369 17.2634 12.8447C17.3097 12.7884 17.3508 12.7286 17.3864 12.6659C17.6977 12.1168 17.3438 11.3773 16.636 9.89811C15.9865 8.54072 15.6617 7.86203 15.0587 7.46255C15.0003 7.42387 14.9403 7.3874 14.8789 7.3532C14.244 7 13.4574 7 11.8843 7H11.5431C9.63715 7 8.68419 7 8.09209 7.55681C7.5 8.11363 7.5 9.00981 7.5 10.8022V11.4321C7.5 12.3741 7.5 12.845 7.67223 13.2761C7.84445 13.7071 8.17424 14.0616 8.8338 14.7705L11.5614 17.702C11.6298 17.7755 11.664 17.8123 11.6942 17.8378C11.9757 18.0755 12.4102 18.0488 12.6563 17.7785C12.6826 17.7495 12.7115 17.7089 12.7691 17.6276C12.8592 17.5004 12.9043 17.4369 12.9436 17.3739C13.2952 16.81 13.4016 16.1401 13.2405 15.5042C13.2225 15.4332 13.1992 15.3599 13.1525 15.2136Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="thumbVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.6px 12.5px' }" />
          </svg>
        </div>
</template>
