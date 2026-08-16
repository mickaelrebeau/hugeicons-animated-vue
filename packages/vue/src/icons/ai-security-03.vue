<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiSecurity03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the star turns a quarter inside a shield that keeps breathing around it
// authored from scripts/authored
const starVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(46deg) scale(0.66)',
      'rotate(90deg) scale(1.12)',
      'rotate(90deg) scale(1)',
    ],
    transition: { duration: 0.78, times: [0, 0.36, 0.76, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const shieldVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.978)', 'scale(1.018)', 'scale(1)'],
    transition: { duration: 0.72, delay: 0.08, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M11.6769 8.67348C11.8274 8.43697 12.1726 8.43697 12.3231 8.67348L12.7586 9.35767C13.2401 10.1143 13.8818 10.756 14.6384 11.2375L15.3226 11.6729C15.5591 11.8235 15.5591 12.1687 15.3226 12.3192L14.6384 12.7547C13.8818 13.2362 13.2401 13.8779 12.7586 14.6345L12.3231 15.3187C12.1726 15.5552 11.8274 15.5552 11.6769 15.3187L11.2414 14.6345C10.7599 13.8779 10.1182 13.2362 9.36157 12.7547L8.67738 12.3192C8.44087 12.1687 8.44087 11.8235 8.67738 11.6729L9.36157 11.2375C10.1182 10.756 10.7599 10.1143 11.2414 9.35767L11.6769 8.67348Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="starVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3.9068 5.28387C6.87149 5.4984 8.78311 2.49713 12.0262 2.49713C15.2208 2.43341 16.784 5.32395 20.059 5.32395C21.8147 14.2606 18.1622 19.8743 12.053 21.4961C6.38992 20.15 2.13481 14.4788 3.9068 5.28387Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="shieldVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
