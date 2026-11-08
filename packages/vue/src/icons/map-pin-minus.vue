<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MapPinMinusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the minus shrinks beside the pin
// authored from scripts/authored
const minusVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.3)',
      'translate(0.00px, 0px) scaleX(1.1)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
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
            <path d="M14.5 10.5C14.5 12.1569 13.1569 13.5 11.5 13.5C9.84315 13.5 8.5 12.1569 8.5 10.5C8.5 8.84315 9.84315 7.5 11.5 7.5C13.1569 7.5 14.5 8.84315 14.5 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12.4531 21.0625C12.2202 21.354 11.8603 21.5 11.5 21.5C11.1397 21.5 10.7798 21.354 10.5469 21.0625C9.32325 19.5313 7.57535 17.7562 6.5 16.8086C4.5 15.0462 3.5 13.0728 3.5 10.5352C3.50019 6.09743 7.08184 2.5 11.5 2.5C15.9182 2.5 19.4998 6.09743 19.5 10.5352C19.5 11.6168 19.3183 12.596 18.9549 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20.5 17.495L14.5 17.495" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="minusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17.5px' }" />
          </svg>
        </div>
</template>
