<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CarTimeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the clock hands sweep a full turn while the badge ticks
// authored from scripts/authored
const badgeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.36, delay: 0.6, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const handsVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.12px, 1.36px) rotate(80deg)',
      'translate(-1.81px, 0.84px) rotate(220deg)',
      'translate(-0.30px, -0.21px) rotate(340deg)',
      'translate(-0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.82,
      times: [0, 0.2, 0.5, 0.8, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
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
            <path d="M4 12L3.3436 12.9846C2.67671 13.9849 2.34326 14.4851 2.17163 15.052C2 15.6188 2 16.22 2 17.4222V20.5C2 20.9659 2 21.1989 2.07612 21.3827C2.17761 21.6277 2.37229 21.8224 2.61732 21.9239C2.80109 22 3.03406 22 3.5 22C3.96594 22 4.19891 22 4.38268 21.9239C4.62771 21.8224 4.82239 21.6277 4.92388 21.3827C5 21.1989 5 20.9659 5 20.5C5 20.0341 5 19.8011 5.07612 19.6173C5.17761 19.3723 5.37229 19.1776 5.61732 19.0761C5.80109 19 6.03406 19 6.5 19H17.5C17.9659 19 18.1989 19 18.3827 19.0761C18.6277 19.1776 18.8224 19.3723 18.9239 19.6173C19 19.8011 19 20.0341 19 20.5C19 20.9659 19 21.1989 19.0761 21.3827C19.1776 21.6277 19.3723 21.8224 19.6173 21.9239C19.8011 22 20.0341 22 20.5 22C20.9659 22 21.1989 22 21.3827 21.9239C21.6277 21.8224 21.8224 21.6277 21.9239 21.3827C22 21.1989 22 20.9659 22 20.5V17.4222C22 16.22 22 15.6188 21.8284 15.052C21.6567 14.4851 21.3233 13.9849 20.6564 12.9846L20 12L18.4777 12.3806C18.2392 12.4402 18.1199 12.47 17.9982 12.485C17.8764 12.5 17.7535 12.5 17.5076 12.5H6.49242C6.24652 12.5 6.12357 12.5 6.00184 12.485C5.88012 12.47 5.76084 12.4402 5.52228 12.3806L4 12ZM4 12L4.96154 9.69231C5.70726 7.90257 6.08013 7.0077 6.8359 6.50385C7.59167 6 8.56112 6 10.5 6M4 12L2 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.circle cx="17" cy="6" r="4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="badgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 6px' }" />
            <motion.path d="M17 4V6L18.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.75px 5.25px' }" />
            <path d="M6.125 16H6M6.25 16C6.25 16.1381 6.13807 16.25 6 16.25C5.86193 16.25 5.75 16.1381 5.75 16C5.75 15.8619 5.86193 15.75 6 15.75C6.13807 15.75 6.25 15.8619 6.25 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18.125 16H18M18.25 16C18.25 16.1381 18.1381 16.25 18 16.25C17.8619 16.25 17.75 16.1381 17.75 16C17.75 15.8619 17.8619 15.75 18 15.75C18.1381 15.75 18.25 15.8619 18.25 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
