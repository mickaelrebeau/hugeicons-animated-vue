<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CheeseCakeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cherry dangles from its stem while the plate draws under the slice
// authored from scripts/authored
const plateVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.2,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const plate2Variants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.3,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const cherryVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.06px, 0.55px) rotate(-16deg)',
      'translate(-0.57px, -0.49px) rotate(10deg)',
      'translate(0.25px, 0.17px) rotate(-4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.86,
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
            <motion.path d="M3.53857 17H11.0506" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plateVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.5625 17H21.0665" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plate2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.5349 5C13.9155 5 15.0347 6.11929 15.0347 7.5C15.0347 8.88071 13.9155 10 12.5349 10C11.1543 10 10.0352 8.88071 10.0352 7.5C10.0352 6.11929 11.1543 5 12.5349 5ZM12.5349 5C12.7016 4.5 13.4348 3.4 15.0347 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cherryVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 6.5px' }" />
            <path d="M10.0211 8.01515C4.0718 10.2637 1.67243 11.3016 2.03618 12.0464C4.0153 12.9815 7.65111 12.7408 11.3713 12.6013C12.395 12.5629 13.4057 13.0702 13.6378 14.0777C13.8018 14.7892 13.8451 15.4095 14.1685 15.8037C14.3539 16.0297 14.6692 16.1064 14.9506 16.0328C15.7109 15.8339 16.0253 14.9842 16.4006 13.4934C16.4739 13.2023 16.5778 12.8898 16.8591 12.7922C18.1194 12.3548 21.9985 13.3195 21.9985 11.5425C21.9359 9.69223 21.2623 8.5396 19.0996 6.82532C18.4038 6.2738 17.5249 6.00007 16.6431 6.07086C15.7179 6.14513 15.2869 6.26557 15.0117 6.50345" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2.01318 11.9929L2.98852 16.2983C3.48803 18.5523 3.73778 19.6792 4.56049 20.3396C5.38321 21 6.5374 21 8.84578 21H17.4232C19.1456 21 20.0069 21 20.5784 20.482C21.15 19.964 21.2344 19.1069 21.4035 17.3926L21.994 11.6337" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
