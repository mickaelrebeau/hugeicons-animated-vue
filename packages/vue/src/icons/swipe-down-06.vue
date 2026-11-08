<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SwipeDown06Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hand flicks and the arrow flies off down, re-entering behind
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0px, 3px)', 'translate(0px, -3px)', 'translate(0px, 0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.1,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0.8px)',
      'translate(0px, -0.12px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M18.5011 8.00838V2.01758M18.5011 8.00838C17.8011 8.00838 16.4933 6.01714 16.002 5.51221M18.5011 8.00838C19.201 8.00838 20.5088 6.01714 21.0001 5.51221" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 5px' }" />
            <motion.path d="M6.51287 13.5149V3.48587C6.51287 2.66424 7.17971 1.99817 8.00229 1.99817C8.82488 1.99817 9.49172 2.66423 9.49172 3.48587V8.68796M9.49172 8.68796V11.0116M9.49172 8.68796C10.2966 7.56953 12.0992 7.94205 12.4829 9.68091C12.4893 9.70978 12.4945 9.73886 12.4986 9.7681M12.5138 11.0076V10.0047C12.5138 9.92562 12.5098 9.84631 12.4986 9.7681M12.4986 9.7681C12.9919 8.41774 15.5029 8.92645 15.5029 10.861M15.5029 10.861V12.007M15.5029 10.861C15.9068 9.37047 18.5587 10.4122 18.5012 12.1546V15.3331C18.4983 17.0591 18.2102 18.3107 17.184 19.3401C16.236 20.4719 16.459 21.1055 16.4354 22.0018M6.51287 8.99062C5.19394 10.1845 3.69696 11.816 3.50583 12.2024C2.61652 13.5545 2.9328 14.6154 4.19663 16.4176C5.13716 17.7588 6.39863 19.2535 6.46472 19.3283C7.13732 20.0897 7.0055 20.6959 7.0055 21.9908" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.6px 12px' }" />
          </svg>
        </div>
</template>
