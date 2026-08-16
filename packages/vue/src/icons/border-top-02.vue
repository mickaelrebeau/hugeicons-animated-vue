<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BorderTop02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the named border traces the exact edge it represents
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.38px) scale(0.74)', 'translateY(-0.39px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

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
            <motion.path d="M2.75313 17.6664C2.94642 18.7148 3.28828 19.4863 3.89295 20.0963C4.49762 20.7063 5.26247 21.0511 6.30171 21.2461M2.50666 9.99976C2.50171 10.5893 2.50171 11.2265 2.50171 11.9164C2.50171 12.6063 2.50171 13.2436 2.50666 13.8331M10.1017 21.4948C10.6861 21.4998 11.3178 21.4998 12.0017 21.4998C12.6856 21.4998 13.3173 21.4998 13.9018 21.4948M17.7017 21.2461C18.7409 21.0511 19.5058 20.7063 20.1105 20.0963C20.7151 19.4863 21.057 18.7148 21.2503 17.6664M21.4968 9.99976C21.5017 10.5891 21.5017 11.2268 21.5017 11.9164C21.5017 12.6063 21.5017 13.2434 21.4968 13.8329" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.75px' }" />
            <motion.path d="M2.49976 6.49988C2.69829 5.40594 3.04945 4.60084 3.67056 3.96434C5.09962 2.49988 7.39967 2.49988 11.9998 2.49988C16.5998 2.49988 18.8999 2.49988 20.329 3.96435C20.9501 4.60084 21.3012 5.40594 21.4998 6.49988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
          </svg>
        </div>
</template>
