<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserEditIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pencil scribbles beside the person
// authored from scripts/authored
const pencilVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.6px, 0.6px)',
      'translate(0.5px, -0.2px)',
      'translate(-0.4px, 0.5px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.7, times: [0, 0.22, 0.46, 0.72, 1], ease: 'easeInOut' },
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
            <path d="M15.5 8C15.5 5.23858 13.2614 3 10.5 3C7.73858 3 5.5 5.23858 5.5 8C5.5 10.7614 7.73858 13 10.5 13C13.2614 13 15.5 10.7614 15.5 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M3.5 20C3.5 16.134 6.63401 13 10.5 13C11.775 13 12.9704 13.3409 14 13.9365" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20.1887 14.9339L19.5661 14.3113C19.151 13.8962 18.478 13.8962 18.0629 14.3113L14.7141 17.6601C14.269 18.1052 13.9656 18.6722 13.8421 19.2895L13.5 21L15.2105 20.6579C15.8278 20.5344 16.3948 20.231 16.8399 19.7859L20.1887 16.4371C20.6038 16.022 20.6038 15.349 20.1887 14.9339Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pencilVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.1px 17.4px' }" />
          </svg>
        </div>
</template>
