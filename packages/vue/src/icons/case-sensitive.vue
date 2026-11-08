<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CaseSensitiveIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the capital shrinks while the small letter swells, then both return
// authored from scripts/authored
const smallVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -1.23px) scaleY(1.35)',
      'translate(0px, -1.23px) scaleY(1.35)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.66,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const capitalVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 1.62px) scaleY(0.72)',
      'translate(0px, 1.62px) scaleY(0.72)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.66,
      times: [0, 0.26, 0.72, 1],
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
            <motion.path d="M21.5 10V17M21.5 13.5C21.5 15.433 19.933 17 18 17C16.067 17 14.5 15.433 14.5 13.5C14.5 11.567 16.067 10 18 10C19.933 10 21.5 11.567 21.5 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="smallVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 13.5px' }" />
            <motion.path d="M5.12734 10.0987L5.82827 10.3655V10.3655L5.12734 10.0987ZM1.79908 16.7332C1.6517 17.1203 1.84605 17.5536 2.23316 17.7009C2.62027 17.8483 3.05355 17.654 3.20092 17.2668L2.5 17L1.79908 16.7332ZM10.7991 17.2668C10.9464 17.654 11.3797 17.8483 11.7668 17.7009C12.154 17.5536 12.3483 17.1203 12.2009 16.7332L11.5 17L10.7991 17.2668ZM8.87266 10.0987L8.17173 10.3655V10.3655L8.87266 10.0987ZM4 13.25C3.58579 13.25 3.25 13.5858 3.25 14C3.25 14.4142 3.58579 14.75 4 14.75V14V13.25ZM10 14.75C10.4142 14.75 10.75 14.4142 10.75 14C10.75 13.5858 10.4142 13.25 10 13.25V14V14.75ZM5.12734 10.0987L4.42642 9.83181L1.79908 16.7332L2.5 17L3.20092 17.2668L5.82827 10.3655L5.12734 10.0987ZM11.5 17L12.2009 16.7332L9.57358 9.83181L8.87266 10.0987L8.17173 10.3655L10.7991 17.2668L11.5 17ZM5.12734 10.0987L5.82827 10.3655C6.23034 9.30935 6.50423 8.59494 6.75631 8.13531C7.02854 7.63894 7.10953 7.75 7 7.75V7V6.25C6.19747 6.25 5.73535 6.87751 5.44111 7.41402C5.12672 7.98727 4.81078 8.8222 4.42642 9.83181L5.12734 10.0987ZM8.87266 10.0987L9.57358 9.83181C9.18922 8.82219 8.87328 7.98727 8.55889 7.41402C8.26465 6.87751 7.80253 6.25 7 6.25V7V7.75C6.89047 7.75 6.97146 7.63894 7.24369 8.13531C7.49577 8.59494 7.76966 9.30934 8.17173 10.3655L8.87266 10.0987ZM4 14V14.75H10V14V13.25H4V14Z" fill="currentColor" :variants="capitalVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
          </svg>
        </div>
</template>
