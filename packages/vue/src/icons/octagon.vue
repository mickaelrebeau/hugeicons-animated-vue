<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'OctagonIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the octagon loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.35px) scaleY(0.82)', 'translateY(-3.29px) scaleY(1.08)', 'translateY(0.48px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.65,
      times: [0, 0.18, 0.48, 0.78, 1],
      ease: [0.23, 1, 0.32, 1],
    },
  },
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
            <motion.path d="M13.5145 2C14.7408 2 15.3539 2 15.9052 2.22836C16.4565 2.45672 16.8901 2.89027 17.7572 3.75736L20.2424 6.24264C21.1095 7.10973 21.5431 7.54328 21.7714 8.09459C21.9998 8.6459 21.9998 9.25903 21.9998 10.4853V13.5147C21.9998 14.741 21.9998 15.3541 21.7714 15.9054C21.5431 16.4567 21.1095 16.8903 20.2425 17.7574L17.7572 20.2426C16.8901 21.1097 16.4565 21.5433 15.9052 21.7716C15.3539 22 14.7408 22 13.5145 22H10.4851C9.25887 22 8.64573 22 8.0944 21.7716C7.54308 21.5433 7.10953 21.1097 6.24244 20.2426L3.75729 17.7573C2.89023 16.8903 2.4567 16.4567 2.22835 15.9054C2 15.3541 2 14.741 2 13.5148V10.4852C2 9.259 2 8.64589 2.22835 8.09458C2.4567 7.54328 2.89023 7.10974 3.75729 6.24265L6.24244 3.75743C7.10953 2.8903 7.54308 2.45674 8.0944 2.22837C8.64573 2 9.25887 2 10.4851 2H13.5145Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
