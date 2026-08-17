<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BetweenVerticalStartIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// both columns drop to the start, the top caret pushing them down
// authored from scripts/authored
const colRVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2px)',
      'translate(0.00px, -0.24px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.28, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const caretVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.6px)',
      'translate(0px, -0.192px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
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
            <motion.path d="M21 18.5L21 11.5C21 10.5694 21 10.104 20.8776 9.72746C20.6303 8.96636 20.0336 8.36965 19.2725 8.12236C18.896 8 18.4306 8 17.5 8C16.5694 8 16.104 8 15.7275 8.12236C14.9664 8.36965 14.3697 8.96636 14.1224 9.72746C14 10.104 14 10.5694 14 11.5L14 18.5C14 19.4306 14 19.896 14.1224 20.2725C14.3697 21.0336 14.9664 21.6303 15.7275 21.8776C16.104 22 16.5694 22 17.5 22C18.4306 22 18.896 22 19.2725 21.8776C20.0336 21.6303 20.6303 21.0336 20.8776 20.2725C21 19.896 21 19.4306 21 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="colRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 15px' }" />
            <motion.path d="M10 18.5L10 11.5C10 10.5694 10 10.104 9.87764 9.72746C9.63035 8.96636 9.03364 8.36965 8.27254 8.12236C7.89596 8 7.43064 8 6.5 8C5.56936 8 5.10404 8 4.72746 8.12236C3.96636 8.36965 3.36965 8.96636 3.12236 9.72746C3 10.104 3 10.5694 3 11.5L3 18.5C3 19.4306 3 19.896 3.12236 20.2725C3.36965 21.0336 3.96636 21.6303 4.72746 21.8776C5.10404 22 5.56936 22 6.5 22C7.43064 22 7.89596 22 8.27254 21.8776C9.03364 21.6303 9.63035 21.0336 9.87764 20.2725C10 19.896 10 19.4306 10 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="colRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 15px' }" />
            <motion.path d="M9 2.00002C9 2.00002 11.2095 4.99999 12 5C12.7906 5.00001 15 2 15 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="caretVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
          </svg>
        </div>
</template>
