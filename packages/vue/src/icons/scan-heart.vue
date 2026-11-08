<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ScanHeartIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the heart beats inside the scan brackets
// authored from scripts/authored
const heartVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.18)', 'scale(1)', 'scale(1.12)', 'scale(1)'],
    transition: { duration: 0.8, times: [0, 0.18, 0.4, 0.58, 1], ease: 'easeInOut' },
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
            <path d="M21.5 7.50028C21.4085 5.65414 21.1348 4.5031 20.316 3.68429C19.4972 2.86548 18.3461 2.59178 16.5 2.50028M2.5 7.49945C2.5915 5.65331 2.8652 4.50227 3.68401 3.68346C4.50282 2.86465 5.65386 2.59095 7.5 2.49945M21.5 16.4997C21.4085 18.3459 21.1348 19.4969 20.316 20.3157C19.4972 21.1345 18.3461 21.4082 16.5 21.4997M2.5 16.5006C2.5915 18.3467 2.8652 19.4978 3.68401 20.3166C4.50282 21.1354 5.65386 21.4091 7.5 21.5006" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11.0464 17.1316C9.35365 15.8906 6 13.0534 6 10.5003C6 8.81277 7.26316 7.44476 9 7.44476C9.9 7.44476 10.8 7.73888 12 8.91534C13.2 7.73888 14.1 7.44476 15 7.44476C16.7368 7.44476 18 8.81277 18 10.5003C18 13.0534 14.6463 15.8906 12.9536 17.1316C12.384 17.5492 11.616 17.5492 11.0464 17.1316Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="heartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
          </svg>
        </div>
</template>
