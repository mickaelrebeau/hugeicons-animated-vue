<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GlassWaterIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the water sloshes in the glass
// authored from scripts/authored
const waterVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-10deg)', 'rotate(8deg)', 'rotate(-3deg)', 'rotate(0deg)'],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
            <path d="M13.8171 2H10.1829C7.57044 2 6.26419 2 5.52554 2.84549C4.78688 3.69099 4.9489 5.00072 5.27294 7.62017L6.43805 17.0386C6.71215 19.2544 6.8492 20.3622 7.53418 21.081C7.64548 21.1978 7.76597 21.3052 7.89445 21.4023C8.68522 22 9.79015 22 12 22C14.2099 22 15.3148 22 16.1055 21.4023C16.234 21.3052 16.3545 21.1978 16.4658 21.081C17.1508 20.3622 17.2878 19.2544 17.5619 17.0386L18.7271 7.62017C19.0511 5.00072 19.2131 3.69099 18.4745 2.84549C17.7358 2 16.4296 2 13.8171 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M6 10C6.86548 9.35089 7.91815 9 9 9C10.0819 9 11.1345 9.35089 12 10C12.8655 10.6491 13.9181 11 15 11C16.0819 11 17.1345 10.6491 18 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="waterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
          </svg>
        </div>
</template>
