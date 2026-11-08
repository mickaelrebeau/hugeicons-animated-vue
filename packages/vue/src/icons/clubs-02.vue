<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Clubs02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the club swells up from its stem and settles
// authored from scripts/authored
const clubVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 1.18px) scale(0.88)',
      'translate(0.00px, -0.59px) scale(1.06)',
      'translate(0.00px, 0.10px) scale(0.99)',
      'translate(0.00px, 0.00px) scale(1)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M12 2C9.79086 2 8 3.8529 8 6.13856C8 6.89237 8.19479 7.59911 8.53513 8.20784C5.9581 7.52158 3 9.51116 3 12.3464C3 15.5508 6.13941 17.0241 8.81012 16.3268C9.67373 16.1013 10.1055 15.9886 10.2279 16.1211C10.696 16.6279 9.34611 19.1578 9.10267 19.6578C8.64426 20.5995 8.41506 21.0703 8.59267 21.3642C9.01463 22.0625 14.8121 22.3493 15.4073 21.3642C15.5849 21.0703 15.3557 20.5995 14.8973 19.6578C14.6539 19.1578 13.304 16.6279 13.7721 16.1211C13.8945 15.9886 14.3263 16.1013 15.1899 16.3268C17.8488 17.021 21 15.5187 21 12.3464C21 9.53108 18.0333 7.52389 15.4649 8.20784C15.8052 7.59911 16 6.89237 16 6.13856C16 3.8529 14.2091 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="clubVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.2px' }" />
          </svg>
        </div>
</template>
