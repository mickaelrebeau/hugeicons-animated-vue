<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiVisionRecognitionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lid narrows to read and the star turns a quarter behind it
// authored from scripts/authored
const lidVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.72)', 'scaleY(1.05)', 'scaleY(1)'],
    transition: { duration: 0.66, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const starVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(46deg) scale(0.66)',
      'rotate(90deg) scale(1.12)',
      'rotate(90deg) scale(1)',
    ],
    transition: { duration: 0.78, delay: 0.1, times: [0, 0.36, 0.76, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M22 12C22 12 19 19 12 19C5 19 2 12 2 12C2 12 5 5 12 5C18.5 5 22 12 22 12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M11.6769 8.67738C11.8274 8.44087 12.1726 8.44087 12.3231 8.67738L12.7586 9.36157C13.2401 10.1182 13.8818 10.7599 14.6384 11.2414L15.3226 11.6769C15.5591 11.8274 15.5591 12.1726 15.3226 12.3231L14.6384 12.7586C13.8818 13.2401 13.2401 13.8818 12.7586 14.6384L12.3231 15.3226C12.1726 15.5591 11.8274 15.5591 11.6769 15.3226L11.2414 14.6384C10.7599 13.8818 10.1182 13.2401 9.36157 12.7586L8.67738 12.3231C8.44087 12.1726 8.44087 11.8274 8.67738 11.6769L9.36157 11.2414C10.1182 10.7599 10.7599 10.1182 11.2414 9.36157L11.6769 8.67738Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="starVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
