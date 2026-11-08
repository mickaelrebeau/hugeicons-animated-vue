<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Flag01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flag waves from its pole
// authored from scripts/authored
const flagVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1) skewY(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1) skewY(0deg)',
      'translate(-0.58px, 0px) scaleX(0.92) skewY(6deg)',
      'translate(0.22px, 0px) scaleX(1.03) skewY(-4deg)',
      'translate(-0.15px, 0px) scaleX(0.98) skewY(2deg)',
      'translate(0.00px, 0px) scaleX(1) skewY(0deg)',
    ],
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
            <motion.path d="M5.0249 21C5.04385 19.2643 5.04366 17.5541 5.0366 15.9209M5.0366 15.9209C5.01301 10.4614 4.91276 5.86186 5.19475 4.04271C5.5611 1.67939 9.39301 3.82993 13.9703 5.59842L16.0328 6.48729C17.5508 7.1415 19.7187 8.30352 18.7662 9.66084C18.3738 10.22 17.56 10.8596 16.0575 11.567L5.0366 15.9209Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flagVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 11.3px' }" />
          </svg>
        </div>
</template>
